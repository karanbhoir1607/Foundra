function Home() {
  return (
    <main className="bg-white">

      {/* ================= HERO SECTION ================= */}
      <section className="relative overflow-hidden">

        {/* Background Gradients */}
        <div className="absolute inset-0 -z-0">
          <div className="absolute left-1/2 top-0 h-96 w-96 -translate-x-1/2 rounded-full bg-indigo-100 blur-3xl opacity-60" />
          <div className="absolute right-0 top-40 h-80 w-80 rounded-full bg-purple-100 blur-3xl opacity-50" />
        </div>

        <div className="relative z-10 mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">

          <div className="grid items-center gap-14 lg:grid-cols-2">

            {/* Left Content */}
            <div>

              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-indigo-100 bg-indigo-50 px-4 py-2 text-sm font-medium text-indigo-700">
                <span>🚀</span>
                Build your startup team
              </div>

              <h1 className="max-w-2xl text-5xl font-bold leading-tight tracking-tight text-gray-900 sm:text-6xl">
                Find the right
                <span className="block bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                  co-founder.
                </span>
              </h1>

              <p className="mt-6 max-w-xl text-lg leading-8 text-gray-600">
                Turn your startup idea into reality by connecting with
                ambitious people who share your vision, skills and passion.
              </p>

              {/* Buttons */}
              <div className="mt-8 flex flex-col gap-4 sm:flex-row">

                <button className="rounded-xl bg-indigo-600 px-7 py-3.5 font-semibold text-white shadow-lg shadow-indigo-200 transition hover:-translate-y-0.5 hover:bg-indigo-700">
                  Find a Co-founder →
                </button>

                <button className="rounded-xl border border-gray-300 bg-white px-7 py-3.5 font-semibold text-gray-700 transition hover:border-indigo-300 hover:bg-gray-50">
                  Explore Startups
                </button>

              </div>

              {/* Stats */}
              <div className="mt-10 flex flex-wrap gap-8 border-t border-gray-200 pt-7">

                <div>
                  <p className="text-2xl font-bold text-gray-900">
                    1K+
                  </p>
                  <p className="text-sm text-gray-500">
                    Founders
                  </p>
                </div>

                <div>
                  <p className="text-2xl font-bold text-gray-900">
                    500+
                  </p>
                  <p className="text-sm text-gray-500">
                    Ideas shared
                  </p>
                </div>

                <div>
                  <p className="text-2xl font-bold text-gray-900">
                    50+
                  </p>
                  <p className="text-sm text-gray-500">
                    Connections
                  </p>
                </div>

              </div>

            </div>

            {/* Right UI Card */}
            <div className="relative mx-auto w-full max-w-md lg:max-w-lg">

              {/* Glow */}
              <div className="absolute -inset-4 rounded-3xl bg-gradient-to-r from-indigo-200 to-purple-200 opacity-40 blur-2xl" />

              {/* Main Card */}
              <div className="relative rounded-3xl border border-gray-200 bg-white p-6 shadow-2xl">

                {/* Card Header */}
                <div className="flex items-center justify-between">

                  <div>
                    <p className="text-sm text-gray-500">
                      Founder profile
                    </p>

                    <h2 className="mt-1 text-xl font-bold text-gray-900">
                      Arjun Mehta
                    </h2>
                  </div>

                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-indigo-100 text-xl">
                    👨🏻‍💻
                  </div>

                </div>

                {/* Profile Info */}
                <div className="mt-6 rounded-2xl bg-gray-50 p-5">

                  <p className="text-sm font-medium text-gray-500">
                    Looking for
                  </p>

                  <p className="mt-1 text-lg font-semibold text-gray-900">
                    Technical Co-founder
                  </p>

                  <div className="mt-4 flex flex-wrap gap-2">

                    <span className="rounded-full bg-indigo-50 px-3 py-1 text-xs font-medium text-indigo-700">
                      React
                    </span>

                    <span className="rounded-full bg-purple-50 px-3 py-1 text-xs font-medium text-purple-700">
                      AI
                    </span>

                    <span className="rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-700">
                      Startup
                    </span>

                  </div>

                </div>

                {/* Match Card */}
                <div className="mt-5 flex items-center justify-between rounded-2xl border border-indigo-100 bg-indigo-50 p-4">

                  <div>
                    <p className="text-xs font-medium text-indigo-600">
                      MATCH SCORE
                    </p>

                    <p className="mt-1 text-2xl font-bold text-gray-900">
                      94%
                    </p>
                  </div>

                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-indigo-600 text-xl text-white">
                    ✓
                  </div>

                </div>

                {/* View Profile */}
                <button className="mt-5 w-full rounded-xl bg-gray-900 py-3 font-semibold text-white transition hover:bg-gray-800">
                  View Profile
                </button>

              </div>
            </div>

          </div>

        </div>
      </section>


      {/* ================= FEATURES SECTION ================= */}
      <section className="bg-gray-50 px-6 py-20">

        <div className="mx-auto max-w-7xl">

          {/* Heading */}
          <div className="mx-auto max-w-2xl text-center">

            <p className="font-semibold text-indigo-600">
              WHY FOUNDRA?
            </p>

            <h2 className="mt-3 text-3xl font-bold text-gray-900 sm:text-4xl">
              Everything you need to build your startup
            </h2>

            <p className="mt-4 text-gray-600">
              From finding the right co-founder to building your network,
              Foundra helps you take the next step.
            </p>

          </div>


          {/* Feature Cards */}
          <div className="mt-12 grid gap-6 md:grid-cols-3">

            {/* Card 1 */}
            <div className="group rounded-2xl border border-gray-200 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-xl">

              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-indigo-100 text-2xl">
                🎯
              </div>

              <h3 className="mt-6 text-xl font-bold text-gray-900">
                Find the Right Co-founder
              </h3>

              <p className="mt-3 leading-7 text-gray-600">
                Discover people with the skills, experience and vision
                that complement your startup idea.
              </p>

              <button className="mt-5 font-semibold text-indigo-600 hover:text-indigo-700">
                Find a co-founder →
              </button>

            </div>


            {/* Card 2 */}
            <div className="group rounded-2xl border border-gray-200 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-xl">

              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-purple-100 text-2xl">
                💡
              </div>

              <h3 className="mt-6 text-xl font-bold text-gray-900">
                Discover Startup Ideas
              </h3>

              <p className="mt-3 leading-7 text-gray-600">
                Explore exciting ideas, share your own and find people
                who want to build something meaningful.
              </p>

              <button className="mt-5 font-semibold text-purple-600 hover:text-purple-700">
                Explore ideas →
              </button>

            </div>


            {/* Card 3 */}
            <div className="group rounded-2xl border border-gray-200 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-xl">

              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-pink-100 text-2xl">
                🤝
              </div>

              <h3 className="mt-6 text-xl font-bold text-gray-900">
                Build Your Network
              </h3>

              <p className="mt-3 leading-7 text-gray-600">
                Connect with ambitious founders and create meaningful
                relationships that can help your startup grow.
              </p>

              <button className="mt-5 font-semibold text-pink-600 hover:text-pink-700">
                Start connecting →
              </button>

            </div>

          </div>

        </div>

      </section>
      {/* ================= HOW FOUNDRA WORKS ================= */}
<section className="bg-white px-6 py-20">
  <div className="mx-auto max-w-7xl">

    {/* Heading */}
    <div className="mx-auto max-w-2xl text-center">

      <p className="font-semibold text-indigo-600">
        HOW IT WORKS
      </p>

      <h2 className="mt-3 text-3xl font-bold text-gray-900 sm:text-4xl">
        From idea to co-founder in 3 simple steps
      </h2>

      <p className="mt-4 text-gray-600">
        Foundra makes it simple to discover the right people and
        start building your next big idea.
      </p>

    </div>


    {/* Steps */}
    <div className="relative mt-16 grid gap-10 md:grid-cols-3">

      {/* Step 1 */}
      <div className="relative text-center">

        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-indigo-600 text-xl font-bold text-white shadow-lg shadow-indigo-200">
          01
        </div>

        <h3 className="mt-6 text-xl font-bold text-gray-900">
          Create Your Profile
        </h3>

        <p className="mx-auto mt-3 max-w-sm leading-7 text-gray-600">
          Tell the Foundra community about your skills, interests,
          experience and the kind of startup you want to build.
        </p>

      </div>


      {/* Step 2 */}
      <div className="relative text-center">

        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-purple-600 text-xl font-bold text-white shadow-lg shadow-purple-200">
          02
        </div>

        <h3 className="mt-6 text-xl font-bold text-gray-900">
          Discover People
        </h3>

        <p className="mx-auto mt-3 max-w-sm leading-7 text-gray-600">
          Explore founders and startup ideas that match your
          skills, interests and vision.
        </p>

      </div>


      {/* Step 3 */}
      <div className="relative text-center">

        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-pink-600 text-xl font-bold text-white shadow-lg shadow-pink-200">
          03
        </div>

        <h3 className="mt-6 text-xl font-bold text-gray-900">
          Start Building
        </h3>

        <p className="mx-auto mt-3 max-w-sm leading-7 text-gray-600">
          Connect with the right people, share your ideas and
          start turning your vision into reality.
        </p>

      </div>

    </div>


    {/* Bottom CTA */}
    <div className="mt-16 rounded-3xl bg-gradient-to-r from-indigo-600 to-purple-600 px-6 py-10 text-center shadow-xl sm:px-10">

      <h3 className="text-2xl font-bold text-white sm:text-3xl">
        Ready to find your co-founder?
      </h3>

      <p className="mx-auto mt-3 max-w-2xl text-indigo-100">
        Join Foundra and take the first step toward building
        something amazing.
      </p>

      <button className="mt-6 rounded-xl bg-white px-7 py-3.5 font-semibold text-indigo-700 shadow-lg transition hover:-translate-y-0.5 hover:bg-gray-50">
        Get Started →
      </button>

    </div>

  </div>
</section>
    {/* ================= FOUNDER STORIES ================= */}
<section className="bg-gray-50 px-6 py-20">
  <div className="mx-auto max-w-7xl">

    {/* Heading */}
    <div className="mx-auto max-w-2xl text-center">

      <p className="font-semibold text-indigo-600">
        FOUNDER STORIES
      </p>

      <h2 className="mt-3 text-3xl font-bold text-gray-900 sm:text-4xl">
        Built by founders, for founders
      </h2>

      <p className="mt-4 text-gray-600">
        See how ambitious people are using Foundra to turn ideas
        into meaningful connections.
      </p>

    </div>


    {/* Testimonials */}
    <div className="mt-12 grid gap-6 md:grid-cols-3">

      {/* Story 1 */}
      <div className="rounded-2xl border border-gray-200 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">

        <div className="flex gap-1 text-yellow-400">
          ★ ★ ★ ★ ★
        </div>

        <p className="mt-5 leading-7 text-gray-600">
          “I had the idea for my startup but needed someone with
          strong technical skills. Foundra helped me find exactly
          the person I was looking for.”
        </p>

        <div className="mt-6 flex items-center gap-3">

          <div className="flex h-11 w-11 items-center justify-center rounded-full bg-indigo-100 text-lg">
            👨🏻
          </div>

          <div>
            <p className="font-semibold text-gray-900">
              Rahul Sharma
            </p>
            <p className="text-sm text-gray-500">
              Startup Founder
            </p>
          </div>

        </div>

      </div>


      {/* Story 2 */}
      <div className="rounded-2xl border border-gray-200 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">

        <div className="flex gap-1 text-yellow-400">
          ★ ★ ★ ★ ★
        </div>

        <p className="mt-5 leading-7 text-gray-600">
          “The best part about Foundra is discovering people who
          actually share the same ambition. It made networking
          feel much more meaningful.”
        </p>

        <div className="mt-6 flex items-center gap-3">

          <div className="flex h-11 w-11 items-center justify-center rounded-full bg-purple-100 text-lg">
            👩🏻
          </div>

          <div>
            <p className="font-semibold text-gray-900">
              Priya Patel
            </p>
            <p className="text-sm text-gray-500">
              Product Builder
            </p>
          </div>

        </div>

      </div>


      {/* Story 3 */}
      <div className="rounded-2xl border border-gray-200 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">

        <div className="flex gap-1 text-yellow-400">
          ★ ★ ★ ★ ★
        </div>

        <p className="mt-5 leading-7 text-gray-600">
          “Foundra gave me a place to share my idea and meet
          talented people who wanted to build something from
          the ground up.”
        </p>

        <div className="mt-6 flex items-center gap-3">

          <div className="flex h-11 w-11 items-center justify-center rounded-full bg-pink-100 text-lg">
            👨🏻‍💼
          </div>

          <div>
            <p className="font-semibold text-gray-900">
              Aditya Verma
            </p>
            <p className="text-sm text-gray-500">
              Entrepreneur
            </p>
          </div>

        </div>

      </div>

    </div>

  </div>
</section> 
{/* ================= FINAL CTA ================= */}
<section className="px-6 py-20">
  <div className="mx-auto max-w-5xl overflow-hidden rounded-3xl bg-gradient-to-r from-indigo-600 to-purple-600 px-6 py-16 text-center shadow-xl sm:px-12">

    <p className="font-semibold text-indigo-100">
      YOUR STARTUP JOURNEY STARTS HERE
    </p>

    <h2 className="mt-3 text-3xl font-bold text-white sm:text-4xl">
      Have an idea? Let's build it together.
    </h2>

    <p className="mx-auto mt-4 max-w-2xl text-indigo-100">
      Find the right people, share your vision and turn your
      startup idea into something real.
    </p>

    <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">

      <button className="rounded-xl bg-white px-7 py-3.5 font-semibold text-indigo-700 shadow-lg transition hover:-translate-y-0.5 hover:bg-gray-50">
        Get Started →
      </button>

      <button className="rounded-xl border border-white/30 bg-white/10 px-7 py-3.5 font-semibold text-white backdrop-blur transition hover:bg-white/20">
        Explore Founders
      </button>

    </div>

  </div>
</section>


{/* ================= FOOTER ================= */}
<footer className="border-t border-gray-200 bg-gray-950 px-6 py-12 text-white">

  <div className="mx-auto max-w-7xl">

    <div className="grid gap-10 md:grid-cols-4">

      {/* Brand */}
      <div className="md:col-span-2">

        <h2 className="text-2xl font-bold">
          Foundra<span className="text-indigo-400">.</span>
        </h2>

        <p className="mt-4 max-w-md leading-7 text-gray-400">
          A platform where ambitious people connect, share ideas
          and build the next generation of startups together.
        </p>

      </div>


      {/* Platform */}
      <div>

        <h3 className="font-semibold">
          Platform
        </h3>

        <ul className="mt-4 space-y-3 text-sm text-gray-400">

          <li className="cursor-pointer hover:text-white">
            Find Co-founder
          </li>

          <li className="cursor-pointer hover:text-white">
            Explore Startups
          </li>

          <li className="cursor-pointer hover:text-white">
            Founder Profiles
          </li>

          <li className="cursor-pointer hover:text-white">
            How It Works
          </li>

        </ul>

      </div>


      {/* Company */}
      <div>

        <h3 className="font-semibold">
          Company
        </h3>

        <ul className="mt-4 space-y-3 text-sm text-gray-400">

          <li className="cursor-pointer hover:text-white">
            About Us
          </li>

          <li className="cursor-pointer hover:text-white">
            Contact
          </li>

          <li className="cursor-pointer hover:text-white">
            Privacy
          </li>

          <li className="cursor-pointer hover:text-white">
            Terms
          </li>

        </ul>

      </div>

    </div>


    {/* Bottom Footer */}
    <div className="mt-10 flex flex-col gap-4 border-t border-gray-800 pt-6 text-sm text-gray-500 sm:flex-row sm:items-center sm:justify-between">

      <p>
        © 2026 Foundra. All rights reserved.
      </p>

      <div className="flex gap-5">

        <span className="cursor-pointer hover:text-white">
          Instagram
        </span>

        <span className="cursor-pointer hover:text-white">
          LinkedIn
        </span>

        <span className="cursor-pointer hover:text-white">
          Twitter
        </span>

      </div>

    </div>

  </div>

</footer>
    </main>
  );
}

export default Home;