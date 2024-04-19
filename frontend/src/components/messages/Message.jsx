import { useAuthContext } from "../../context/AuthContext";
import { extractTime } from "../../utils/extractTime";
import { conversationStore } from "../../zustand/conversationStore";

const Message = ({ message }) => {
  const { senderId, message: text, createdAt } = message;
  const time = extractTime(createdAt);

  const { authUser } = useAuthContext();
  const { selectedConversation: contact } = conversationStore();

  const isFromMe = authUser._id === senderId;

  const messagePositionClassName = isFromMe ? "chat-end" : "chat-start";
  const messageColorClassName = isFromMe ? "bg-yellow-400" : "bg-white";
  const profilePicture = isFromMe
    ? authUser.profilePicture
    : contact.profilePicture;
  const shakeClassName = message.shouldShake ? "shake" : "";

  return (
    <div className={`chat ${messagePositionClassName}`}>
      <div className="chat-image avatar">
        <div className="w-10 rounded-full">
          <img src={profilePicture} alt="User avatar" />
        </div>
      </div>
      <div
        className={`chat-bubble break-words text-zinc-900 ${messageColorClassName} ${shakeClassName}`}
      >
        {text}
      </div>
      <div className="chat-footer opacity-50 text-xs flex gap-1 items-center">
        {time}
      </div>
    </div>
  );
};

export default Message;
