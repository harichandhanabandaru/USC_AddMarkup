import React from 'react'
import SearchBar from '../molecules/SearchBar';
import SearchBookList from '../molecules/SearchBookList';
import BookDetails from "../organisms/BookDetails";

function Navbar() {

    return (
      <div>
        {/* blinklist logo */}
        <SearchBar />
        <SearchBookList />
        
        <BookDetails/>
      </div>
    );
    
}

export default Navbar
