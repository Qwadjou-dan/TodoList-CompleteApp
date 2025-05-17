import React from "react";

const SignIn = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-base-200 p-4">
      <div className="w-full max-w-md shadow-xl bg-base-100 rounded-xl p-8 space-y-6">
        <h1 className="text-3xl font-bold text-center text-primary">
          Welcome Back
        </h1>

        <form className="space-y-4">
          <div>
            <label htmlFor="username" className="label">
              <span className="label-text">Username</span>
            </label>
            <input
              type="text"
              id="username"
              name="username"
              className="input input-bordered w-full"
              placeholder="your_username"
              required
            />
          </div>

          <div>
            <label htmlFor="password" className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type="password"
              id="password"
              name="password"
              className="input input-bordered w-full"
              placeholder="••••••••"
              required
            />
          </div>

          <button className="btn btn-primary w-full mt-4">Sign In</button>
        </form>

        <div className="text-sm text-center text-gray-500 space-y-2">
          <p>
            Don't have an account?{" "}
            <a href="/signup" className="text-primary hover:underline">
              Sign up
            </a>
          </p>
          <p>
            <a href="/forgot-password" className="link">
              Forgot your password?
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
