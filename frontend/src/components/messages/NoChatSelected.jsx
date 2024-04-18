import { TiMessages } from "react-icons/ti";
import { useAuthContext } from "../../context/AuthContext";

const NoChatSelected = () => {
  const { authUser } = useAuthContext();

  return (
    <div className="flex items-center justify-center w-full h-full">
      <div className="px-4 text-center sm:text-lg ms:text-xl text-zinc-900 font-semibold flex flex-col items-center gap-2">
        <p>Welcome, 👋 {authUser.fullName} 🐦</p>
        <p>Select a chat to start messaging</p>
        <TiMessages className="text-3xl md:text-6xl text-center" />
      </div>
    </div>
  );
};

export default NoChatSelected;
