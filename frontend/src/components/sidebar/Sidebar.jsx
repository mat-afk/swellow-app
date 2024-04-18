import SearchBox from "./SearchBox";
import ContactsList from "./ContactsList";
import LogoutButton from "./LogoutButton";

const Sidebar = () => {
  return (
    <div className="border-r border-slate-500 p-4 flex flex-col max-w-96">
      <SearchBox />
      <div className="divider px-3 mb-2"></div>
      <ContactsList />
      <LogoutButton />
    </div>
  );
};

export default Sidebar;
