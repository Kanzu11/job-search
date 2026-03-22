# Job Sphere

Job Sphere is a modern, responsive web application for finding and managing job opportunities. Built with React and Vite, it features a dynamic user interface carefully designed to provide an optimal and engaging user experience.

## Demo

<div align="center">
  <video src="./public/job%20sphere%20recording.mp4" width="100%" controls>
  </video>
</div>

*(If the video does not play automatically, you can find it directly at `public/job sphere recording.mp4`)*

## Features

- **User Authentication:** Fully integrated signup and login functionality with JWT token handling.
- **Form Validation:** Robust client-side validation using Formik and Yup for authentication forms.
- **Dynamic Job Search:** Responsive search capability featuring a debounced input mechanism to optimize API calls and improve performance.
- **Advanced Filtering & Saved Jobs:** Filter through job listings and save your favorite jobs using a dedicated UI sidebar.
- **Modern UI:** fully responsive interactive layouts, and Tailwind CSS styling.
- **Centralized Data:** Seamless API integration connected to backend endpoints for user authentication and dynamic job listing management.

## Tech Stack

- **Frontend Framework:** [React 19](https://react.dev/)
- **Build Tool:** [Vite 7](https://vitejs.dev/)
- **Routing:** [React Router v7](https://reactrouter.com/)
- **Styling:** [Tailwind CSS v4](https://tailwindcss.com/)
- **Form Handling & Validation:** [Formik](https://formik.org/) & [Yup](https://github.com/jquense/yup)
- **Icons:** [Lucide React](https://lucide.dev/)

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18 or higher recommended)
- npm, yarn, or pnpm

### Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd task
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Configure Environment Variables:
   Ensure you create a `.env` file in the root directory so the application can communicate with your backend APIs. (Note: `.env` is ignored by git to keep your secrets safe).
   ```env
   VITE_API_URL=http://localhost:5000/api
   ```

4. Run the development server:
   ```bash
   npm run dev
   ```

5. Open your browser and navigate to the local server URL provided by Vite (usually `http://localhost:5173`).
