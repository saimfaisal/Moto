// src/pages/Signup.jsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../../firebase"; // ✅ apne firebase ka sahi path check karein
import { Eye, EyeOff } from "lucide-react";

export default function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      // ✅ Create user in Firebase Auth
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);

      // ✅ Update display name
      await updateProfile(userCredential.user, { displayName: name });

      // ✅ Redirect after success
      navigate("/dashboard");
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-900 px-4">
      <div className="bg-white dark:bg-gray-800 shadow-2xl rounded-2xl p-8 w-full max-w-md">
        {/* Heading */}
        <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-6">
          Sign Up
        </h2>

        {/* Error */}
        {error && (
          <p className="text-red-500 text-sm text-center mb-4">{error}</p>
        )}

        {/* Form */}
        <form onSubmit={handleSignup} className="space-y-5">
          {/* Name */}
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              Full Name
            </label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="John Doe"
              className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 
                         rounded-lg shadow-sm focus:ring-2 focus:ring-primary 
                         focus:border-transparent dark:bg-gray-700 dark:text-white"
              required
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              Email Address
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@example.com"
              className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 
                         rounded-lg shadow-sm focus:ring-2 focus:ring-primary 
                         focus:border-transparent dark:bg-gray-700 dark:text-white"
              required
            />
          </div>

          {/* Password */}
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              Password
            </label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 
                           rounded-lg shadow-sm focus:ring-2 focus:ring-primary 
                           focus:border-transparent dark:bg-gray-700 dark:text-white pr-10"
                required
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute inset-y-0 right-3 flex items-center text-gray-500 dark:text-gray-400"
              >
                {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
              </button>
            </div>
          </div>

          {/* Submit */}
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-primary text-white font-medium py-2 px-4 
                       rounded-lg hover:bg-primary/90 transition-colors shadow-md 
                       disabled:opacity-50"
          >
            {loading ? "Creating Account..." : "Sign Up"}
          </button>
        </form>

        {/* Footer */}
        <p className="text-center text-sm text-gray-600 dark:text-gray-400 mt-6">
          Already have an account?{" "}
          <a href="/login" className="text-primary hover:text-primary/80 font-medium">
            Login
          </a>
        </p>
      </div>
    </div>
  );
}
