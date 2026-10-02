import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    setError("");

    if (!email || !password) {
      setError("Please enter your email and password.");
      return;
    }

    // Temporary login
    // Backend authentication will be connected later.
    localStorage.setItem("foundraToken", "demo-token");

    navigate("/dashboard");
  };

  return (
    <main className="min-h-screen bg-gray-50 px-6 py-12">

      <div className="mx-auto flex min-h-[80vh] max-w-md items-center">

        <div className="w-full rounded-3xl border border-gray-200 bg-white p-8 shadow-xl sm:p-10">

          {/* Logo */}
          <div className="text-center">

            <button
              onClick={() => navigate("/")}
              className="text-2xl font-bold text-indigo-600"
            >
              Foundra<span className="text-gray-900">.</span>
            </button>

            <p className="mt-6 text-sm font-semibold text-indigo-600">
              WELCOME BACK
            </p>

            <h1 className="mt-2 text-3xl font-bold text-gray-900">
              Login to Foundra
            </h1>

            <p className="mt-3 text-gray-500">
              Continue building your startup journey.
            </p>

          </div>


          {/* Error */}
          {error && (
            <div className="mt-6 rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-600">
              {error}
            </div>
          )}


          {/* Form */}
          <form
            onSubmit={handleSubmit}
            className="mt-8 space-y-5"
          >

            {/* Email */}
            <div>

              <label className="mb-2 block text-sm font-medium text-gray-700">
                Email
              </label>

              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full rounded-xl border border-gray-300 px-4 py-3.5 outline-none transition focus:border-indigo-500 focus:ring-4 focus:ring-indigo-100"
              />

            </div>


            {/* Password */}
            <div>

              <label className="mb-2 block text-sm font-medium text-gray-700">
                Password
              </label>

              <div className="relative">

                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full rounded-xl border border-gray-300 px-4 py-3.5 pr-20 outline-none transition focus:border-indigo-500 focus:ring-4 focus:ring-indigo-100"
                />

                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-sm font-semibold text-indigo-600"
                >
                  {showPassword ? "Hide" : "Show"}
                </button>

              </div>

            </div>


            {/* Remember Me */}
            <div className="flex items-center gap-2">

              <input
                id="remember"
                type="checkbox"
                className="h-4 w-4 rounded border-gray-300"
              />

              <label
                htmlFor="remember"
                className="text-sm text-gray-600"
              >
                Remember me
              </label>

            </div>


            {/* Login */}
            <button
              type="submit"
              className="w-full rounded-xl bg-indigo-600 py-3.5 font-semibold text-white shadow-lg shadow-indigo-200 transition hover:-translate-y-0.5 hover:bg-indigo-700"
            >
              Login
            </button>

          </form>


          {/* Signup */}
          <div className="mt-7 text-center text-sm text-gray-600">

            Don't have an account?{" "}

            <button
              onClick={() => navigate("/signup")}
              className="font-semibold text-indigo-600 hover:text-indigo-700"
            >
              Sign Up
            </button>

          </div>


          {/* Back */}
          <button
            onClick={() => navigate("/")}
            className="mt-6 block w-full text-center text-sm text-gray-400 hover:text-gray-600"
          >
            ← Back to Home
          </button>

        </div>

      </div>

    </main>
  );
}

export default Login;