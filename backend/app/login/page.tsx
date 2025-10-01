"use client";

import { useState } from "react";
import { signIn } from "next-auth/react"; // ✅ import NextAuth signIn

export default function LoginPage() {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const res = await fetch("/api/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      if (!res.ok) {
        alert(data.error || "Login failed");
        return;
      }
      alert("Login successful!");
      setFormData({ email: "", password: "" });
    } catch (err) {
      console.error("Error:", err);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 px-4">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-10">
        <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">
          Welcome Back
        </h2>

        {/* Email + Password Login */}
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder="you@example.com"
              className="w-full px-4 py-3 mt-1 border border-gray-300 rounded-md text-black focus:outline-none focus:ring-2 focus:ring-[#bca1ff]"
            />
          </div>

          {/* Password + Toggle */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                value={formData.password}
                onChange={handleChange}
                required
                placeholder="••••••••"
                className="w-full px-4 py-3 mt-1 border border-gray-300 rounded-md text-black focus:outline-none focus:ring-2 focus:ring-[#bca1ff]"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700"
              >
                {showPassword ? "🙈" : "👁"}
              </button>
            </div>
          </div>

          <button
            type="submit"
            className="w-full cursor-pointer bg-[#bca1ff] text-white py-3 rounded-md hover:bg-[#a489e6] transition font-medium"
          >
            Log in
          </button>
        </form>

        {/* Separator */}
        <div className="flex items-center my-6">
          <div className="flex-grow border-t border-gray-300"></div>
          <span className="px-3 text-gray-500 text-sm">OR</span>
          <div className="flex-grow border-t border-gray-300"></div>
        </div>

        {/* Google Login */}
        <button
          type="button"
          onClick={() => signIn("google")} // ✅ NextAuth Google login
          className="flex cursor-pointer items-center justify-center w-full py-3 border border-gray-300 rounded-md bg-white hover:bg-gray-50 text-black font-medium"
        >
          <svg
            className="w-5 h-5 mr-2"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 488 512"
          >
            <path
              fill="#4285F4"
              d="M488 261.8c0-17.4-1.4-34.1-4.1-50.3H249v95.3h135.8c-5.9 31.6-23.7 58.4-50.3 76.3v63.5h81.2c47.5-43.7 74.3-108.1 74.3-184.8z"
            />
            <path
              fill="#34A853"
              d="M249 492c67.6 0 124.4-22.4 165.8-60.9l-81.2-63.5c-22.5 15.1-51.1 24-84.6 24-65 0-120-43.9-139.6-102.9H26.1v64.6C67.3 443.7 151.6 492 249 492z"
            />
            <path
              fill="#FBBC05"
              d="M109.4 288.7c-4.6-13.6-7.2-28-7.2-43s2.6-29.4 7.2-43v-64.6H26.1C9.2 170.2 0 207.2 0 245.7s9.2 75.5 26.1 107.6l83.3-64.6z"
            />
            <path
              fill="#EA4335"
              d="M249 97.1c36.8 0 69.8 12.7 95.8 37.6l71.7-71.7C373.4 23.4 316.6 0 249 0 151.6 0 67.3 48.3 26.1 138.1l83.3 64.6C129 141 184 97.1 249 97.1z"
            />
          </svg>
          Continue with Google
        </button>

        <p className="mt-6 text-center text-sm text-gray-600">
          Don’t have an account?{" "}
          <a href="/signup" className="text-[#bca1ff] hover:underline">
            Sign up
          </a>
        </p>
      </div>
    </div>
  );
}
