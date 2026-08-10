import { useState } from "react";
import { useNavigate } from "react-router-dom";

function EditProfile() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "Karan Bhoir",
    role: "Founder & Full Stack Developer",
    location: "Mumbai, India",
    about:
      "I'm a passionate developer and aspiring entrepreneur interested in building products that solve real-world problems.",
    lookingFor:
      "Someone passionate about startups, product development and building something impactful.",
  });

  const [skills, setSkills] = useState([
    "JavaScript",
    "React",
    "Node.js",
    "UI/UX",
  ]);

  const [newSkill, setNewSkill] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const addSkill = () => {
    const skill = newSkill.trim();

    if (skill && !skills.includes(skill)) {
      setSkills([...skills, skill]);
      setNewSkill("");
    }
  };

  const removeSkill = (skillToRemove) => {
    setSkills(skills.filter((skill) => skill !== skillToRemove));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    alert("Profile updated successfully!");

    navigate("/profile");
  };

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

          <button
            onClick={() => navigate("/profile")}
            className="flex h-10 w-10 items-center justify-center rounded-full bg-indigo-100 font-semibold text-indigo-700"
          >
            K
          </button>

        </div>
      </header>


      {/* Main */}
      <main className="mx-auto max-w-4xl px-6 py-10">

        {/* Back */}
        <button
          onClick={() => navigate("/profile")}
          className="mb-8 font-semibold text-gray-600 transition hover:text-indigo-600"
        >
          ← Back to Profile
        </button>


        {/* Heading */}
        <div className="mb-8">

          <p className="font-semibold text-indigo-600">
            PROFILE SETTINGS
          </p>

          <h1 className="mt-2 text-3xl font-bold text-gray-900 sm:text-4xl">
            Edit your profile
          </h1>

          <p className="mt-3 text-gray-600">
            Keep your profile updated so founders can understand
            who you are and what you are looking for.
          </p>

        </div>


        <form onSubmit={handleSubmit} className="space-y-8">

          {/* Basic Information */}
          <section className="rounded-2xl border border-gray-200 bg-white p-7 shadow-sm">

            <div className="mb-6">

              <h2 className="text-xl font-bold text-gray-900">
                Basic Information
              </h2>

              <p className="mt-1 text-sm text-gray-500">
                Tell people a little about yourself.
              </p>

            </div>


            <div className="grid gap-6 sm:grid-cols-2">

              {/* Name */}
              <div>

                <label className="mb-2 block text-sm font-semibold text-gray-700">
                  Full Name
                </label>

                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none transition focus:border-indigo-500 focus:ring-4 focus:ring-indigo-100"
                />

              </div>


              {/* Role */}
              <div>

                <label className="mb-2 block text-sm font-semibold text-gray-700">
                  Role / Profession
                </label>

                <input
                  type="text"
                  name="role"
                  value={formData.role}
                  onChange={handleChange}
                  required
                  className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none transition focus:border-indigo-500 focus:ring-4 focus:ring-indigo-100"
                />

              </div>


              {/* Location */}
              <div className="sm:col-span-2">

                <label className="mb-2 block text-sm font-semibold text-gray-700">
                  Location
                </label>

                <input
                  type="text"
                  name="location"
                  value={formData.location}
                  onChange={handleChange}
                  required
                  className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none transition focus:border-indigo-500 focus:ring-4 focus:ring-indigo-100"
                />

              </div>

            </div>

          </section>


          {/* About */}
          <section className="rounded-2xl border border-gray-200 bg-white p-7 shadow-sm">

            <h2 className="text-xl font-bold text-gray-900">
              About You
            </h2>

            <p className="mt-1 text-sm text-gray-500">
              Write a short introduction about yourself.
            </p>

            <textarea
              name="about"
              value={formData.about}
              onChange={handleChange}
              rows="5"
              className="mt-6 w-full resize-none rounded-xl border border-gray-300 px-4 py-3 leading-7 outline-none transition focus:border-indigo-500 focus:ring-4 focus:ring-indigo-100"
            />

          </section>


          {/* Skills */}
          <section className="rounded-2xl border border-gray-200 bg-white p-7 shadow-sm">

            <h2 className="text-xl font-bold text-gray-900">
              Your Skills
            </h2>

            <p className="mt-1 text-sm text-gray-500">
              Add skills that can help potential co-founders understand
              your strengths.
            </p>


            {/* Existing Skills */}
            <div className="mt-6 flex flex-wrap gap-3">

              {skills.map((skill) => (

                <div
                  key={skill}
                  className="flex items-center gap-2 rounded-full bg-indigo-50 px-4 py-2 text-sm font-semibold text-indigo-700"
                >

                  <span>{skill}</span>

                  <button
                    type="button"
                    onClick={() => removeSkill(skill)}
                    className="font-bold text-indigo-400 hover:text-red-500"
                  >
                    ×
                  </button>

                </div>

              ))}

            </div>


            {/* Add Skill */}
            <div className="mt-6 flex flex-col gap-3 sm:flex-row">

              <input
                type="text"
                value={newSkill}
                onChange={(e) => setNewSkill(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    e.preventDefault();
                    addSkill();
                  }
                }}
                placeholder="Add a skill..."
                className="flex-1 rounded-xl border border-gray-300 px-4 py-3 outline-none transition focus:border-indigo-500 focus:ring-4 focus:ring-indigo-100"
              />

              <button
                type="button"
                onClick={addSkill}
                className="rounded-xl bg-gray-900 px-6 py-3 font-semibold text-white transition hover:bg-gray-800"
              >
                + Add Skill
              </button>

            </div>

          </section>


          {/* Looking For */}
          <section className="rounded-2xl border border-gray-200 bg-white p-7 shadow-sm">

            <h2 className="text-xl font-bold text-gray-900">
              Co-founder Preferences
            </h2>

            <p className="mt-1 text-sm text-gray-500">
              Tell potential co-founders what kind of person you are
              looking for.
            </p>

            <textarea
              name="lookingFor"
              value={formData.lookingFor}
              onChange={handleChange}
              rows="5"
              className="mt-6 w-full resize-none rounded-xl border border-gray-300 px-4 py-3 leading-7 outline-none transition focus:border-indigo-500 focus:ring-4 focus:ring-indigo-100"
            />

          </section>


          {/* Save */}
          <div className="flex flex-col-reverse gap-3 sm:flex-row sm:justify-end">

            <button
              type="button"
              onClick={() => navigate("/profile")}
              className="rounded-xl border border-gray-200 bg-white px-7 py-3 font-semibold text-gray-700 transition hover:bg-gray-50"
            >
              Cancel
            </button>

            <button
              type="submit"
              className="rounded-xl bg-indigo-600 px-7 py-3 font-semibold text-white shadow-lg shadow-indigo-200 transition hover:-translate-y-0.5 hover:bg-indigo-700"
            >
              Save Changes →
            </button>

          </div>

        </form>

      </main>

    </div>
  );
}

export default EditProfile;