function Home() {
  return (
    <main className="min-h-screen bg-white text-gray-900">

      {/* NAVBAR */}
      <nav className="border-b border-gray-100 bg-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">

          {/* Logo */}
          <a
            href="/"
            className="text-2xl font-bold tracking-tight text-indigo-600"
          >
            Foundra<span className="text-gray-900">.</span>
          </a>

          {/* Navigation */}
          <div className="hidden items-center gap-8 md:flex">
            <a
              href="/"
              className="font-medium text-gray-900"
            >
              Home
            </a>

            <a
              href="#about"
              className="font-medium text-gray-500 transition hover:text-indigo-600"
            >
              About
            </a>

            <a
              href="#features"
              className="font-medium text-gray-500 transition hover:text-indigo-600"
            >
              Features
            </a>

            <a
              href="/login"
              className="font-medium text-gray-500 transition hover:text-indigo-600"
            >
              Login
            </a>

            <a
              href="/signup"
              className="rounded-lg bg-indigo-600 px-5 py-2.5 font-semibold text-white transition hover:bg-indigo-700"
            >
              Sign Up
            </a>
          </div>

        </div>
      </nav>


      {/* HERO SECTION */}
      <section className="overflow-hidden">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">

          <div className="grid items-center gap-14 lg:grid-cols-2">

            {/* LEFT SIDE */}
            <div>

              <div className="mb-6 inline-flex items-center rounded-full bg-indigo-50 px-4 py-2 text-sm font-medium text-indigo-700">
                🚀 Build. Collaborate. Grow.
              </div>

              <h1 className="max-w-2xl text-5xl font-bold leading-tight tracking-tight sm:text-6xl">
                Find Your
                <span className="block text-indigo-600">
                  Co-Founder
                </span>
              </h1>

              <p className="mt-6 max-w-xl text-lg leading-8 text-gray-600">
                Build your startup with the right person.
                Discover talented people, share ideas and find
                a co-founder who matches your vision and skills.
              </p>

              <div className="mt-8 flex flex-col gap-4 sm:flex-row">

                <a
                  href="/signup"
                  className="rounded-xl bg-indigo-600 px-7 py-3.5 text-center font-semibold text-white shadow-lg shadow-indigo-200 transition hover:-translate-y-0.5 hover:bg-indigo-700"
                >
                  Get Started →
                </a>

                <a
                  href="/login"
                  className="rounded-xl border border-gray-300 px-7 py-3.5 text-center font-semibold text-gray-700 transition hover:border-indigo-300 hover:bg-gray-50"
                >
                  Login
                </a>

              </div>

            </div>


            {/* RIGHT SIDE */}
            <div className="relative mx-auto w-full max-w-md">

              {/* Background decoration */}
              <div className="absolute -inset-6 rounded-3xl bg-indigo-100 opacity-50 blur-3xl" />

              {/* Founder card */}
              <div className="relative rounded-3xl border border-gray-200 bg-white p-7 shadow-2xl">

                <div className="flex items-center gap-4">

                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-indigo-100 text-3xl">
                    👨🏻‍💻
                  </div>

                  <div>
                    <p className="text-sm text-gray-500">
                      Founder Profile
                    </p>

                    <h2 className="text-xl font-bold text-gray-900">
                      Aman Kumar
                    </h2>

                    <p className="text-sm text-gray-500">
                      Delhi, India
                    </p>
                  </div>

                </div>


                <div className="mt-6 rounded-2xl bg-gray-50 p-5">

                  <p className="text-sm text-gray-500">
                    Looking for
                  </p>

                  <p className="mt-1 text-lg font-semibold">
                    Technical Co-Founder
                  </p>

                  <div className="mt-4 flex flex-wrap gap-2">

                    <span className="rounded-full bg-indigo-100 px-3 py-1 text-sm text-indigo-700">
                      React
                    </span>

                    <span className="rounded-full bg-indigo-100 px-3 py-1 text-sm text-indigo-700">
                      Node.js
                    </span>

                    <span className="rounded-full bg-indigo-100 px-3 py-1 text-sm text-indigo-700">
                      MongoDB
                    </span>

                  </div>

                </div>


                {/* Match */}
                <div className="mt-5 rounded-2xl border border-indigo-100 bg-indigo-50 p-5">

                  <div className="flex items-center justify-between">

                    <div>
                      <p className="text-xs font-semibold text-indigo-600">
                        MATCH
                      </p>

                      <p className="mt-1 text-3xl font-bold">
                        75%
                      </p>
                    </div>

                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-indigo-600 text-xl text-white">
                      ✓
                    </div>

                  </div>

                  <div className="mt-4 h-2 overflow-hidden rounded-full bg-white">
                    <div className="h-full w-3/4 rounded-full bg-indigo-600" />
                  </div>

                </div>


                <a
                  href="/find-cofounder"
                  className="mt-5 block rounded-xl bg-gray-900 py-3 text-center font-semibold text-white transition hover:bg-gray-800"
                >
                  Find Co-Founder
                </a>

              </div>

            </div>

          </div>

        </div>
      </section>


      {/* FEATURES */}
      <section
        id="features"
        className="bg-gray-50 px-6 py-20"
      >
        <div className="mx-auto max-w-7xl">

          <div className="mx-auto max-w-2xl text-center">

            <p className="font-semibold text-indigo-600">
              WHY FOUNDRA?
            </p>

            <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
              Everything you need to build your startup
            </h2>

            <p className="mt-4 text-gray-600">
              Find the right people, build connections and
              turn your startup idea into reality.
            </p>

          </div>


          <div className="mt-12 grid gap-6 md:grid-cols-3">

            {/* Feature 1 */}
            <div className="rounded-2xl border border-gray-200 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">

              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-indigo-100 text-2xl">
                🎯
              </div>

              <h3 className="mt-6 text-xl font-bold">
                Find Co-Founder
              </h3>

              <p className="mt-3 leading-7 text-gray-600">
                Discover people with skills and interests that
                complement your startup idea.
              </p>

            </div>


            {/* Feature 2 */}
            <div className="rounded-2xl border border-gray-200 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">

              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-purple-100 text-2xl">
                💡
              </div>

              <h3 className="mt-6 text-xl font-bold">
                Share Your Startup
              </h3>

              <p className="mt-3 leading-7 text-gray-600">
                Create your startup profile and tell others
                about your idea, skills and goals.
              </p>

            </div>


            {/* Feature 3 */}
            <div className="rounded-2xl border border-gray-200 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">

              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-pink-100 text-2xl">
                🤝
              </div>

              <h3 className="mt-6 text-xl font-bold">
                Build Connections
              </h3>

              <p className="mt-3 leading-7 text-gray-600">
                Send connection requests and start building
                meaningful startup relationships.
              </p>

            </div>

          </div>

        </div>
      </section>


      {/* HOW IT WORKS */}
      <section
        id="about"
        className="bg-white px-6 py-20"
      >
        <div className="mx-auto max-w-7xl">

          <div className="mx-auto max-w-2xl text-center">

            <p className="font-semibold text-indigo-600">
              HOW IT WORKS
            </p>

            <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
              Start building in 3 simple steps
            </h2>

          </div>


          <div className="mt-14 grid gap-10 md:grid-cols-3">

            <div className="text-center">

              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-indigo-600 text-xl font-bold text-white">
                01
              </div>

              <h3 className="mt-5 text-xl font-bold">
                Create Your Profile
              </h3>

              <p className="mt-3 text-gray-600">
                Add your skills, interests and startup goals.
              </p>

            </div>


            <div className="text-center">

              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-indigo-600 text-xl font-bold text-white">
                02
              </div>

              <h3 className="mt-5 text-xl font-bold">
                Find People
              </h3>

              <p className="mt-3 text-gray-600">
                Discover potential co-founders who match your needs.
              </p>

            </div>


            <div className="text-center">

              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-indigo-600 text-xl font-bold text-white">
                03
              </div>

              <h3 className="mt-5 text-xl font-bold">
                Start Building
              </h3>

              <p className="mt-3 text-gray-600">
                Connect, collaborate and turn your idea into reality.
              </p>

            </div>

          </div>

        </div>
      </section>


      {/* FINAL CTA */}
      <section className="px-6 py-20">

        <div className="mx-auto max-w-5xl rounded-3xl bg-indigo-600 px-6 py-14 text-center shadow-xl sm:px-12">

          <h2 className="text-3xl font-bold text-white sm:text-4xl">
            Ready to find your co-founder?
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-indigo-100">
            Join Foundra and start building your startup
            with the right people.
          </p>

          <a
            href="/signup"
            className="mt-7 inline-block rounded-xl bg-white px-7 py-3.5 font-semibold text-indigo-700 shadow-lg transition hover:-translate-y-0.5"
          >
            Get Started →
          </a>

        </div>

      </section>


      {/* FOOTER */}
      <footer className="bg-gray-950 px-6 py-10 text-white">

        <div className="mx-auto max-w-7xl">

          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">

            <div>
              <h2 className="text-2xl font-bold">
                Foundra<span className="text-indigo-400">.</span>
              </h2>

              <p className="mt-2 text-sm text-gray-400">
                Build. Collaborate. Grow.
              </p>
            </div>

            <p className="text-sm text-gray-500">
              © 2026 Foundra. All rights reserved.
            </p>

          </div>

        </div>

      </footer>

    </main>
  );
}

export default Home;