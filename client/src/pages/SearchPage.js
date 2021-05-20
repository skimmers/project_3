import React, {useState, useEffect} from 'react';
import SearchBar from '../components/SearchBar/SearchBar';
import SearchResult from '../components/SearchResult';

const SearchPage = (props) => {
  const [input, setInput] = useState('');
  const [searchResultDefault, setSearchResultDefault] = useState();
  const [searchResult, setSearchResult] = useState();

  const fetchData = async () => {
    return await fetch('https://restcountries.eu/rest/v2/all')
      .then(response => response.json())
      .then(data => {
         setSearchResult(data) 
         setSearchResultDefault(data)
       });}

  const updateInput = async (input) => {
     const filtered = searchResultDefault.filter(search => {
      return search.name.toLowerCase().includes(input.toLowerCase())
     })
     setInput(input);
     setSearchResult(filtered);
  }

  useEffect( () => {fetchData()},[]);
	
  return (
    <>
      <h1>Search Results</h1>
      <SearchBar 
       input={input} 
       onChange={updateInput}
      />
      <SearchResult searchResult={searchResult}/>
    </>
   );
}

export default SearchPage