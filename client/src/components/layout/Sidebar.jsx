import React from "react";

const chats = [
  {
    id: 1,
    name: "Arun",
    message: "Did you finish the project?",
    time: "10:30 AM",
    unread: 2,
    avatar: "A",
  },
  {
    id: 2,
    name: "Priya",
    message: "Let's meet tomorrow",
    time: "09:15 AM",
    unread: 0,
    avatar: "P",
  },
  {
    id: 3,
    name: "John",
    message: "Send me the files",
    time: "Yesterday",
    unread: 4,
    avatar: "J",
  },
  {
    id: 4,
    name: "Team Chat",
    message: "Meeting starts in 10 mins",
    time: "Yesterday",
    unread: 0,
    avatar: "T",
  },
];

const Sidebar = () => {
  return (
    <div className="w-full md:w-[380px] h-screen bg-white border-r border-gray-200 flex flex-col">
      <div className="flex items-center justify-between px-4 py-4 border-b border-gray-200 bg-green-500">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-white text-green-600 flex items-center justify-center font-bold text-lg">
            M
          </div>
          <div>
            <h2 className="text-white font-semibold text-lg">My Chats</h2>
            <p className="text-green-100 text-sm">Online</p>
          </div>
        </div>

        <button className="text-white text-xl font-bold">⋮</button>
      </div>

      <div className="p-3 border-b border-gray-200">
        <input
          type="text"
          placeholder="Search or start new chat"
          className="w-full px-4 py-2 rounded-xl bg-gray-100 border border-gray-200 outline-none focus:ring-2 focus:ring-green-500"
        />
      </div>

      <div className="flex-1 overflow-y-auto">
        {chats.map((chat) => (
          <div
            key={chat.id}
            className="flex items-center gap-3 px-4 py-3 hover:bg-gray-100 cursor-pointer border-b border-gray-100"
          >
            <div className="w-12 h-12 rounded-full bg-green-500 text-white flex items-center justify-center font-semibold text-lg">
              {chat.avatar}
            </div>

            <div className="flex-1 min-w-0">
              <div className="flex items-center justify-between">
                <h3 className="font-semibold text-gray-800 truncate">
                  {chat.name}
                </h3>
                <span className="text-xs text-gray-500">{chat.time}</span>
              </div>
              <p className="text-sm text-gray-500 truncate">{chat.message}</p>
            </div>

            {chat.unread > 0 && (
              <div className="min-w-[22px] h-[22px] px-2 rounded-full bg-green-500 text-white text-xs flex items-center justify-center">
                {chat.unread}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;