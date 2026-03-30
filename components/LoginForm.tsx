"use client";

import { useState } from "react";

export default function LoginForm() {
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    // Add your login logic here
    console.log({ username, password, rememberMe });
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4">
      <div className="bg-white rounded-2xl shadow-lg w-full max-w-sm px-8 py-10">
        {/* Logo */}
        <div className="flex justify-center mb-8">
          <img
            src="https://www.centralbankofindia.co.in/sites/default/files/CBI%20Logo.png"
            alt="Central Bank of India"
            className="h-16 object-contain"
            onError={(e) => {
              // Fallback if image doesn't load
              (e.target as HTMLImageElement).style.display = "none";
            }}
          />
        </div>

        {/* Heading */}
        <h1 className="text-2xl font-bold text-gray-800 text-center mb-8">
          Login to your Account
        </h1>

        {/* Username Field */}
        <div className="mb-5">
          <label
            htmlFor="username"
            className="block text-sm font-medium text-gray-700 mb-1.5"
          >
            Username
          </label>
          <input
            id="username"
            type="text"
            placeholder="Enter your Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
          />
        </div>

        {/* Password Field */}
        <div className="mb-6">
          <label
            htmlFor="password"
            className="block text-sm font-medium text-gray-700 mb-1.5"
          >
            Password
          </label>
          <div className="relative">
            <input
              id="password"
              type={showPassword ? "text" : "password"}
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full border border-gray-300 rounded-lg px-4 py-2.5 pr-10 text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 transition"
              aria-label={showPassword ? "Hide password" : "Show password"}
            >
              {showPassword ? (
                // Eye-off icon
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={1.8}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M13.875 18.825A10.05 10.05 0 0112 19c-5 0-9-4-9-7 0-1.16.42-2.26 1.14-3.2M6.53 6.53A8.98 8.98 0 0112 5c5 0 9 4 9 7a8.93 8.93 0 01-2.34 3.84M3 3l18 18"
                  />
                </svg>
              ) : (
                // Eye icon
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={1.8}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.458 12C3.732 7.943 7.523 5 12 5c4.477 0 8.268 2.943 9.542 7-1.274 4.057-5.065 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Login Button */}
        <button
          onClick={handleSubmit}
          className="w-full bg-blue-600 hover:bg-blue-700 active:bg-blue-800 text-white font-semibold py-2.5 rounded-lg transition duration-150 text-sm tracking-wide"
        >
          Login
        </button>

        {/* Remember Me + Forgot Password */}
        <div className="flex items-center justify-between mt-5">
          <label className="flex items-center gap-2 cursor-pointer select-none">
            <input
              type="checkbox"
              checked={rememberMe}
              onChange={(e) => setRememberMe(e.target.checked)}
              className="w-4 h-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500 cursor-pointer"
            />
            <span className="text-sm text-gray-600">Remember Me</span>
          </label>
          <a
            href="#"
            className="text-sm text-blue-600 hover:text-blue-800 hover:underline transition"
          >
            Forgot Password?
          </a>
        </div>
      </div>

      {/* Footer Links */}
      <div className="absolute bottom-6 flex gap-6 text-xs text-gray-500">
        <a href="#" className="hover:text-gray-700 hover:underline transition">
          Terms and Conditions
        </a>
        <a href="#" className="hover:text-gray-700 hover:underline transition">
          Privacy Policy
        </a>
        <a href="#" className="hover:text-gray-700 hover:underline transition">
          CA Privacy Notice
        </a>
      </div>
    </div>
  );
}
