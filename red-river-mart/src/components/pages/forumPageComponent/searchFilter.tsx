import type { SearchFilter as SearchFilterType } from "../../../types";

// This function handles the search input and  the search/submit button
export function SearchFilter({searchFilter,handleSearchChange,handleSubmit,}
    : SearchFilterType) {
  return (
    <form className="searchForm">
      <input
        type="text"
        placeholder="Search for your Interest!"
        value={searchFilter}
        onChange={(e) => handleSearchChange(e.target.value)}
        className="searchInput"
      />
      <button
        className="searchButton"
        type="submit"
        onClick={(e) => {
          e.preventDefault();
          handleSubmit();
        }}
      >
        Search
      </button>
    </form>
  );
}
