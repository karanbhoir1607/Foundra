import { useNavigate, useParams } from "react-router-dom";

function StartupDetails() {
  const navigate = useNavigate();
  const { id } = useParams();

  const startup = {
    name: id === "2" ? "GreenCart" : "EduConnect",
    category: id === "2" ? "Sustainability" : "EdTech",
    status: id === "2" ? "Idea" : "Building",
    progress: id === "2" ? 30 : 70,
    description:
      id === "2"
        ? "A sustainable marketplace helping people discover and purchase eco-friendly products."
        : "A platform that connects students with mentors and learning opportunities.",
    problem:
      "Many people struggle to find the right resources, connections and opportunities to achieve their goals.",
    solution:
      "Our platform brings people, ideas and resources together in one simple and accessible ecosystem.",
  };

  const teamMembers = [
    {
      name: "Karan Bhoir",
      role: "Founder",
      initials: "KB",
    },
    {
      name: "Arjun Mehta",
      role: "Full Stack Developer",
      initials: "AM",
    },
    {
      name: "Priya Sharma",
      role: "UI/UX Designer",
      initials: "PS",
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

        {/* Back */}
        <button
          onClick={() => navigate("/my-startups")}
          className="mb-8 font-semibold text-gray-600 transition hover:text-indigo-600"
        >
          ← Back to My Startups
        </button>


        {/* Hero */}
        <section className="overflow-hidden rounded-3xl bg-gradient-to-r from-indigo-600 to-purple-600 p-8 text-white shadow-xl sm:p-10">

          <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">

            <div>

              <div className="flex flex-wrap items-center gap-3">

                <span className="rounded-full bg-white/15 px-4 py-1.5 text-sm font-semibold backdrop-blur">
                  {startup.category}
                </span>

                <span className="rounded-full bg-green-400/20 px-4 py-1.5 text-sm font-semibold text-green-100">
                  {startup.status}
                </span>

              </div>

              <h1 className="mt-5 text-4xl font-bold sm:text-5xl">
                {startup.name}
              </h1>

              <p className="mt-4 max-w-2xl text-lg leading-8 text-indigo-100">
                {startup.description}
              </p>

            </div>


            <button
              onClick={() => alert("Edit Startup feature coming soon!")}
              className="rounded-xl bg-white px-6 py-3 font-semibold text-indigo-700 shadow-lg transition hover:-translate-y-0.5 hover:bg-gray-50"
            >
              Edit Startup
            </button>

          </div>

        </section>


        {/* Stats */}
        <section className="mt-8 grid gap-5 sm:grid-cols-3">

          <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">

            <p className="text-sm font-medium text-gray-500">
              Category
            </p>

            <p className="mt-2 text-xl font-bold text-gray-900">
              {startup.category}
            </p>

          </div>


          <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">

            <p className="text-sm font-medium text-gray-500">
              Team Members
            </p>

            <p className="mt-2 text-xl font-bold text-gray-900">
              {teamMembers.length} People
            </p>

          </div>


          <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">

            <div className="flex items-center justify-between">

              <p className="text-sm font-medium text-gray-500">
                Progress
              </p>

              <p className="font-bold text-indigo-600">
                {startup.progress}%
              </p>

            </div>

            <div className="mt-4 h-2 overflow-hidden rounded-full bg-gray-100">

              <div
                className="h-full rounded-full bg-gradient-to-r from-indigo-600 to-purple-600"
                style={{ width: `${startup.progress}%` }}
              />

            </div>

          </div>

        </section>


        {/* Main Content */}
        <div className="mt-8 grid gap-8 lg:grid-cols-3">

          {/* Left */}
          <div className="space-y-8 lg:col-span-2">

            {/* Overview */}
            <section className="rounded-2xl border border-gray-200 bg-white p-7 shadow-sm">

              <p className="font-semibold text-indigo-600">
                OVERVIEW
              </p>

              <h2 className="mt-2 text-2xl font-bold text-gray-900">
                About {startup.name}
              </h2>

              <p className="mt-4 leading-8 text-gray-600">
                {startup.description}
              </p>

            </section>


            {/* Problem & Solution */}
            <section className="grid gap-6 sm:grid-cols-2">

              <div className="rounded-2xl border border-gray-200 bg-white p-7 shadow-sm">

                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-red-50 text-xl">
                  🎯
                </div>

                <h3 className="mt-5 text-xl font-bold text-gray-900">
                  The Problem
                </h3>

                <p className="mt-3 leading-7 text-gray-600">
                  {startup.problem}
                </p>

              </div>


              <div className="rounded-2xl border border-gray-200 bg-white p-7 shadow-sm">

                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-green-50 text-xl">
                  💡
                </div>

                <h3 className="mt-5 text-xl font-bold text-gray-900">
                  Our Solution
                </h3>

                <p className="mt-3 leading-7 text-gray-600">
                  {startup.solution}
                </p>

              </div>

            </section>


            {/* Progress */}
            <section className="rounded-2xl border border-gray-200 bg-white p-7 shadow-sm">

              <div className="flex items-center justify-between">

                <div>
                  <p className="font-semibold text-indigo-600">
                    PROJECT PROGRESS
                  </p>

                  <h2 className="mt-2 text-2xl font-bold text-gray-900">
                    Building {startup.name}
                  </h2>
                </div>

                <span className="text-2xl font-bold text-indigo-600">
                  {startup.progress}%
                </span>

              </div>


              <div className="mt-6 h-3 overflow-hidden rounded-full bg-gray-100">

                <div
                  className="h-full rounded-full bg-gradient-to-r from-indigo-600 to-purple-600"
                  style={{ width: `${startup.progress}%` }}
                />

              </div>


              <div className="mt-5 grid gap-4 sm:grid-cols-3">

                <div className="rounded-xl bg-green-50 p-4">
                  <p className="text-sm text-green-600">
                    Completed
                  </p>

                  <p className="mt-1 font-bold text-gray-900">
                    7 Tasks
                  </p>
                </div>

                <div className="rounded-xl bg-yellow-50 p-4">
                  <p className="text-sm text-yellow-600">
                    In Progress
                  </p>

                  <p className="mt-1 font-bold text-gray-900">
                    3 Tasks
                  </p>
                </div>

                <div className="rounded-xl bg-gray-50 p-4">
                  <p className="text-sm text-gray-500">
                    Remaining
                  </p>

                  <p className="mt-1 font-bold text-gray-900">
                    2 Tasks
                  </p>
                </div>

              </div>

            </section>

          </div>


          {/* Right */}
          <aside className="space-y-8">

            {/* Team */}
            <section className="rounded-2xl border border-gray-200 bg-white p-7 shadow-sm">

              <div className="flex items-center justify-between">

                <div>
                  <p className="font-semibold text-indigo-600">
                    TEAM
                  </p>

                  <h2 className="mt-2 text-xl font-bold text-gray-900">
                    Team Members
                  </h2>
                </div>

                <span className="rounded-full bg-indigo-50 px-3 py-1 text-sm font-semibold text-indigo-600">
                  {teamMembers.length}
                </span>

              </div>


              <div className="mt-6 space-y-5">

                {teamMembers.map((member) => (

                  <div
                    key={member.name}
                    className="flex items-center gap-4"
                  >

                    <div className="flex h-11 w-11 items-center justify-center rounded-full bg-indigo-100 font-bold text-indigo-700">
                      {member.initials}
                    </div>

                    <div>
                      <p className="font-semibold text-gray-900">
                        {member.name}
                      </p>

                      <p className="text-sm text-gray-500">
                        {member.role}
                      </p>
                    </div>

                  </div>

                ))}

              </div>


              <button
                onClick={() => navigate("/find-cofounder")}
                className="mt-7 w-full rounded-xl border border-indigo-200 py-3 font-semibold text-indigo-600 transition hover:bg-indigo-50"
              >
                + Find Team Members
              </button>

            </section>


            {/* Startup Info */}
            <section className="rounded-2xl border border-gray-200 bg-white p-7 shadow-sm">

              <p className="font-semibold text-indigo-600">
                STARTUP INFO
              </p>

              <div className="mt-5 space-y-5">

                <div>
                  <p className="text-sm text-gray-500">
                    Status
                  </p>

                  <p className="mt-1 font-semibold text-gray-900">
                    🟢 {startup.status}
                  </p>
                </div>


                <div>
                  <p className="text-sm text-gray-500">
                    Category
                  </p>

                  <p className="mt-1 font-semibold text-gray-900">
                    {startup.category}
                  </p>
                </div>


                <div>
                  <p className="text-sm text-gray-500">
                    Startup ID
                  </p>

                  <p className="mt-1 font-semibold text-gray-900">
                    #{id}
                  </p>
                </div>

              </div>

            </section>


            {/* CTA */}
            <section className="rounded-2xl bg-gray-900 p-7 text-white">

              <div className="text-3xl">
                🤝
              </div>

              <h2 className="mt-4 text-xl font-bold">
                Need more people?
              </h2>

              <p className="mt-2 text-sm leading-6 text-gray-300">
                Find talented people who can help take your startup
                to the next level.
              </p>

              <button
                onClick={() => navigate("/find-cofounder")}
                className="mt-5 w-full rounded-xl bg-white py-3 font-semibold text-gray-900 transition hover:bg-gray-100"
              >
                Find Co-founder →
              </button>

            </section>

          </aside>

        </div>

      </main>

    </div>
  );
}

export default StartupDetails;