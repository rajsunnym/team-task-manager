import React from 'react';

import {
  NavLink,
  useNavigate
} from 'react-router-dom';

export default function Sidebar() {

  const navigate = useNavigate();

  return (

    <div className="w-72 min-h-screen bg-white dark:bg-[#081225] text-slate-900 dark:text-white flex flex-col border-r border-slate-200 dark:border-slate-800 transition-all duration-300">

      {/* Logo */}
      <div className="px-6 py-8 border-b border-slate-200 dark:border-slate-800">

        <div className="flex items-center gap-3">

          <div className="w-12 h-12 rounded-2xl bg-blue-600 flex items-center justify-center shadow-lg">

            <svg
              className="w-7 h-7 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >

              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
              />

            </svg>

          </div>

          <div>

            <h1 className="text-2xl font-bold">

              WorkNova

            </h1>

            <p className="text-slate-500 dark:text-slate-400 text-sm">

              Team Workspace

            </p>

          </div>

        </div>

      </div>

      {/* Navigation */}
      <nav className="flex-1 px-4 py-6 overflow-y-auto">

        <div className="space-y-3">

          {/* Dashboard */}
          <NavLink
            to="/dashboard"
            className={({ isActive }) =>
              `flex items-center gap-3 px-5 py-4 rounded-3xl transition-all duration-300 font-semibold text-lg ${isActive
                ? 'bg-blue-600 text-white shadow-2xl'
                : 'text-slate-700 dark:text-slate-300 bg-slate-100/80 dark:bg-slate-800/40 hover:bg-slate-200 dark:hover:bg-slate-800'
              }`
            }
          >

            <span className="text-xl">🏠</span>

            <span>Dashboard</span>

          </NavLink>

          {/* Projects */}
          <NavLink
            to="/projects"
            className={({ isActive }) =>
              `flex items-center gap-3 px-5 py-4 rounded-3xl transition-all duration-300 font-semibold text-lg ${isActive
                ? 'bg-blue-600 text-white shadow-2xl'
                : 'text-slate-700 dark:text-slate-300 bg-slate-100/80 dark:bg-slate-800/40 hover:bg-slate-200 dark:hover:bg-slate-800'
              }`
            }
          >

            <span className="text-xl">📁</span>

            <span>Projects</span>

          </NavLink>

        </div>

        {/* Quick Actions */}
        <div className="mt-10">

          <h3 className="text-sm uppercase tracking-widest text-slate-400 mb-4 px-2">

            Quick Actions

          </h3>

          <div className="space-y-3">

            <button
              onClick={() => navigate('/projects')}
              className="w-full bg-gradient-to-r from-blue-600 to-blue-500 text-white rounded-2xl py-3 font-semibold hover:scale-[1.02] transition-all duration-300 shadow-lg"
            >

              + New Project

            </button>

            <button
              onClick={() => navigate('/projects')}
              className="w-full bg-slate-200 dark:bg-slate-800 text-slate-800 dark:text-white rounded-2xl py-3 font-semibold hover:bg-slate-300 dark:hover:bg-slate-700 transition-all duration-300"
            >

              + Add Task

            </button>

          </div>

        </div>

      </nav>

    </div>

  );
}