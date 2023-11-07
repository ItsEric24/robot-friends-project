/* eslint-disable react/prop-types */
import "./../App.css";

function SearchBox({ searchChange }) {
  return (
    <form>
      <input
        className="input-field"
        type="text"
        placeholder="Type a name here"
        onChange={searchChange}
      />
    </form>
  );
}
export default SearchBox;
