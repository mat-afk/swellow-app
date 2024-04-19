import { conversationStore } from "../../zustand/conversationStore";

const Contact = ({ contact, isLastIndex }) => {
  const { fullName, profilePicture, emoji } = contact;

  const { selectedConversation, setSelectedConversation } = conversationStore();

  const isSelected = contact._id === selectedConversation?._id;

  return (
    <>
      <div
        className={`flex gap-2 items-center rounded hover:bg-yellow-400 p-2 py-1 cursor-pointer ${
          isSelected ? "bg-yellow-400" : ""
        }`}
        onClick={() => setSelectedConversation(contact)}
      >
        <div className="avatar online">
          <div className="w-12 rounded-full">
            <img src={profilePicture} alt="User avatar" />
          </div>
        </div>

        <div className="flex flex-col flex-1">
          <div className="flex gap-3 justify-between items-center">
            <p className="font-bold text-zinc-900">{fullName}</p>
            <span className="text-xl">{emoji}</span>
          </div>
        </div>
      </div>
      {!isLastIndex && <div className="divider my-0 py-0 h-1"></div>}
    </>
  );
};

export default Contact;
