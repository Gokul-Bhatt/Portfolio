import React, { useState, useRef, useEffect } from "react";
import { FaRobot, FaTimes, FaPaperPlane } from "react-icons/fa";
import { getBotReply } from "../data/chat";

const ChatBot = () => {
  const [open, setOpen] = useState(false);

  const [input, setInput] = useState("");

  const [messages, setMessages] = useState([
    {
      sender: "bot",
      text: "👋 Hi! I'm Gokul's AI Assistant.\n\nAsk me anything about Gokul, his skills, education, projects,work and expreince or contact.",
    },
  ]);

  const bottomRef = useRef(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleSend = () => {
    if (!input.trim()) return;

    const userMessage = {
      sender: "user",
      text: input,
    };

    const botMessage = {
      sender: "bot",
      text: getBotReply(input),
    };

    setMessages((prev) => [...prev, userMessage, botMessage]);

    setInput("");
  };

  return (
    <>
      {/* Floating Button */}
      <button
        onClick={() => setOpen(!open)}
        className="fixed left-6 bottom-14 z-50 w-16 h-16 rounded-full bg-cyan-500 hover:bg-cyan-600 shadow-2xl flex items-center justify-center text-white transition duration-300 hover:scale-110"
      >
        {open ? <FaTimes size={22} /> : <FaRobot size={28} />}
      </button>

      {/* Chat Window */}
      {open && (
        <div className="fixed left-6 bottom-24 z-50 w-[350px] sm:w-[380px] h-[550px] rounded-3xl bg-[#0B1120]/95 backdrop-blur-xl border border-white/10 shadow-2xl flex flex-col overflow-hidden">

          {/* Header */}
          <div className="bg-cyan-500 text-white px-5 py-4 flex justify-between items-center">
            <div>
              <h2 className="font-bold text-lg">Gokul AI</h2>
              <p className="text-xs opacity-90">Always online</p>
            </div>

            <button onClick={() => setOpen(false)}>
              <FaTimes />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4">

            {messages.map((msg, index) => (
              <div
                key={index}
                className={`flex ${
                  msg.sender === "user"
                    ? "justify-end"
                    : "justify-start"
                }`}
              >
                <div
                  className={`max-w-[80%] px-4 py-3 rounded-2xl whitespace-pre-line ${
                    msg.sender === "user"
                      ? "bg-cyan-500 text-white"
                      : "bg-gray-800 text-gray-200"
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}

            <div ref={bottomRef}></div>

          </div>

          {/* Input */}
          <div className="border-t border-white/10 p-3 flex gap-2">

            <input
              type="text"
              placeholder="Ask me something..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") handleSend();
              }}
              className="flex-1 rounded-xl bg-gray-800 text-white px-4 py-3 outline-none"
            />

            <button
              onClick={handleSend}
              className="bg-cyan-500 hover:bg-cyan-600 text-white rounded-xl px-4 transition"
            >
              <FaPaperPlane />
            </button>

          </div>

        </div>
      )}
    </>
  );
};

export default ChatBot;