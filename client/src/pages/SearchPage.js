import React, { useState, useEffect } from 'react';
import SearchBar from '../components/SearchBar/SearchBar';
import MapList from '../components/Map/Map';

const SearchPage = (props) => {
  const [input, setInput] = useState('');
  const [mapDefault, setMapDefault] = useState();
  const [mapList, setMapList] = useState();

  const fetchData = async () => {
    return await fetch('https://restcountries.eu/rest/v2/all')
      .then(response => response.json())
      .then(data => {
         setMapList(data) 
         setMapListDefault(data)
       });}

  const updateInput = async (input) => {
     const filtered = countryListDefault.filter(country => {
      return country.name.toLowerCase().includes(input.toLowerCase())
     })
     setInput(input);
     setMapList(filtered);
  }

  useEffect( () => {fetchData()},[]);
	
  return (
    <>
      <h1>Country List</h1>
      <SearchBar 
       input={input} 
       onChange={updateInput}
      />
      <MapList mapList={mapList}/>
    </>
   );
}

export default SearchPage