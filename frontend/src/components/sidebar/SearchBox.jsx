import { IoSearchSharp } from "react-icons/io5";

const SearchBox = () => {
  return (
    <form className="flex items-center gap-2">
      <input
        type="text"
        placeholder="Search..."
        className="input input-bordered rounded-full bg-white"
      />
      <button type="submit" className="btn btn-circle bg-yellow-400 hover:bg-yellow-300 text-white">
        <IoSearchSharp className="w-6 h-6 outline-none" />
      </button>
    </form>
  );
};

export default SearchBox;
