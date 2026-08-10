import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    // Login successful → Dashboard
    navigate("/dashboard");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50 px-6 py-12">

      <div className="mx-auto flex min-h-[80vh] max-w-6xl items-center justify-center">

        <div className="grid w-full overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-2xl lg:grid-cols-2">

          {/* Left Side */}
          <div className="hidden bg-gradient-to-br from-indigo-600 to-purple-600 p-12 text-white lg:flex lg:flex-col lg:justify-between">

            <div>
              <h1 className="text-3xl font-bold">
                Foundra<span className="text-indigo-200">.</span>
              </h1>

              <p className="mt-6 max-w-md text-lg leading-8 text-indigo-100">
                Connect with ambitious founders and find the right
                people to build your next big idea.
              </p>
            </div>

            <div className="rounded-2xl bg-white/10 p-6 backdrop-blur">
              <p className="text-lg font-medium">
                “Great startups are built by great teams.”
              </p>

              <p className="mt-3 text-sm text-indigo-200">
                — Foundra
              </p>
            </div>

          </div>

          {/* Right Side */}
          <div className="p-8 sm:p-12">

            <div className="mx-auto max-w-md">

              {/* Heading */}
              <div>
                <p className="font-semibold text-indigo-600">
                  WELCOME BACK
                </p>

                <h2 className="mt-2 text-3xl font-bold text-gray-900">
                  Login to Foundra
                </h2>

                <p className="mt-2 text-gray-600">
                  Welcome back! Please enter your details.
                </p>
              </div>

              {/* Form */}
              <form
                onSubmit={handleSubmit}
                className="mt-8 space-y-5"
              >

                {/* Email */}
                <div>
                  <label className="mb-2 block text-sm font-medium text-gray-700">
                    Email address
                  </label>

                  <input
                    type="email"
                    placeholder="you@example.com"
                    required
                    className="w-full rounded-xl border border-gray-300 px-4 py-3.5 outline-none transition focus:border-indigo-500 focus:ring-4 focus:ring-indigo-100"
                  />
                </div>

                {/* Password */}
                <div>

                  <div className="mb-2 flex items-center justify-between">
                    <label className="block text-sm font-medium text-gray-700">
                      Password
                    </label>

                    <button
                      type="button"
                      className="text-sm font-medium text-indigo-600 hover:text-indigo-700"
                    >
                      Forgot password?
                    </button>
                  </div>

                  <div className="relative">

                    <input
                      type={showPassword ? "text" : "password"}
                      placeholder="Enter your password"
                      required
                      className="w-full rounded-xl border border-gray-300 px-4 py-3.5 pr-20 outline-none transition focus:border-indigo-500 focus:ring-4 focus:ring-indigo-100"
                    />

                    <button
                      type="button"
                      onClick={() =>
                        setShowPassword(!showPassword)
                      }
                      className="absolute right-4 top-1/2 -translate-y-1/2 text-sm font-semibold text-indigo-600"
                    >
                      {showPassword ? "Hide" : "Show"}
                    </button>

                  </div>

                </div>

                {/* Remember Me */}
                <div className="flex items-center gap-2">

                  <input
                    type="checkbox"
                    className="h-4 w-4 rounded border-gray-300 text-indigo-600"
                  />

                  <label className="text-sm text-gray-600">
                    Remember me
                  </label>

                </div>

                {/* Login Button */}
                <button
                  type="submit"
                  className="w-full rounded-xl bg-indigo-600 py-3.5 font-semibold text-white shadow-lg shadow-indigo-200 transition hover:-translate-y-0.5 hover:bg-indigo-700"
                >
                  Login →
                </button>

              </form>

              {/* Signup Navigation */}
              <p className="mt-8 text-center text-sm text-gray-600">
                Don't have an account?{" "}

                <button
                  type="button"
                  onClick={() => navigate("/signup")}
                  className="font-semibold text-indigo-600 hover:text-indigo-700"
                >
                  Create an account
                </button>
              </p>

            </div>

          </div>

        </div>

      </div>

    </div>
  );
}

export default Login;