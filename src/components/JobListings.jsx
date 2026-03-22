import React from 'react';
import { Bookmark, Share2 } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function JobListings({ jobs, savedJobIds = [], onToggleSave = () => { } }) {
  return (
    <div className="flex-1 flex flex-col gap-5">
      {jobs.map(job => {
        const isSaved = savedJobIds.includes(String(job.id));
        return (
          <div key={job.id} className="job-card bg-white rounded-2xl p-6 border border-gray-100 flex gap-5 group">
            <div className="w-14 h-14 rounded-xl flex items-center justify-center shrink-0 bg-white border border-gray-100 overflow-hidden shadow-sm">
              <img src={job.logo} alt={job.company} className="w-9 h-9 object-contain" />
            </div>
            <div className="flex-1">
              <div className="flex justify-between items-start mb-2">
                <div>
                  <Link to={`/job/${job.id}`}>
                    <h3 className="text-2xl font-semibold text-gray-900 mb-1 hover:text-[#0034d1] transition">{job.title}</h3>
                  </Link>
                  <p className="text-[17px] text-gray-600">{job.company}</p>
                </div>
                <div className="flex gap-3 text-gray-400">
                  <button onClick={() => onToggleSave(job.id)} className={`hover:text-[#0034d1] transition ${isSaved ? 'text-[#0034d1]' : ''}`}>
                    <Bookmark className="w-6 h-6" fill={isSaved ? "currentColor" : "none"} />
                  </button>
                  <button className="hover:text-[#0034d1] transition"><Share2 className="w-6 h-6" /></button>
                </div>
              </div>
              <div className="flex gap-2 mb-4">
                {[job.location, job.type, `${job.salary.toLocaleString()} ${job.currency}`].map(tag => (
                  <span key={tag} className="px-3 py-1 bg-gray-100 text-gray-700 rounded text-[15px] tracking-wide font-light">
                    {tag}
                  </span>
                ))}
              </div>
              <p className="text-[15px] text-gray-500 leading-[1.6] font-light break-words">
                {job.description}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
