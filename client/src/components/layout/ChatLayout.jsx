import React from "react";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";

const ChatLayout = () => {
  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar />

      <div className="flex-1 flex flex-col">
        <Navbar />

        <div className="flex-1 flex items-center justify-center text-gray-500 text-lg">
          Select a chat to start messaging
        </div>z
      </div>
    </div>
  );
};

export default ChatLayout;