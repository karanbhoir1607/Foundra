import { useNavigate } from "react-router-dom";

function Dashboard() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-50">

      {/* Top Bar */}
      <header className="border-b border-gray-200 bg-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">

          <button
            onClick={() => navigate("/")}
            className="text-2xl font-bold text-gray-900"
          >
            Foundra<span className="text-indigo-600">.</span>
          </button>

          <div className="flex items-center gap-4">

            <button
              onClick={() => navigate("/chat")}
              className="hidden rounded-xl px-4 py-2 text-sm font-semibold text-gray-600 transition hover:bg-gray-100 sm:block"
            >
              Messages
            </button>

            <button
              onClick={() => navigate("/profile")}
              className="flex h-10 w-10 items-center justify-center rounded-full bg-indigo-100 font-semibold text-indigo-700"
            >
              K
            </button>

          </div>

        </div>
      </header>


      {/* Main */}
      <main className="mx-auto max-w-7xl px-6 py-10">

        {/* Welcome */}
        <div className="rounded-3xl bg-gradient-to-r from-indigo-600 to-purple-600 p-8 text-white shadow-lg sm:p-10">

          <p className="font-medium text-indigo-100">
            WELCOME TO FOUNDRA 🚀
          </p>

          <h1 className="mt-3 text-3xl font-bold sm:text-4xl">
            Welcome back, Founder!
          </h1>

          <p className="mt-3 max-w-2xl text-indigo-100">
            Find the right people, discover startup opportunities
            and turn your ideas into reality.
          </p>

          <button
            onClick={() => navigate("/find-cofounder")}
            className="mt-7 rounded-xl bg-white px-6 py-3 font-semibold text-indigo-700 shadow-lg transition hover:-translate-y-0.5 hover:bg-gray-50"
          >
            Find a Co-founder →
          </button>

        </div>


        {/* Quick Actions */}
        <div className="mt-10">

          <div>
            <p className="font-semibold text-indigo-600">
              QUICK ACTIONS
            </p>

            <h2 className="mt-2 text-2xl font-bold text-gray-900">
              What do you want to do?
            </h2>
          </div>


          <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">

            {/* Find Co-founder */}
            <button
              onClick={() => navigate("/find-cofounder")}
              className="group rounded-2xl border border-gray-200 bg-white p-6 text-left shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-indigo-100 text-2xl">
                🎯
              </div>

              <h3 className="mt-5 text-xl font-bold text-gray-900">
                Find Co-founder
              </h3>

              <p className="mt-2 leading-6 text-gray-600">
                Discover founders and professionals who match
                your startup vision.
              </p>

              <p className="mt-4 font-semibold text-indigo-600">
                Find people →
              </p>
            </button>


            {/* My Startups */}
            <button
              onClick={() => navigate("/my-startups")}
              className="group rounded-2xl border border-gray-200 bg-white p-6 text-left shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-purple-100 text-2xl">
                🚀
              </div>

              <h3 className="mt-5 text-xl font-bold text-gray-900">
                My Startups
              </h3>

              <p className="mt-2 leading-6 text-gray-600">
                Manage your startup ideas and see what you're
                currently building.
              </p>

              <p className="mt-4 font-semibold text-purple-600">
                View startups →
              </p>
            </button>


            {/* Profile */}
            <button
              onClick={() => navigate("/profile")}
              className="group rounded-2xl border border-gray-200 bg-white p-6 text-left shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-pink-100 text-2xl">
                👤
              </div>

              <h3 className="mt-5 text-xl font-bold text-gray-900">
                My Profile
              </h3>

              <p className="mt-2 leading-6 text-gray-600">
                Update your skills, experience and startup
                interests.
              </p>

              <p className="mt-4 font-semibold text-pink-600">
                View profile →
              </p>
            </button>

          </div>

        </div>


        {/* Activity Section */}
        <div className="mt-10 grid gap-6 lg:grid-cols-3">

          {/* Activity */}
          <div className="rounded-2xl border border-gray-200 bg-white p-7 shadow-sm lg:col-span-2">

            <div className="flex items-center justify-between">

              <div>
                <p className="font-semibold text-indigo-600">
                  ACTIVITY
                </p>

                <h2 className="mt-2 text-2xl font-bold text-gray-900">
                  Your startup journey
                </h2>
              </div>

              <span className="rounded-full bg-green-50 px-3 py-1 text-sm font-semibold text-green-600">
                Active
              </span>

            </div>


            <div className="mt-7 space-y-5">

              <div className="flex gap-4">

                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-indigo-100">
                  🎯
                </div>

                <div>
                  <p className="font-semibold text-gray-900">
                    Complete your profile
                  </p>

                  <p className="mt-1 text-sm text-gray-500">
                    Add your skills and interests to find better
                    co-founder matches.
                  </p>
                </div>

              </div>


              <div className="flex gap-4">

                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-purple-100">
                  🚀
                </div>

                <div>
                  <p className="font-semibold text-gray-900">
                    Create your first startup
                  </p>

                  <p className="mt-1 text-sm text-gray-500">
                    Share your idea with the Foundra community.
                  </p>
                </div>

              </div>


              <div className="flex gap-4">

                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-pink-100">
                  🤝
                </div>

                <div>
                  <p className="font-semibold text-gray-900">
                    Start connecting
                  </p>

                  <p className="mt-1 text-sm text-gray-500">
                    Meet ambitious people who want to build
                    something meaningful.
                  </p>
                </div>

              </div>

            </div>

          </div>


          {/* Profile Completion */}
          <div className="rounded-2xl border border-gray-200 bg-white p-7 shadow-sm">

            <p className="font-semibold text-indigo-600">
              PROFILE
            </p>

            <h2 className="mt-2 text-2xl font-bold text-gray-900">
              Complete your profile
            </h2>

            <p className="mt-3 text-sm leading-6 text-gray-600">
              A complete profile helps you find better matches.
            </p>


            <div className="mt-6">

              <div className="flex items-center justify-between text-sm">
                <span className="font-medium text-gray-600">
                  Profile completion
                </span>

                <span className="font-bold text-indigo-600">
                  60%
                </span>
              </div>

              <div className="mt-3 h-2 overflow-hidden rounded-full bg-gray-100">

                <div className="h-full w-[60%] rounded-full bg-gradient-to-r from-indigo-600 to-purple-600">
                </div>

              </div>

            </div>


            <button
              onClick={() => navigate("/edit-profile")}
              className="mt-7 w-full rounded-xl bg-gray-900 py-3 font-semibold text-white transition hover:bg-gray-800"
            >
              Complete Profile →
            </button>

          </div>

        </div>

      </main>

    </div>
  );
}

export default Dashboard;