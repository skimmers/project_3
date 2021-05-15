import React from 'react';

function SearchBar(props){
    return (
       <input type="search"
       className="search-bar"
       placeholder={props.placeholder}
       onChange={props.handleChange} 
       />
    )
}

export default SearchBar;