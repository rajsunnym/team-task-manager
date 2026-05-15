import React, {
  useEffect,
  useState
} from 'react';

import {
  FolderKanban,
  ListTodo,
  Loader2,
  CheckCircle2,
  AlertTriangle
} from 'lucide-react';

import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer
} from 'recharts';

import {
  useNavigate
} from 'react-router-dom';

import {
  useTheme
} from 'next-themes';

import {
  useAuth
} from '../context/AuthContext';

import api from '../services/api';

interface DashboardStats {

  totalProjects: number;

  totalTasks: number;

  inProgress: number;

  completed: number;

  overdue: number;
}

const COLORS = [
  '#3B82F6',
  '#22C55E',
  '#EAB308',
  '#A855F7',
  '#EF4444'
];

export default function Dashboard() {

  const [stats, setStats] =
    useState<DashboardStats>({

      totalProjects: 0,
      totalTasks: 0,
      inProgress: 0,
      completed: 0,
      overdue: 0,

    });

  const [loading, setLoading] =
    useState(true);

  const [error, setError] =
    useState('');

  const navigate =
    useNavigate();

  const {
    theme,
    setTheme
  } = useTheme();

  const {
    user,
    logout
  } = useAuth();

  const fetchDashboard = async () => {

    try {

      setLoading(true);

      const { data } =
        await api.get('/dashboard');

      setStats(data);

    } catch (err) {

      setError(
        'Failed to load dashboard'
      );

    } finally {

      setLoading(false);

    }
  };

  useEffect(() => {

    fetchDashboard();

  }, []);

  if (loading) {

    return (

      <div className="min-h-screen bg-white dark:bg-[#020617] flex items-center justify-center">

        <div className="text-slate-900 dark:text-white text-lg animate-pulse">

          Loading dashboard...

        </div>

      </div>

    );
  }

  if (error) {

    return (

      <div className="min-h-screen bg-white dark:bg-[#020617] flex items-center justify-center">

        <div className="text-red-500 text-lg">

          {error}

        </div>

      </div>

    );
  }

  const chartData = [

    {
      name: 'Projects',
      value: stats.totalProjects
    },

    {
      name: 'Tasks',
      value: stats.totalTasks
    },

    {
      name: 'Progress',
      value: stats.inProgress
    },

    {
      name: 'Completed',
      value: stats.completed
    },

    {
      name: 'Overdue',
      value: stats.overdue
    }

  ];

  return (

    <div className="min-h-screen bg-white dark:bg-[#020617] p-6 transition-all duration-300">

      {/* Header */}
      <div className="flex items-start justify-between mb-8 gap-4">

        {/* Left */}
        <div>

          <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white flex items-center gap-3">

            Dashboard

          </h1>

          <p className="text-slate-500 dark:text-slate-400 text-base md:text-lg mt-3">

            Manage projects, tasks and team progress.

          </p>

        </div>

        {/* Right */}
        <div className="flex items-center gap-4">

          {/* Theme Toggle */}
          <button
            onClick={() =>
              setTheme(
                theme === 'dark'
                  ? 'light'
                  : 'dark'
              )
            }
            className="bg-white dark:bg-[#081225] border border-slate-200 dark:border-slate-800 px-5 py-3 rounded-2xl font-semibold shadow-lg"
          >

            {theme === 'dark'
              ? '☀️ Light'
              : '🌙 Dark'}

          </button>

          {/* User Card */}
          <div className="bg-white dark:bg-[#081225] border border-slate-200 dark:border-slate-800 rounded-2xl px-4 py-3 shadow-lg flex items-center gap-3">

            <div className="w-11 h-11 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold">

              {user?.name?.charAt(0)}

            </div>

            <div>

              <h3 className="font-semibold text-slate-900 dark:text-white leading-none">

                {user?.name}

              </h3>

              <span
                className={`inline-block mt-1 px-2 py-1 text-xs rounded-lg font-medium ${user?.role === 'admin'
                  ? 'bg-purple-600 text-white'
                  : 'bg-slate-300 dark:bg-slate-700 text-slate-800 dark:text-slate-200'
                  }`}
              >

                {user?.role === 'admin'
                  ? 'Admin'
                  : 'Member'}

              </span>

            </div>

          </div>

          {/* Logout */}
          <button
            onClick={() => {

              logout();

              navigate('/login');

            }}
            className="bg-red-600 hover:bg-red-700 text-white px-5 py-3 rounded-2xl font-semibold shadow-lg transition-all duration-300"
          >

            Logout

          </button>

        </div>

      </div>

      {/* Analytics Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-5 gap-5">

        {/* Total Projects */}
        <div className="bg-white dark:bg-[#081225] border border-slate-200 dark:border-slate-800 rounded-3xl p-6 shadow-xl">

          <div className="flex items-center justify-between mb-5">

            <h2 className="text-slate-500 dark:text-slate-400 text-sm">

              Total Projects

            </h2>

            <div className="w-12 h-12 rounded-2xl bg-blue-500/20 flex items-center justify-center">

              <FolderKanban className="w-6 h-6 text-blue-500" />

            </div>

          </div>

          <h1 className="text-5xl font-bold text-blue-500">

            {stats.totalProjects}

          </h1>

        </div>

        {/* Total Tasks */}
        <div className="bg-white dark:bg-[#081225] border border-slate-200 dark:border-slate-800 rounded-3xl p-6 shadow-xl">

          <div className="flex items-center justify-between mb-5">

            <h2 className="text-slate-500 dark:text-slate-400 text-sm">

              Total Tasks

            </h2>

            <div className="w-12 h-12 rounded-2xl bg-green-500/20 flex items-center justify-center">

              <ListTodo className="w-6 h-6 text-green-500" />

            </div>

          </div>

          <h1 className="text-5xl font-bold text-green-500">

            {stats.totalTasks}

          </h1>

        </div>

        {/* In Progress */}
        <div className="bg-white dark:bg-[#081225] border border-slate-200 dark:border-slate-800 rounded-3xl p-6 shadow-xl">

          <div className="flex items-center justify-between mb-5">

            <h2 className="text-slate-500 dark:text-slate-400 text-sm">

              In Progress

            </h2>

            <div className="w-12 h-12 rounded-2xl bg-yellow-500/20 flex items-center justify-center">

              <Loader2 className="w-6 h-6 text-yellow-500" />

            </div>

          </div>

          <h1 className="text-5xl font-bold text-yellow-500">

            {stats.inProgress}

          </h1>

        </div>

        {/* Completed */}
        <div className="bg-white dark:bg-[#081225] border border-slate-200 dark:border-slate-800 rounded-3xl p-6 shadow-xl">

          <div className="flex items-center justify-between mb-5">

            <h2 className="text-slate-500 dark:text-slate-400 text-sm">

              Completed

            </h2>

            <div className="w-12 h-12 rounded-2xl bg-purple-500/20 flex items-center justify-center">

              <CheckCircle2 className="w-6 h-6 text-purple-500" />

            </div>

          </div>

          <h1 className="text-5xl font-bold text-purple-500">

            {stats.completed}

          </h1>

        </div>

        {/* Overdue */}
        <div className="bg-white dark:bg-[#081225] border border-slate-200 dark:border-slate-800 rounded-3xl p-6 shadow-xl">

          <div className="flex items-center justify-between mb-5">

            <h2 className="text-slate-500 dark:text-slate-400 text-sm">

              Overdue

            </h2>

            <div className="w-12 h-12 rounded-2xl bg-red-500/20 flex items-center justify-center">

              <AlertTriangle className="w-6 h-6 text-red-500" />

            </div>

          </div>

          <h1 className="text-5xl font-bold text-red-500">

            {stats.overdue}

          </h1>

        </div>

      </div>

      {/* Main Content */}
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-5 mt-8">

        {/* Left Sidebar Style Section */}
        <div className="space-y-5">

          {/* Task Status */}
          <div className="bg-white dark:bg-[#081225] border border-slate-200 dark:border-slate-800 rounded-3xl p-6 shadow-xl">

            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">

              Task Status

            </h2>

            <div className="space-y-6">

              {/* Completed */}
              <div>

                <div className="flex justify-between mb-2">

                  <span className="text-slate-700 dark:text-slate-300">

                    Completed Tasks

                  </span>

                  <span className="text-green-500 font-bold">

                    {stats.completed}

                  </span>

                </div>

                <div className="w-full bg-slate-200 dark:bg-slate-800 rounded-full h-3">

                  <div
                    className="bg-green-500 h-3 rounded-full"
                    style={{
                      width: `${stats.totalTasks
                        ? (stats.completed / stats.totalTasks) * 100
                        : 0}%`
                    }}
                  />

                </div>

              </div>

              {/* In Progress */}
              <div>

                <div className="flex justify-between mb-2">

                  <span className="text-slate-700 dark:text-slate-300">

                    In Progress

                  </span>

                  <span className="text-yellow-500 font-bold">

                    {stats.inProgress}

                  </span>

                </div>

                <div className="w-full bg-slate-200 dark:bg-slate-800 rounded-full h-3">

                  <div
                    className="bg-yellow-500 h-3 rounded-full"
                    style={{
                      width: `${stats.totalTasks
                        ? (stats.inProgress / stats.totalTasks) * 100
                        : 0}%`
                    }}
                  />

                </div>

              </div>

              {/* Overdue */}
              <div>

                <div className="flex justify-between mb-2">

                  <span className="text-slate-700 dark:text-slate-300">

                    Overdue Tasks

                  </span>

                  <span className="text-red-500 font-bold">

                    {stats.overdue}

                  </span>

                </div>

                <div className="w-full bg-slate-200 dark:bg-slate-800 rounded-full h-3">

                  <div
                    className="bg-red-500 h-3 rounded-full"
                    style={{
                      width: `${stats.totalTasks
                        ? (stats.overdue / stats.totalTasks) * 100
                        : 0}%`
                    }}
                  />

                </div>

              </div>

            </div>

          </div>

          {/* Task Activity */}
          <div className="bg-white dark:bg-[#081225] border border-slate-200 dark:border-slate-800 rounded-3xl p-6 shadow-xl">

            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">

              Task Activity

            </h2>

            <div className="space-y-4">

              {/* Project Created */}
              <button
                onClick={() => navigate('/projects')}
                className="w-full text-left bg-slate-100 dark:bg-slate-900 rounded-2xl p-4 hover:scale-[1.02] hover:bg-slate-200 dark:hover:bg-slate-800 transition-all duration-300 cursor-pointer"
              >

                <h3 className="font-semibold text-slate-900 dark:text-white">

                  Project Created

                </h3>

                <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">

                  New projects can now be managed by teams.

                </p>

              </button>

              {/* Tasks Assigned */}
              <button
                onClick={() => navigate('/projects')}
                className="w-full text-left bg-slate-100 dark:bg-slate-900 rounded-2xl p-4 hover:scale-[1.02] hover:bg-slate-200 dark:hover:bg-slate-800 transition-all duration-300 cursor-pointer"
              >

                <h3 className="font-semibold text-slate-900 dark:text-white">

                  Tasks Assigned

                </h3>

                <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">

                  Members can assign and track tasks.

                </p>

              </button>

              {/* Dashboard Analytics */}
              <button
                onClick={() => navigate('/dashboard')}
                className="w-full text-left bg-slate-100 dark:bg-slate-900 rounded-2xl p-4 hover:scale-[1.02] hover:bg-slate-200 dark:hover:bg-slate-800 transition-all duration-300 cursor-pointer"
              >

                <h3 className="font-semibold text-slate-900 dark:text-white">

                  Dashboard Analytics Active

                </h3>

                <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">

                  Status and overdue analytics are updating.

                </p>

              </button>

            </div>

          </div>

        </div>

        {/* Right Side */}
        <div className="xl:col-span-2">

          {/* Task Overview */}
          <div className="bg-white dark:bg-[#081225] border border-slate-200 dark:border-slate-800 rounded-3xl p-6 shadow-xl">

            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">

              Task Overview

            </h2>

            <div className="h-[500px]">

              <ResponsiveContainer width="100%" height="100%">

                <PieChart>

                  <Pie
                    data={chartData}
                    cx="50%"
                    cy="50%"
                    innerRadius={80}
                    outerRadius={140}
                    paddingAngle={4}
                    dataKey="value"
                  >

                    {chartData.map((_, index) => (

                      <Cell
                        key={index}
                        fill={COLORS[index % COLORS.length]}
                      />

                    ))}

                  </Pie>

                  <Tooltip />

                </PieChart>

              </ResponsiveContainer>

            </div>

          </div>

        </div>

      </div>

    </div>

  );
}