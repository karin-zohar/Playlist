import React, { useState } from "react";

export function SearchBar(props) {
  const [searchTerm, setSearchTerm] = useState("");

  function searchVideo(e) {
    e.preventDefault();
    //TODO: logic
  }

  return (
    <form onSubmit={searchVideo} className="search-bar">
      <input
        onChange={(e) => setSearchTerm(e.target.value)}
        onHandle
        type="text"
        name="search"
        value={searchTerm}
        placeholder="Search on YouTube..."
      />
      <button>Search</button>
    </form>
  );
}
