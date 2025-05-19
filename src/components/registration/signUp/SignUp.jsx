import React from "react";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const navigate = useNavigate();

  const handleSignUp = (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const username = formData.get("username");

    navigate("/", {
      state: { username },
    });
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-base-200 p-4">
      <div className="w-full max-w-md shadow-xl bg-base-100 rounded-xl p-8 space-y-6">
        <h1 className="text-3xl font-bold text-center text-primary">
          Create Account
        </h1>

        <form onSubmit={handleSignUp} className="space-y-4">
          <div>
            <label htmlFor="name" className="label">
              <span className="label-text">Full Name</span>
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="input input-bordered w-full"
              placeholder="John Doe"
              required
            />
          </div>

          <div>
            <label htmlFor="email" className="label">
              <span className="label-text">Email Address</span>
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="input input-bordered w-full"
              placeholder="example@email.com"
              required
            />
          </div>

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

          <button type="submit" className="btn btn-primary w-full mt-4">
            Sign Up
          </button>
        </form>

        <div className="text-sm text-center text-gray-500 space-y-2">
          <p>
            Already have an account?{" "}
            <a href="/" className="text-primary hover:underline">
              Log in
            </a>
          </p>
          <p>
            By signing up, you agree to our{" "}
            <a href="/terms" className="link">
              Terms of Service
            </a>{" "}
            and{" "}
            <a href="/privacy" className="link">
              Privacy Policy
            </a>
            .
          </p>
          <p>
            Need help?{" "}
            <a href="/support" className="link">
              Contact Support
            </a>
          </p>
          <p>
            Follow us on{" "}
            <a href="/social" className="link">
              Social Media
            </a>
          </p>
          <p>© 2023 Your Company. All rights reserved.</p>
          <p>Version 1.0.0 | Last updated: October 2023</p>
          <p>
            Learn more{" "}
            <a href="/about" className="link">
              About Us
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
