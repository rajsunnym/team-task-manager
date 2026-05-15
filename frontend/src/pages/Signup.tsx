import React, {
  useState
} from 'react';

import {
  Link,
  useNavigate
} from 'react-router-dom';

import { useAuth } from '../context/AuthContext';

export default function Signup() {

  const { signup, user } = useAuth();

  const navigate = useNavigate();

  const [form, setForm] = useState({

    name: '',
    email: '',
    password: ''

  });

  const [error, setError] =
    useState('');

  const [loading, setLoading] =
    useState(false);

  if (user) {

    navigate('/dashboard', {
      replace: true
    });

    return null;

  }

  const handleSubmit = async (
    e: React.FormEvent
  ) => {

    e.preventDefault();

    setError('');

    if (form.password.length < 6) {

      setError(
        'Password must be at least 6 characters'
      );

      return;

    }

    setLoading(true);

    try {

      await signup(
        form.name,
        form.email,
        form.password
      );

      navigate('/dashboard');

    } catch (err: any) {

      setError(
        err.response?.data?.message ||
        'Signup failed'
      );

    } finally {

      setLoading(false);

    }

  };

  return (

    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800 flex items-center justify-center p-4">

      <div className="w-full max-w-md">

        {/* Logo */}
        <div className="text-center mb-8">

          <div className="inline-flex items-center justify-center w-14 h-14 bg-blue-600 rounded-2xl shadow-lg mb-4">

            <svg
              className="w-8 h-8 text-white"
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

          <h1 className="text-3xl font-bold text-white">

            Create your account

          </h1>

          <p className="text-slate-400 mt-2 text-sm">

            Join WorkNova and manage projects professionally

          </p>

        </div>

        {/* Card */}
        <div className="bg-white rounded-3xl shadow-2xl p-8">

          {error && (

            <div className="mb-4 px-4 py-3 bg-red-50 border border-red-200 rounded-xl text-red-600 text-sm">

              {error}

            </div>

          )}

          <form
            onSubmit={handleSubmit}
            className="space-y-5"
          >

            {/* Name */}
            <div>

              <label className="block text-sm font-semibold text-slate-700 mb-2">

                Full Name

              </label>

              <input
                type="text"
                className="w-full border border-slate-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Jane Smith"
                value={form.name}
                onChange={(e) =>
                  setForm({
                    ...form,
                    name: e.target.value
                  })
                }
                required
              />

            </div>

            {/* Email */}
            <div>

              <label className="block text-sm font-semibold text-slate-700 mb-2">

                Email

              </label>

              <input
                type="email"
                className="w-full border border-slate-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="you@example.com"
                value={form.email}
                onChange={(e) =>
                  setForm({
                    ...form,
                    email: e.target.value
                  })
                }
                required
              />

            </div>

            {/* Password */}
            <div>

              <label className="block text-sm font-semibold text-slate-700 mb-2">

                Password

              </label>

              <input
                type="password"
                className="w-full border border-slate-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Minimum 6 characters"
                value={form.password}
                onChange={(e) =>
                  setForm({
                    ...form,
                    password: e.target.value
                  })
                }
                required
                minLength={6}
              />

            </div>

            {/* Button */}
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-blue-600 hover:bg-blue-700 transition-all text-white py-3 rounded-xl font-semibold shadow-lg"
            >

              {loading
                ? 'Creating account...'
                : 'Create Account'}

            </button>

          </form>

          {/* Footer */}
          <p className="text-center text-sm text-slate-500 mt-6">

            Already have an account?{' '}

            <Link
              to="/login"
              className="text-blue-600 hover:text-blue-700 font-semibold"
            >

              Sign in

            </Link>

          </p>

        </div>

      </div>

    </div>

  );

}