import { useNavigate } from "react-router-dom";

function MyStartups() {
  const navigate = useNavigate();

  const startups = [
    {
      id: 1,
      name: "Foundra",
      description:
        "A platform that helps startup founders find the right co-founder.",
      role: "Founder",
      status: "Active",
    },
    {
      id: 2,
      name: "EcoCart",
      description:
        "An idea focused on making online shopping more environmentally friendly.",
      role: "Co-Founder",
      status: "Idea",
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
        <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-center">

          <div>
            <p className="font-semibold text-indigo-600">
              STARTUPS
            </p>

            <h1 className="mt-2 text-3xl font-bold text-gray-900">
              My Startups
            </h1>

            <p className="mt-2 text-gray-600">
              Manage your startup ideas and projects.
            </p>
          </div>

          <button
            onClick={() => alert("Create Startup feature coming soon!")}
            className="rounded-xl bg-indigo-600 px-5 py-3 font-semibold text-white shadow-lg transition hover:bg-indigo-700"
          >
            + Create Startup
          </button>

        </div>


        {/* Startup Cards */}
        <div className="mt-10 grid gap-6 md:grid-cols-2">

          {startups.map((startup) => (

            <div
              key={startup.id}
              className="rounded-2xl border border-gray-200 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
            >

              <div className="flex items-start justify-between gap-4">

                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-indigo-100 text-2xl">
                  🚀
                </div>

                <span
                  className={`rounded-full px-3 py-1 text-xs font-semibold ${
                    startup.status === "Active"
                      ? "bg-green-50 text-green-600"
                      : "bg-yellow-50 text-yellow-600"
                  }`}
                >
                  {startup.status}
                </span>

              </div>


              <h2 className="mt-6 text-2xl font-bold text-gray-900">
                {startup.name}
              </h2>

              <p className="mt-3 leading-6 text-gray-600">
                {startup.description}
              </p>


              <div className="mt-5">

                <p className="text-sm text-gray-500">
                  Your role
                </p>

                <p className="mt-1 font-semibold text-gray-900">
                  {startup.role}
                </p>

              </div>


              <div className="mt-6 flex gap-3">

                <button
                  onClick={() =>
                    navigate(`/startup/${startup.id}`)
                  }
                  className="flex-1 rounded-xl bg-indigo-600 py-3 text-sm font-semibold text-white transition hover:bg-indigo-700"
                >
                  View Startup
                </button>

                <button
                  onClick={() =>
                    navigate("/find-cofounder")
                  }
                  className="flex-1 rounded-xl border border-gray-200 py-3 text-sm font-semibold text-gray-700 transition hover:bg-gray-50"
                >
                  Find Co-founder
                </button>

              </div>

            </div>

          ))}

        </div>


        {/* Empty/Create section */}
        <div className="mt-8 rounded-2xl border border-dashed border-gray-300 bg-white p-10 text-center">

          <div className="text-4xl">
            💡
          </div>

          <h2 className="mt-4 text-xl font-bold text-gray-900">
            Have another startup idea?
          </h2>

          <p className="mx-auto mt-2 max-w-lg text-gray-500">
            Create a startup profile and start looking for
            people who can help you build it.
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