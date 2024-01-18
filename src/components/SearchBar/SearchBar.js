import React, { useState } from "react";
import classes from "./SearchBar.module.css";
import Search from "../../assets/Img/SVG/Search.svg";

const SearchBar = (onSearch) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleInputChange = (event) => {
    const value = event.target.value;
    setSearchTerm(value);
    if (onSearch) {
      onSearch(value);
    }
  };

  return (
    <div className={classes.searchContainer}>
      <input
        type="text"
        placeholder="Search..."
        className={classes.searchInput}
      />
    </div>
  );
};

export default SearchBar;
