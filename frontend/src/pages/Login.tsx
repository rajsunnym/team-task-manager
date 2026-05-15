import React, { useState } from 'react';

import {
  Link,
  useNavigate
} from 'react-router-dom';

import {
  Eye,
  EyeOff,
  ShieldCheck
} from 'lucide-react';

import { useAuth } from '../context/AuthContext';

export default function Login() {

  const navigate = useNavigate();

  const { login } = useAuth();

  const [email, setEmail] =
    useState('');

  const [password, setPassword] =
    useState('');

  const [showPassword, setShowPassword] =
    useState(false);

  const [loading, setLoading] =
    useState(false);

  const [error, setError] =
    useState('');

  const handleSubmit = async (
    e: React.FormEvent
  ) => {

    e.preventDefault();

    try {

      setLoading(true);

      await login(email, password);

      navigate('/dashboard');

    } catch (err: any) {

      setError(
        err?.response?.data?.message ||
        'Login failed'
      );

    } finally {

      setLoading(false);

    }
  };

  return (

    <div className="min-h-screen bg-[#020617] flex overflow-hidden">

      {/* LEFT SIDE */}
      <div className="hidden lg:flex flex-1 relative items-center justify-center bg-gradient-to-br from-blue-700 via-blue-900 to-slate-950 p-12 overflow-hidden">

        {/* Blur Circles */}
        <div className="absolute w-72 h-72 bg-blue-500/20 rounded-full blur-3xl top-10 left-10 animate-pulse"></div>

        <div className="absolute w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl bottom-0 right-0 animate-pulse"></div>

        <div className="relative z-10 max-w-lg">

          <div className="flex items-center gap-4 mb-8">

            <div className="w-16 h-16 rounded-3xl bg-blue-600 flex items-center justify-center shadow-2xl">

              <ShieldCheck className="w-9 h-9 text-white" />

            </div>

            <div>

              <h1 className="text-5xl font-extrabold text-white">

                WorkNova

              </h1>

              <p className="text-slate-300 mt-2">

                Team Management Platform

              </p>

            </div>

          </div>

          <h2 className="text-4xl font-bold text-white leading-tight">

            Manage projects smarter and faster

          </h2>

          {/* Feature Cards */}
          <div className="grid grid-cols-2 gap-4 mt-10">

            <div className="bg-white/10 backdrop-blur-xl border border-white/10 rounded-3xl p-5">

              <h3 className="text-white font-bold text-xl">

                24/7

              </h3>

              <p className="text-slate-300 text-sm mt-1">

                Real-time sync

              </p>

            </div>

            <div className="bg-white/10 backdrop-blur-xl border border-white/10 rounded-3xl p-5">

              <h3 className="text-white font-bold text-xl">

                Teams

              </h3>

              <p className="text-slate-300 text-sm mt-1">

                Team collaboration

              </p>

            </div>

            <div className="bg-white/10 backdrop-blur-xl border border-white/10 rounded-3xl p-5">

              <h3 className="text-white font-bold text-xl">

                Secure

              </h3>

              <p className="text-slate-300 text-sm mt-1">

                Protected workspace

              </p>

            </div>

          </div>

        </div>

      </div>

      {/* RIGHT SIDE */}
      <div className="flex-1 flex items-center justify-center p-6 relative">

        <div className="w-full max-w-md">

          {/* Mobile Logo */}
          <div className="lg:hidden flex items-center justify-center gap-3 mb-10">

            <div className="w-14 h-14 rounded-2xl bg-blue-600 flex items-center justify-center shadow-xl">

              <ShieldCheck className="w-7 h-7 text-white" />

            </div>

            <div>

              <h1 className="text-3xl font-bold text-white">

                WorkNova

              </h1>

            </div>

          </div>

          {/* Login Card */}
          <div className="bg-white/10 backdrop-blur-2xl border border-white/10 rounded-[32px] p-8 shadow-2xl">

            <h2 className="text-4xl font-bold text-white text-center">

              Welcome Back

            </h2>

            <p className="text-slate-300 text-center mt-3">

              Sign in to continue

            </p>

            {/* Error */}
            {error && (

              <div className="mt-5 bg-red-500/10 border border-red-500/20 text-red-300 rounded-2xl p-4 text-sm">

                {error}

              </div>

            )}

            {/* FORM */}
            <form
              onSubmit={handleSubmit}
              className="mt-8 space-y-5"
            >

              {/* Email */}
              <div>

                <label className="text-slate-300 text-sm mb-2 block">

                  Email

                </label>

                <input
                  type="email"
                  value={email}
                  onChange={(e) =>
                    setEmail(e.target.value)
                  }
                  placeholder="you@example.com"
                  className="w-full bg-white/10 border border-white/10 text-white placeholder:text-slate-400 rounded-2xl px-5 py-4 outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />

              </div>

              {/* Password */}
              <div>

                <label className="text-slate-300 text-sm mb-2 block">

                  Password

                </label>

                <div className="relative">

                  <input
                    type={
                      showPassword
                        ? 'text'
                        : 'password'
                    }
                    value={password}
                    onChange={(e) =>
                      setPassword(e.target.value)
                    }
                    placeholder="Enter password"
                    className="w-full bg-white/10 border border-white/10 text-white placeholder:text-slate-400 rounded-2xl px-5 py-4 pr-14 outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  />

                  <button
                    type="button"
                    onClick={() =>
                      setShowPassword(
                        !showPassword
                      )
                    }
                    className="absolute top-1/2 -translate-y-1/2 right-4 text-slate-400"
                  >

                    {showPassword
                      ? <EyeOff size={20} />
                      : <Eye size={20} />}

                  </button>

                </div>

              </div>

              {/* Remember */}
              <div className="flex items-center justify-between text-sm">

                <label className="flex items-center gap-2 text-slate-300">

                  <input type="checkbox" />

                  Remember me

                </label>

                <button
                  type="button"
                  className="text-blue-400 hover:text-blue-300"
                >

                  Forgot password?

                </button>

              </div>

              {/* Login Button */}
              <button
                type="submit"
                disabled={loading}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white py-4 rounded-2xl font-bold text-lg transition-all duration-300 shadow-2xl hover:scale-[1.02]"
              >

                {loading
                  ? 'Signing in...'
                  : 'Sign In'}

              </button>

            </form>

            {/* Footer */}
            <p className="text-center text-slate-400 mt-8">

              Don’t have an account?

              <Link
                to="/signup"
                className="text-blue-400 hover:text-blue-300 ml-2 font-semibold"
              >

                Sign up

              </Link>

            </p>

          </div>

        </div>

      </div>

    </div>

  );
}