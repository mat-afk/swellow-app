import { useState } from "react";
import { IoSearchSharp } from "react-icons/io5";
import useContacts from "../../hooks/useContacts";
import toast from "react-hot-toast";

const SearchBox = () => {
  const [targetContact, setTargetContact] = useState("");

  const { contacts, setContacts } = useContacts();

  const search = (e) => {
    e.preventDefault();

    setTargetContact(e.target.value);

    contacts.map((c) => {
      if (c.fullName.toLowerCase().includes(targetContact.toLowerCase())) {
        c.display = "";
      } else {
        c.display = "hidden";
      }
    });

    setContacts(contacts);
  };

  return (
    <form className="flex items-center gap-2" onSubmit={search}>
      <input
        type="text"
        placeholder="Search..."
        className="input input-bordered rounded-full bg-white w-full h-11"
        value={targetContact}
        onChange={(e) => setTargetContact(e.target.value)}
      />
      <button
        type="submit"
        className="btn btn-circle bg-yellow-400 hover:bg-yellow-500 text-white"
      >
        <IoSearchSharp className="w-6 h-6 outline-none" />
      </button>
    </form>
  );
};

export default SearchBox;
