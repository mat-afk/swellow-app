const Message = ({ text, time }) => {
  return (
    <div className="chat chat-end">
      <div className="chat-image avatar">
        <div className="w-10 rounded-full">
          <img
            src="https://cdn0.iconfinder.com/data/icons/communication-line-10/24/account_profile_user_contact_person_avatar_placeholder-512.png"
            alt="User avatar"
          />
        </div>
      </div>
      <div className="chat-bubble text-zinc-900 bg-yellow-400">{text}</div>
      <div className="chat-footer opacity-50 text-xs flex gap-1 items-center">{time}</div>
    </div>
  );
};

export default Message;
