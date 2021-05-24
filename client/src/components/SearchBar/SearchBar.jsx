import React from 'react';

// function SearchBar(props){
//     return (
//        <input type="search"
//        className="search-bar"
//        placeholder={props.placeholder}
//        onChange={props.handleChange} 
//        />
//     )
// }

const SearchBar = (props) => {
    const BarStyling = {width:"20rem",background:"#F2F1F9", border:"none", padding:"0.5rem"};
    console.log(props)
    return (
      <div>
        <input 
         style={BarStyling}
         key="random1"
         onChange={e => props.setInput(e.target.value)}
         placeholder={"search place"}
         value={props.input}
        />
        <button onClick={() => props.handleSearch(props.input)} >Search</button>
      </div>
    );
  }

export default SearchBar;