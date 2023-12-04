import { useDispatch, useSelector } from "react-redux";
import { onSearch } from "../store/slices/taskSlice";

const SearchField = () => {
  const { searchFilter } = useSelector((state) => state.tasks);
  const dispatch = useDispatch();

  const handleSearch = (e) => {
    dispatch(onSearch(e.target.value));
  };

  return (
    <>
      <input
        type="text"
        value={searchFilter}
        onChange={handleSearch}
        className="w-full focus:outline-none active:outline-none pl-7"
        placeholder="Search Task Name"
        required
      />
    </>
  );
};

export default SearchField;
