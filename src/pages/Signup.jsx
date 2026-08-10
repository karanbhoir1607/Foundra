import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Signup() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const password = e.target.password.value;
    const confirmPassword = e.target.confirmPassword.value;

    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    alert("Account created successfully!");
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
                Build your profile, discover ambitious people and
                find the right co-founder for your startup.
              </p>
            </div>

            <div className="rounded-2xl bg-white/10 p-6 backdrop-blur">
              <p className="text-lg font-medium">
                “Your next great idea could start with the right
                connection.”
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
                  GET STARTED
                </p>

                <h2 className="mt-2 text-3xl font-bold text-gray-900">
                  Create your account
                </h2>

                <p className="mt-2 text-gray-600">
                  Join Foundra and start building your startup network.
                </p>

              </div>


              {/* Form */}
              <form
                onSubmit={handleSubmit}
                className="mt-8 space-y-5"
              >

                {/* Full Name */}
                <div>

                  <label className="mb-2 block text-sm font-medium text-gray-700">
                    Full name
                  </label>

                  <input
                    type="text"
                    name="fullName"
                    placeholder="Enter your full name"
                    required
                    className="w-full rounded-xl border border-gray-300 px-4 py-3.5 outline-none transition focus:border-indigo-500 focus:ring-4 focus:ring-indigo-100"
                  />

                </div>


                {/* Email */}
                <div>

                  <label className="mb-2 block text-sm font-medium text-gray-700">
                    Email address
                  </label>

                  <input
                    type="email"
                    name="email"
                    placeholder="you@example.com"
                    required
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
                      name="password"
                      placeholder="Create a password"
                      required
                      minLength={6}
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


                {/* Confirm Password */}
                <div>

                  <label className="mb-2 block text-sm font-medium text-gray-700">
                    Confirm password
                  </label>

                  <div className="relative">

                    <input
                      type={
                        showConfirmPassword
                          ? "text"
                          : "password"
                      }
                      name="confirmPassword"
                      placeholder="Confirm your password"
                      required
                      minLength={6}
                      className="w-full rounded-xl border border-gray-300 px-4 py-3.5 pr-20 outline-none transition focus:border-indigo-500 focus:ring-4 focus:ring-indigo-100"
                    />

                    <button
                      type="button"
                      onClick={() =>
                        setShowConfirmPassword(
                          !showConfirmPassword
                        )
                      }
                      className="absolute right-4 top-1/2 -translate-y-1/2 text-sm font-semibold text-indigo-600"
                    >
                      {showConfirmPassword ? "Hide" : "Show"}
                    </button>

                  </div>

                </div>


                {/* Terms */}
                <div className="flex items-start gap-2">

                  <input
                    type="checkbox"
                    required
                    className="mt-1 h-4 w-4 rounded border-gray-300 text-indigo-600"
                  />

                  <p className="text-sm leading-5 text-gray-600">
                    I agree to the Terms of Service and Privacy Policy.
                  </p>

                </div>


                {/* Signup Button */}
                <button
                  type="submit"
                  className="w-full rounded-xl bg-indigo-600 py-3.5 font-semibold text-white shadow-lg shadow-indigo-200 transition hover:-translate-y-0.5 hover:bg-indigo-700"
                >
                  Create Account →
                </button>

              </form>


              {/* Login Navigation */}
              <p className="mt-8 text-center text-sm text-gray-600">

                Already have an account?{" "}

                <button
                  type="button"
                  onClick={() => navigate("/login")}
                  className="font-semibold text-indigo-600 hover:text-indigo-700"
                >
                  Login
                </button>

              </p>

            </div>

          </div>

        </div>

      </div>

    </div>
  );
}

export default Signup;