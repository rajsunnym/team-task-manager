import React, {
  useState
} from 'react';

import {
  Outlet
} from 'react-router-dom';

import Sidebar from './Sidebar';

export default function Layout() {

  const [sidebarOpen, setSidebarOpen] =
    useState(false);

  return (

    <div className="flex min-h-screen bg-white dark:bg-[#020617] transition-all duration-300">

      {/* Mobile Backdrop */}
      {sidebarOpen && (

        <div
          className="fixed inset-0 z-40 bg-black/60 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />

      )}

      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex-1 flex flex-col min-w-0 bg-white dark:bg-[#020617] transition-all duration-300">

        {/* Mobile Header */}
        <header className="lg:hidden flex items-center gap-3 px-4 py-4 bg-white dark:bg-[#081225] border-b border-slate-200 dark:border-slate-800 sticky top-0 z-30 transition-all duration-300">

          {/* Menu Button */}
          <button
            onClick={() => setSidebarOpen(true)}
            className="p-2 rounded-xl text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-800 transition-all"
          >

            <svg
              className="w-5 h-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >

              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />

            </svg>

          </button>

          {/* Logo */}
          <div className="flex items-center gap-3">

            <div className="w-9 h-9 bg-blue-600 rounded-xl flex items-center justify-center shadow-lg">

              <svg
                className="w-5 h-5 text-white"
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

              <h1 className="font-bold text-slate-900 dark:text-white text-sm">

                WorkNova

              </h1>

              <p className="text-xs text-slate-500 dark:text-slate-400">

                Team Workspace

              </p>

            </div>

          </div>

        </header>

        {/* Page Content */}
        <main className="flex-1 overflow-auto bg-white dark:bg-[#020617] transition-all duration-300">

          <Outlet />

        </main>

      </div>

    </div>

  );
}