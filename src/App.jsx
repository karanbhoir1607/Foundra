import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Dashboard from "./pages/Dashboard";
import Profile from "./pages/Profile";
import EditProfile from "./pages/EditProfile";
import MyStartups from "./pages/MyStartups";
import StartupDetails from "./pages/StartupDetails";
import FindCofounder from "./pages/FindCofounder";
import Chat from "./pages/Chat";

function App() {
  return (
    <Routes>
      {/* Public Pages */}
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />

      {/* Main Pages */}
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/find-cofounder" element={<FindCofounder />} />
      <Route path="/chat" element={<Chat />} />

      {/* Profile */}
      <Route path="/profile" element={<Profile />} />
      <Route path="/edit-profile" element={<EditProfile />} />

      {/* Startups */}
      <Route path="/my-startups" element={<MyStartups />} />
      <Route path="/startup/:id" element={<StartupDetails />} />
    </Routes>
  );
}

export default App;