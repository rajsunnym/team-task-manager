import React from 'react';

import {
  BrowserRouter,
  Routes,
  Route,
  Navigate
} from 'react-router-dom';

import { AuthProvider } from './context/AuthContext';

import ProtectedRoute from './components/ProtectedRoute';

import Layout from './components/Layout';

import Login from './pages/Login';

import Signup from './pages/Signup';

import Dashboard from './pages/Dashboard';

import Projects from './pages/Projects';

import ProjectDetail from './pages/ProjectDetail';

import Board from './pages/Board';

import NotFound from './pages/NotFound';

export default function App() {

  return (

    <AuthProvider>

      <BrowserRouter>

        <Routes>

          {/* Public Routes */}
          <Route
            path="/login"
            element={<Login />}
          />

          <Route
            path="/signup"
            element={<Signup />}
          />

          {/* Protected Routes */}
          <Route element={<ProtectedRoute />}>

            <Route element={<Layout />}>

              {/* Redirect */}
              <Route
                path="/"
                element={
                  <Navigate
                    to="/dashboard"
                    replace
                  />
                }
              />

              {/* Dashboard */}
              <Route
                path="/dashboard"
                element={<Dashboard />}
              />

              {/* Projects */}
              <Route
                path="/projects"
                element={<Projects />}
              />

              {/* Project Details */}
              <Route
                path="/projects/:id"
                element={<ProjectDetail />}
              />

              {/* Board */}
              <Route
                path="/board"
                element={<Board />}
              />

            </Route>

          </Route>

          {/* 404 */}
          <Route
            path="*"
            element={<NotFound />}
          />

        </Routes>

      </BrowserRouter>

    </AuthProvider>

  );
}