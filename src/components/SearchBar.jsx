const SearchBar = () => {
  return (
    <div className="w-full text-center">
      <input
        type="text"
        placeholder="Search by Tags..."
        className="rounded-md bg-slate-500 bg-opacity-50 p-1 cursor-pointer focus:outline-none focus:border-transparent w-2/3 mb-5"
      />
    </div>
  );
};

export default SearchBar;
