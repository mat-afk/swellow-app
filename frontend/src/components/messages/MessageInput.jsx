import { BsSend } from "react-icons/bs";
import useConversation from "../../hooks/useConversation";
import { useState } from "react";

const MessageInput = () => {
  const [message, setMessage] = useState();

  const { loading, sendMessage } = useConversation();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!message) return;

    await sendMessage(message);
    setMessage("");
  };

  return (
    <form className="px-4 my-3" onSubmit={handleSubmit}>
      <div className="w-full relative">
        <input
          type="text"
          className="input h-11 border text-sm rounded-lg w-full p-2.5 text-zinc-900 border-slate-300 bg-white"
          placeholder="Send a message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <button
          type="submit"
          className="absolute inset-y-0 end-0 flex items-center pe-3"
        >
          {loading ? (
            <span className="loading loading-spinner"></span>
          ) : (
            <BsSend />
          )}
        </button>
      </div>
    </form>
  );
};

export default MessageInput;
