import React from "react";
import ChatItem from "./ChatItem";

const chats = [
  { id: 1, name: "Arun", message: "Hello bro", time: "10:30", unread: 2, avatar: "A" },
  { id: 2, name: "Priya", message: "Meeting at 5", time: "09:10", unread: 0, avatar: "P" },
];

const ChatList = () => {
  return (
    <div className="flex-1 overflow-y-auto">
      {chats.map((chat) => (
        <ChatItem key={chat.id} {...chat} />
      ))}
    </div>
  );
};

export default ChatList;