import React from 'react';

//function SearchBar(props){
    //return (
       //<input type="search"
       //className="search-bar"
       //placeholder={props.placeholder}
       //onChange={props.handleChange} 
       ///>
    //)
//}

const SearchBar = ({keyword,setKeyword}) => {
    const BarStyling = {width:"20rem",background:"#F2F1F9", border:"none", padding:"0.5rem"};
    return (
      <input 
       style={BarStyling}
       key="random1"
       value={keyword}
       placeholder={"search place"}
       onChange={(e) => setKeyword(e.target.value)}
      />
    );
  }

export default SearchBar;