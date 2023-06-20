

export function SearchBar(props) {

 const {searchVideo, setSearchTerm, searchTerm} = props
  
 return ( 
    <form onSubmit={searchVideo} className="search-bar">
      <input
        onChange={(e) => setSearchTerm(e.target.value)}
        type="text"
        name="search"
        value={searchTerm}
        placeholder="Search on YouTube..."
      />
      <button>Search</button>
    </form>
  )
}
