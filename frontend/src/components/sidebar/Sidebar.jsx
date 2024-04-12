import SearchBox from "./SearchBox";
import ConversationsList from "./ConversationsList";
import LogoutButton from "./LogoutButton";

const Sidebar = () => {
  return (
    <div className="border-r border-slate-500 p-4 flex flex-col">
      <SearchBox />
      <div className="divider px-3 mb-2"></div>
      <ConversationsList />
      <LogoutButton />
    </div>
  );
};

export default Sidebar;
