import express from 'express';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { verifyToken } from '../middleware/auth.js';
import User from '../models/User.js';

const router = express.Router();

// REGISTER
router.post('/register', async (req, res) => {
    try {
        const { username, email, password } = req.body;

        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ message: "User already exists." });
        }

        const salt = await bcrypt.genSalt();
        const passwordHash = await bcrypt.hash(password, salt);

        const newUser = new User({
            username,
            email,
            password: passwordHash,
        });
        const savedUser = await newUser.save();

        // We don't send the password back
        savedUser.password = undefined;

        res.status(201).json(savedUser);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// LOGIN
router.post('/login', async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ email });

        if (!user) {
            return res.status(400).json({ message: "User does not exist." });
        }

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).json({ message: "Invalid credentials." });
        }

        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: "1h" });

        user.password = undefined;

        res.status(200).json({ token, user });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// GET SAVED JOBS
router.get('/saved-jobs', verifyToken, async (req, res) => {
    try {
        const user = await User.findById(req.user.id);
        res.status(200).json(user.savedJobs);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// SAVE JOB
router.post('/saved-jobs/:jobId', verifyToken, async (req, res) => {
    try {
        const user = await User.findById(req.user.id);
        if (!user.savedJobs.includes(req.params.jobId)) {
            user.savedJobs.push(req.params.jobId);
            await user.save();
        }
        res.status(200).json(user.savedJobs);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// UNSAVE JOB
router.delete('/saved-jobs/:jobId', verifyToken, async (req, res) => {
    try {
        const user = await User.findById(req.user.id);
        user.savedJobs = user.savedJobs.filter(id => id !== req.params.jobId);
        await user.save();
        res.status(200).json(user.savedJobs);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

export default router;
