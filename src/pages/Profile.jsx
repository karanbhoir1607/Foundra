import { useNavigate } from "react-router-dom";

function Profile() {
  const navigate = useNavigate();

  const skills = [
    "JavaScript",
    "React",
    "Node.js",
    "UI/UX",
    "Startup Strategy",
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

            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-indigo-100 font-semibold text-indigo-700">
              K
            </div>

          </div>

        </div>
      </header>


      {/* Main */}
      <main className="mx-auto max-w-5xl px-6 py-10">

        {/* Back */}
        <button
          onClick={() => navigate("/dashboard")}
          className="mb-8 font-semibold text-gray-600 transition hover:text-indigo-600"
        >
          ← Back to Dashboard
        </button>


        {/* Profile Header */}
        <section className="overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-sm">

          {/* Cover */}
          <div className="h-40 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500" />

          <div className="px-7 pb-8 sm:px-10">

            <div className="-mt-16 flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">

              {/* Avatar + Info */}
              <div className="flex flex-col gap-4 sm:flex-row sm:items-end">

                <div className="flex h-32 w-32 items-center justify-center rounded-full border-8 border-white bg-indigo-100 text-4xl font-bold text-indigo-700 shadow-lg">
                  K
                </div>

                <div className="pb-1">

                  <h1 className="text-3xl font-bold text-gray-900">
                    Karan Bhoir
                  </h1>

                  <p className="mt-1 text-gray-600">
                    Founder & Full Stack Developer
                  </p>

                  <p className="mt-2 text-sm text-gray-500">
                    📍 Mumbai, India
                  </p>

                </div>

              </div>


              {/* Edit Button */}
              <button
                onClick={() => navigate("/edit-profile")}
                className="rounded-xl bg-indigo-600 px-6 py-3 font-semibold text-white shadow-lg shadow-indigo-200 transition hover:-translate-y-0.5 hover:bg-indigo-700"
              >
                ✏️ Edit Profile
              </button>

            </div>

          </div>

        </section>


        {/* Content */}
        <div className="mt-8 grid gap-8 lg:grid-cols-3">

          {/* Left Content */}
          <div className="space-y-8 lg:col-span-2">

            {/* About */}
            <section className="rounded-2xl border border-gray-200 bg-white p-7 shadow-sm">

              <p className="font-semibold text-indigo-600">
                ABOUT
              </p>

              <h2 className="mt-2 text-2xl font-bold text-gray-900">
                About me
              </h2>

              <p className="mt-4 leading-8 text-gray-600">
                I'm a passionate developer and aspiring entrepreneur
                interested in building products that solve real-world
                problems. I enjoy working with ambitious people and
                turning startup ideas into meaningful products.
              </p>

            </section>


            {/* Skills */}
            <section className="rounded-2xl border border-gray-200 bg-white p-7 shadow-sm">

              <p className="font-semibold text-indigo-600">
                SKILLS
              </p>

              <h2 className="mt-2 text-2xl font-bold text-gray-900">
                What I can bring
              </h2>

              <div className="mt-5 flex flex-wrap gap-3">

                {skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full bg-indigo-50 px-4 py-2 text-sm font-semibold text-indigo-700"
                  >
                    {skill}
                  </span>
                ))}

              </div>

            </section>


            {/* Startup Interests */}
            <section className="rounded-2xl border border-gray-200 bg-white p-7 shadow-sm">

              <p className="font-semibold text-indigo-600">
                STARTUP INTERESTS
              </p>

              <h2 className="mt-2 text-2xl font-bold text-gray-900">
                What I'm interested in
              </h2>

              <div className="mt-6 grid gap-4 sm:grid-cols-2">

                <div className="rounded-2xl bg-indigo-50 p-5">
                  <div className="text-2xl">
                    💻
                  </div>

                  <h3 className="mt-3 font-bold text-gray-900">
                    Technology
                  </h3>

                  <p className="mt-1 text-sm leading-6 text-gray-600">
                    Building modern software products and platforms.
                  </p>
                </div>


                <div className="rounded-2xl bg-purple-50 p-5">
                  <div className="text-2xl">
                    🚀
                  </div>

                  <h3 className="mt-3 font-bold text-gray-900">
                    Startups
                  </h3>

                  <p className="mt-1 text-sm leading-6 text-gray-600">
                    Exploring innovative startup ideas and businesses.
                  </p>
                </div>

              </div>

            </section>

          </div>


          {/* Right Sidebar */}
          <aside className="space-y-8">

            {/* Looking For */}
            <section className="rounded-2xl border border-gray-200 bg-white p-7 shadow-sm">

              <p className="font-semibold text-indigo-600">
                LOOKING FOR
              </p>

              <h2 className="mt-2 text-xl font-bold text-gray-900">
                My ideal co-founder
              </h2>

              <p className="mt-4 leading-7 text-gray-600">
                I'm looking for someone passionate about startups,
                product development and building something impactful.
              </p>

              <div className="mt-5 space-y-3">

                <div className="flex items-center gap-3">
                  <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-green-50">
                    🎯
                  </span>

                  <span className="text-sm font-medium text-gray-700">
                    Strong problem solving
                  </span>
                </div>

                <div className="flex items-center gap-3">
                  <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-purple-50">
                    💡
                  </span>

                  <span className="text-sm font-medium text-gray-700">
                    Creative thinker
                  </span>
                </div>

                <div className="flex items-center gap-3">
                  <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-indigo-50">
                    🤝
                  </span>

                  <span className="text-sm font-medium text-gray-700">
                    Team player
                  </span>
                </div>

              </div>

            </section>


            {/* Profile Stats */}
            <section className="rounded-2xl border border-gray-200 bg-white p-7 shadow-sm">

              <p className="font-semibold text-indigo-600">
                PROFILE
              </p>

              <div className="mt-5 grid grid-cols-2 gap-4">

                <div className="rounded-xl bg-gray-50 p-4 text-center">

                  <p className="text-2xl font-bold text-gray-900">
                    2
                  </p>

                  <p className="mt-1 text-sm text-gray-500">
                    Startups
                  </p>

                </div>


                <div className="rounded-xl bg-gray-50 p-4 text-center">

                  <p className="text-2xl font-bold text-gray-900">
                    5
                  </p>

                  <p className="mt-1 text-sm text-gray-500">
                    Skills
                  </p>

                </div>


                <div className="rounded-xl bg-gray-50 p-4 text-center">

                  <p className="text-2xl font-bold text-gray-900">
                    12
                  </p>

                  <p className="mt-1 text-sm text-gray-500">
                    Connections
                  </p>

                </div>


                <div className="rounded-xl bg-gray-50 p-4 text-center">

                  <p className="text-2xl font-bold text-gray-900">
                    60%
                  </p>

                  <p className="mt-1 text-sm text-gray-500">
                    Complete
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
                Find your co-founder
              </h2>

              <p className="mt-2 text-sm leading-6 text-gray-300">
                Discover ambitious people who match your skills
                and startup vision.
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

export default Profile;