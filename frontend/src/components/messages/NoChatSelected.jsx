import { TiMessages } from "react-icons/ti";

const NoChatSelected = () => {
  return (
    <div className="flex items-center justify-center w-full h-full">
      <div className="px-4 text-center sm:text-lg ms:text-xl text-zinc-900 font-semibold flex flex-col items-center gap-2">
        <p>Welcome, 👋 Luiz Quirino 🐦</p>
        <p>Select a chat to start messaging</p>
        <TiMessages className="text-3xl md:text-6xl text-center" />
      </div>
    </div>
  );
};

export default NoChatSelected;
