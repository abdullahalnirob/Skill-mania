import React, { useState } from 'react';
import { FcGoogle } from 'react-icons/fc';

const Register = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Submitted:', formData);
  };

  const handleGoogleLogin = () => {
    console.log('Google login initiated');
    // Add your Google OAuth implementation here
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-900 via-purple-900 to-gray-900 p-6">
      <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl overflow-hidden w-full max-w-md border border-white/20">
        <div className="p-8 space-y-6">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-white">Create Account</h2>
            <p className="mt-2 text-white/80">Join our community today</p>
          </div>

          <button
            onClick={handleGoogleLogin}
            className="w-full flex items-center justify-center gap-3 bg-white text-gray-800 py-3 rounded-lg hover:bg-gray-100 transition duration-200 font-medium"
          >
            <FcGoogle className="text-xl" />
            Continue with Google
          </button>

          <div className="flex items-center">
            <div className="flex-1 border-t border-white/30"></div>
            <span className="px-4 text-white/70 text-sm">OR</span>
            <div className="flex-1 border-t border-white/30"></div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="space-y-1">
              <label htmlFor="name" className="text-sm font-medium text-white/80">Full Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:border-transparent transition"
                placeholder="John Doe"
                required
              />
            </div>

            <div className="space-y-1">
              <label htmlFor="email" className="text-sm font-medium text-white/80">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:border-transparent transition"
                placeholder="your@email.com"
                required
              />
            </div>

            <div className="space-y-1">
              <label htmlFor="password" className="text-sm font-medium text-white/80">Password</label>
              <input
                type="password"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:border-transparent transition"
                placeholder="••••••••"
                required
              />
            </div>

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-indigo-500 to-purple-600 text-white py-3 rounded-lg font-medium hover:opacity-90 transition duration-200 shadow-lg hover:shadow-indigo-500/20"
            >
              Sign Up
            </button>
          </form>

          <p className="text-center text-white/70 text-sm">
            Already have an account? <a href="#" className="text-indigo-300 hover:text-indigo-200 font-medium">Sign in</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
