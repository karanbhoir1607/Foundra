import { useNavigate } from "react-router-dom";

function MyStartups() {
  const navigate = useNavigate();

  const startups = [
    {
      id: 1,
      name: "EduConnect",
      description:
        "A platform that connects students with mentors and learning opportunities.",
      category: "EdTech",
      status: "Building",
      team: 3,
      progress: 70,
      color: "bg-indigo-100 text-indigo-700",
    },
    {
      id: 2,
      name: "GreenCart",
      description:
        "A sustainable marketplace helping people discover eco-friendly products.",
      category: "Sustainability",
      status: "Idea",
      team: 2,
      progress: 30,
      color: "bg-green-100 text-green-700",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">

      {/* Navbar */}
      <header className="border-b border-gray-200 bg-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">

          <button
            onClick={() => navigate("/dashboard")}
            className="text-2xl font-bold text-gray-900"
          >
            Foundra<span className="text-indigo-600">.</span>
          </button>

          <div className="flex items-center gap-3">

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

        {/* Heading */}
        <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">

          <div>
            <p className="font-semibold text-indigo-600">
              YOUR STARTUPS
            </p>

            <h1 className="mt-2 text-3xl font-bold text-gray-900 sm:text-4xl">
              My Startups
            </h1>

            <p className="mt-3 max-w-2xl text-gray-600">
              Manage your startup ideas, track your progress and
              build your team.
            </p>
          </div>

          <button
            onClick={() => alert("Create Startup feature coming soon!")}
            className="rounded-xl bg-indigo-600 px-6 py-3 font-semibold text-white shadow-lg shadow-indigo-200 transition hover:-translate-y-0.5 hover:bg-indigo-700"
          >
            + Create Startup
          </button>

        </div>


        {/* Stats */}
        <div className="mt-10 grid gap-5 sm:grid-cols-3">

          <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
            <p className="text-sm font-medium text-gray-500">
              Total Startups
            </p>

            <p className="mt-2 text-3xl font-bold text-gray-900">
              2
            </p>
          </div>


          <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
            <p className="text-sm font-medium text-gray-500">
              Team Members
            </p>

            <p className="mt-2 text-3xl font-bold text-gray-900">
              5
            </p>
          </div>


          <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
            <p className="text-sm font-medium text-gray-500">
              Active Projects
            </p>

            <p className="mt-2 text-3xl font-bold text-indigo-600">
              1
            </p>
          </div>

        </div>


        {/* Startup Cards */}
        <div className="mt-10">

          <div className="mb-6">
            <h2 className="text-2xl font-bold text-gray-900">
              Your projects
            </h2>
          </div>


          <div className="grid gap-6 lg:grid-cols-2">

            {startups.map((startup) => (

              <div
                key={startup.id}
                className="rounded-2xl border border-gray-200 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
              >

                {/* Header */}
                <div className="flex items-start justify-between gap-4">

                  <div className="flex items-center gap-4">

                    <div
                      className={`flex h-14 w-14 items-center justify-center rounded-2xl text-xl font-bold ${startup.color}`}
                    >
                      🚀
                    </div>

                    <div>
                      <h3 className="text-xl font-bold text-gray-900">
                        {startup.name}
                      </h3>

                      <p className="mt-1 text-sm text-gray-500">
                        {startup.category}
                      </p>
                    </div>

                  </div>


                  <span
                    className={`rounded-full px-3 py-1 text-xs font-semibold ${
                      startup.status === "Building"
                        ? "bg-green-50 text-green-600"
                        : "bg-yellow-50 text-yellow-600"
                    }`}
                  >
                    {startup.status}
                  </span>

                </div>


                {/* Description */}
                <p className="mt-6 leading-7 text-gray-600">
                  {startup.description}
                </p>


                {/* Team */}
                <div className="mt-6 flex items-center justify-between border-b border-gray-100 pb-5">

                  <div>
                    <p className="text-sm text-gray-500">
                      Team members
                    </p>

                    <p className="mt-1 font-semibold text-gray-900">
                      👥 {startup.team} people
                    </p>
                  </div>

                  <div>
                    <p className="text-right text-sm text-gray-500">
                      Progress
                    </p>

                    <p className="mt-1 text-right font-semibold text-indigo-600">
                      {startup.progress}%
                    </p>
                  </div>

                </div>


                {/* Progress */}
                <div className="mt-5">

                  <div className="h-2 overflow-hidden rounded-full bg-gray-100">

                    <div
                      className="h-full rounded-full bg-gradient-to-r from-indigo-600 to-purple-600"
                      style={{ width: `${startup.progress}%` }}
                    />

                  </div>

                </div>


                {/* Buttons */}
                <div className="mt-6 flex gap-3">

                  <button
                    onClick={() =>
                      navigate(`/startup/${startup.id}`)
                    }
                    className="flex-1 rounded-xl bg-indigo-600 py-3 text-sm font-semibold text-white transition hover:bg-indigo-700"
                  >
                    View Details
                  </button>

                  <button
                    onClick={() => alert("Edit Startup feature coming soon!")}
                    className="flex-1 rounded-xl border border-gray-200 py-3 text-sm font-semibold text-gray-700 transition hover:bg-gray-50"
                  >
                    Edit
                  </button>

                </div>

              </div>

            ))}

          </div>

        </div>


        {/* Empty/Create Section */}
        <div className="mt-10 rounded-3xl border border-dashed border-indigo-200 bg-indigo-50/50 p-8 text-center">

          <div className="text-4xl">
            💡
          </div>

          <h2 className="mt-4 text-xl font-bold text-gray-900">
            Have another startup idea?
          </h2>

          <p className="mx-auto mt-2 max-w-xl text-gray-600">
            Add your next big idea to Foundra and start building
            your team.
          </p>

          <button
            onClick={() => alert("Create Startup feature coming soon!")}
            className="mt-5 rounded-xl bg-gray-900 px-6 py-3 font-semibold text-white transition hover:bg-gray-800"
          >
            Create New Startup
          </button>

        </div>

      </main>

    </div>
  );
}

export default MyStartups;