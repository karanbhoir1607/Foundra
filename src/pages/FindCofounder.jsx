import { useState } from "react";
import { useNavigate } from "react-router-dom";

function FindCofounder() {
  const navigate = useNavigate();
  const [search, setSearch] = useState("");
  const [skill, setSkill] = useState("All");

  const founders = [
    {
      id: 1,
      name: "Arjun Mehta",
      role: "Full Stack Developer",
      location: "Mumbai, India",
      skills: ["React", "Node.js", "MongoDB"],
      initials: "AM",
      color: "bg-indigo-100 text-indigo-700",
    },
    {
      id: 2,
      name: "Priya Sharma",
      role: "UI/UX Designer",
      location: "Pune, India",
      skills: ["Figma", "UI/UX", "Branding"],
      initials: "PS",
      color: "bg-purple-100 text-purple-700",
    },
    {
      id: 3,
      name: "Rohan Patil",
      role: "Marketing & Growth",
      location: "Bangalore, India",
      skills: ["Marketing", "SEO", "Growth"],
      initials: "RP",
      color: "bg-pink-100 text-pink-700",
    },
    {
      id: 4,
      name: "Neha Kapoor",
      role: "Product Manager",
      location: "Delhi, India",
      skills: ["Product", "Strategy", "Research"],
      initials: "NK",
      color: "bg-blue-100 text-blue-700",
    },
    {
      id: 5,
      name: "Aditya Verma",
      role: "Backend Developer",
      location: "Hyderabad, India",
      skills: ["Python", "Node.js", "AWS"],
      initials: "AV",
      color: "bg-green-100 text-green-700",
    },
    {
      id: 6,
      name: "Sneha Joshi",
      role: "Business Strategist",
      location: "Mumbai, India",
      skills: ["Business", "Strategy", "Finance"],
      initials: "SJ",
      color: "bg-orange-100 text-orange-700",
    },
  ];

  const skills = [
    "All",
    "React",
    "UI/UX",
    "Marketing",
    "Product",
    "Python",
    "Business",
  ];

  const filteredFounders = founders.filter((founder) => {
    const matchesSearch =
      founder.name.toLowerCase().includes(search.toLowerCase()) ||
      founder.role.toLowerCase().includes(search.toLowerCase()) ||
      founder.location.toLowerCase().includes(search.toLowerCase());

    const matchesSkill =
      skill === "All" || founder.skills.includes(skill);

    return matchesSearch && matchesSkill;
  });

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
        <div className="text-center">

          <p className="font-semibold text-indigo-600">
            FIND YOUR MATCH
          </p>

          <h1 className="mt-3 text-3xl font-bold text-gray-900 sm:text-4xl">
            Find your perfect co-founder
          </h1>

          <p className="mx-auto mt-4 max-w-2xl text-gray-600">
            Discover ambitious people with the skills and experience
            you need to turn your startup idea into reality.
          </p>

        </div>


        {/* Search */}
        <div className="mx-auto mt-8 max-w-3xl">

          <div className="relative">

            <span className="absolute left-4 top-1/2 -translate-y-1/2 text-xl">
              🔎
            </span>

            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search by name, role or location..."
              className="w-full rounded-2xl border border-gray-200 bg-white py-4 pl-12 pr-4 shadow-sm outline-none transition focus:border-indigo-500 focus:ring-4 focus:ring-indigo-100"
            />

          </div>

        </div>


        {/* Filters */}
        <div className="mt-6 flex flex-wrap justify-center gap-3">

          {skills.map((item) => (
            <button
              key={item}
              onClick={() => setSkill(item)}
              className={`rounded-full px-5 py-2.5 text-sm font-semibold transition ${
                skill === item
                  ? "bg-indigo-600 text-white shadow-md"
                  : "bg-white text-gray-600 ring-1 ring-gray-200 hover:bg-gray-50"
              }`}
            >
              {item}
            </button>
          ))}

        </div>


        {/* Results */}
        <div className="mt-10">

          <div className="mb-5 flex items-center justify-between">

            <h2 className="text-xl font-bold text-gray-900">
              Recommended founders
            </h2>

            <p className="text-sm text-gray-500">
              {filteredFounders.length} founders found
            </p>

          </div>


          {/* Founder Cards */}
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">

            {filteredFounders.map((founder) => (

              <div
                key={founder.id}
                className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
              >

                {/* Profile */}
                <div className="flex items-center gap-4">

                  <div
                    className={`flex h-14 w-14 items-center justify-center rounded-full text-lg font-bold ${founder.color}`}
                  >
                    {founder.initials}
                  </div>

                  <div>
                    <h3 className="font-bold text-gray-900">
                      {founder.name}
                    </h3>

                    <p className="mt-1 text-sm text-gray-600">
                      {founder.role}
                    </p>
                  </div>

                </div>


                {/* Location */}
                <p className="mt-5 text-sm text-gray-500">
                  📍 {founder.location}
                </p>


                {/* Skills */}
                <div className="mt-4 flex flex-wrap gap-2">

                  {founder.skills.map((item) => (
                    <span
                      key={item}
                      className="rounded-full bg-indigo-50 px-3 py-1 text-xs font-medium text-indigo-700"
                    >
                      {item}
                    </span>
                  ))}

                </div>


                {/* Buttons */}
                <div className="mt-6 flex gap-3">

                  <button
                    onClick={() => navigate("/chat")}
                    className="flex-1 rounded-xl bg-indigo-600 py-2.5 text-sm font-semibold text-white transition hover:bg-indigo-700"
                  >
                    Message
                  </button>

                  <button
                    onClick={() => navigate(`/profile?id=${founder.id}`)}
                    className="flex-1 rounded-xl border border-gray-200 py-2.5 text-sm font-semibold text-gray-700 transition hover:bg-gray-50"
                  >
                    View Profile
                  </button>

                </div>

              </div>

            ))}

          </div>


          {/* No Results */}
          {filteredFounders.length === 0 && (
            <div className="rounded-2xl border border-gray-200 bg-white p-12 text-center">

              <div className="text-4xl">
                🔎
              </div>

              <h3 className="mt-4 text-xl font-bold text-gray-900">
                No founders found
              </h3>

              <p className="mt-2 text-gray-500">
                Try searching with a different name, role or skill.
              </p>

            </div>
          )}

        </div>

      </main>

    </div>
  );
}

export default FindCofounder;