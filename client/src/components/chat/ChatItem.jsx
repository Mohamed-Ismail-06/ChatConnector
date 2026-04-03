import React from "react";

const ChatItem = ({ name, message, time, unread, avatar }) => {
  return (
    <div className="flex items-center gap-3 px-4 py-3 hover:bg-gray-100 cursor-pointer border-b border-gray-100">
      
      {/* Avatar */}
      <div className="w-12 h-12 rounded-full bg-green-500 text-white flex items-center justify-center font-semibold">
        {avatar}
      </div>

      {/* Chat info */}
      <div className="flex-1 min-w-0">
        <div className="flex justify-between">
          <h3 className="font-semibold text-gray-800 truncate">
            {name}
          </h3>
          <span className="text-xs text-gray-500">{time}</span>
        </div>

        <p className="text-sm text-gray-500 truncate">
          {message}
        </p>
      </div>

      {/* Unread */}
      {unread > 0 && (
        <div className="bg-green-500 text-white text-xs px-2 py-1 rounded-full">
          {unread}
        </div>
      )}
    </div>
  );
};

export default ChatItem;