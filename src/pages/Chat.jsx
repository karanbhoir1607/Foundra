import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Chat() {
  const navigate = useNavigate();

  const [selectedChat, setSelectedChat] = useState(0);
  const [message, setMessage] = useState("");

  const [chats, setChats] = useState([
    {
      name: "Arjun Mehta",
      role: "Full Stack Developer",
      initials: "AM",
      online: true,
      messages: [
        {
          sender: "them",
          text: "Hey! I saw your startup idea. It looks really interesting!",
          time: "10:30 AM",
        },
        {
          sender: "me",
          text: "Thanks! I'm currently looking for someone who can help build the product.",
          time: "10:32 AM",
        },
        {
          sender: "them",
          text: "I'd love to know more about it.",
          time: "10:34 AM",
        },
      ],
    },
    {
      name: "Priya Sharma",
      role: "UI/UX Designer",
      initials: "PS",
      online: true,
      messages: [
        {
          sender: "them",
          text: "Hi! Are you still looking for a designer?",
          time: "Yesterday",
        },
      ],
    },
    {
      name: "Rahul Patil",
      role: "Marketing & Growth",
      initials: "RP",
      online: false,
      messages: [
        {
          sender: "me",
          text: "Let's discuss the startup opportunity.",
          time: "Yesterday",
        },
      ],
    },
  ]);

  const currentChat = chats[selectedChat];

  const sendMessage = () => {
    if (!message.trim()) return;

    const updatedChats = [...chats];

    updatedChats[selectedChat].messages.push({
      sender: "me",
      text: message.trim(),
      time: "Now",
    });

    setChats(updatedChats);
    setMessage("");
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
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


      {/* Chat Container */}
      <main className="mx-auto max-w-7xl px-4 py-6 sm:px-6">

        <div className="overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-xl">

          <div className="grid h-[calc(100vh-150px)] min-h-[600px] md:grid-cols-[320px_1fr]">

            {/* Conversations */}
            <aside className="border-r border-gray-200 bg-white">

              {/* Header */}
              <div className="border-b border-gray-200 p-5">

                <div className="flex items-center justify-between">

                  <div>
                    <p className="font-semibold text-indigo-600">
                      FOUNDRА MESSAGES
                    </p>

                    <h1 className="mt-1 text-2xl font-bold text-gray-900">
                      Messages
                    </h1>
                  </div>

                  <span className="rounded-full bg-indigo-50 px-3 py-1 text-sm font-semibold text-indigo-600">
                    {chats.length}
                  </span>

                </div>


                {/* Search */}
                <div className="mt-5">

                  <input
                    type="text"
                    placeholder="Search conversations..."
                    className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-sm outline-none transition focus:border-indigo-500 focus:ring-4 focus:ring-indigo-100"
                  />

                </div>

              </div>


              {/* Chat List */}
              <div className="h-[calc(100%-150px)] overflow-y-auto">

                {chats.map((chat, index) => (

                  <button
                    key={chat.name}
                    onClick={() => setSelectedChat(index)}
                    className={`flex w-full items-center gap-4 border-b border-gray-100 p-5 text-left transition ${
                      selectedChat === index
                        ? "bg-indigo-50"
                        : "hover:bg-gray-50"
                    }`}
                  >

                    {/* Avatar */}
                    <div className="relative shrink-0">

                      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-indigo-100 font-bold text-indigo-700">
                        {chat.initials}
                      </div>

                      {chat.online && (
                        <span className="absolute bottom-0 right-0 h-3.5 w-3.5 rounded-full border-2 border-white bg-green-500" />
                      )}

                    </div>


                    {/* Details */}
                    <div className="min-w-0 flex-1">

                      <div className="flex items-center justify-between gap-2">

                        <p className="truncate font-semibold text-gray-900">
                          {chat.name}
                        </p>

                        <span className="text-xs text-gray-400">
                          {chat.messages[chat.messages.length - 1]?.time}
                        </span>

                      </div>

                      <p className="mt-1 truncate text-sm text-gray-500">
                        {chat.messages[chat.messages.length - 1]?.text}
                      </p>

                    </div>

                  </button>

                ))}

              </div>

            </aside>


            {/* Chat Area */}
            <section className="flex min-w-0 flex-col">

              {/* Chat Header */}
              <div className="flex items-center justify-between border-b border-gray-200 bg-white p-5">

                <div className="flex items-center gap-4">

                  <div className="relative">

                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-purple-100 font-bold text-purple-700">
                      {currentChat.initials}
                    </div>

                    {currentChat.online && (
                      <span className="absolute bottom-0 right-0 h-3.5 w-3.5 rounded-full border-2 border-white bg-green-500" />
                    )}

                  </div>


                  <div>

                    <h2 className="font-bold text-gray-900">
                      {currentChat.name}
                    </h2>

                    <p className="text-sm text-gray-500">
                      {currentChat.online ? "● Online" : "Offline"} ·{" "}
                      {currentChat.role}
                    </p>

                  </div>

                </div>


                <button
                  onClick={() => navigate("/profile")}
                  className="hidden rounded-xl border border-gray-200 px-4 py-2 text-sm font-semibold text-gray-600 transition hover:bg-gray-50 sm:block"
                >
                  View Profile
                </button>

              </div>


              {/* Messages */}
              <div className="flex-1 space-y-5 overflow-y-auto bg-gray-50 p-5 sm:p-7">

                <div className="mb-6 text-center">

                  <span className="rounded-full bg-white px-4 py-2 text-xs font-medium text-gray-400 shadow-sm">
                    Today
                  </span>

                </div>


                {currentChat.messages.map((msg, index) => (

                  <div
                    key={index}
                    className={`flex ${
                      msg.sender === "me"
                        ? "justify-end"
                        : "justify-start"
                    }`}
                  >

                    <div
                      className={`max-w-[80%] sm:max-w-[65%] ${
                        msg.sender === "me"
                          ? "items-end"
                          : "items-start"
                      }`}
                    >

                      <div
                        className={`rounded-2xl px-5 py-3.5 text-sm leading-6 shadow-sm ${
                          msg.sender === "me"
                            ? "rounded-br-md bg-indigo-600 text-white"
                            : "rounded-bl-md border border-gray-200 bg-white text-gray-700"
                        }`}
                      >
                        {msg.text}
                      </div>

                      <p
                        className={`mt-1.5 text-xs text-gray-400 ${
                          msg.sender === "me"
                            ? "text-right"
                            : "text-left"
                        }`}
                      >
                        {msg.time}
                      </p>

                    </div>

                  </div>

                ))}

              </div>


              {/* Message Input */}
              <div className="border-t border-gray-200 bg-white p-4 sm:p-5">

                <div className="flex items-end gap-3">

                  <textarea
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    onKeyDown={handleKeyDown}
                    rows="1"
                    placeholder={`Message ${currentChat.name}...`}
                    className="max-h-32 min-h-[48px] flex-1 resize-none rounded-xl border border-gray-300 bg-gray-50 px-4 py-3 outline-none transition focus:border-indigo-500 focus:bg-white focus:ring-4 focus:ring-indigo-100"
                  />

                  <button
                    onClick={sendMessage}
                    className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-indigo-600 text-lg text-white shadow-lg shadow-indigo-200 transition hover:-translate-y-0.5 hover:bg-indigo-700"
                  >
                    ➤
                  </button>

                </div>

                <p className="mt-2 hidden text-xs text-gray-400 sm:block">
                  Press Enter to send
                </p>

              </div>

            </section>

          </div>

        </div>

      </main>

    </div>
  );
}

export default Chat;