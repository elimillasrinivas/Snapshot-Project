import React, { useState } from "react";

const Form = ({ handleSubmit, history }) => {
  const [searchEntry, setSearchEntry] = useState("");
  const updateSearchInput = e => {
    setSearchEntry(e.target.value);
  };
  return (
    <form
      className="search-form"
      onSubmit={e => handleSubmit(e, history, searchEntry)}
    >
      <input
        type="text"
        name="search"
        placeholder="Search..."
        onChange={updateSearchInput}
        value={searchEntry}
      />
      <button
        type="submit"
        className='search-button'
      >
        <i class="fa fa-search" aria-hidden="true"></i>
      </button>
    </form>
  );
};

export default Form;
