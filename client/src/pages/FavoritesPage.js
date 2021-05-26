import React, { useEffect, useState } from "react";
import API from "../utils/API";
import Favorites from "../components/Favorites/Favorites";
import Container from "../components/Container/Container";
import { useHistory } from "react-router-dom";

function FavoritesPage() {
    const [favorite, setFavorite] = useState([]);
  
    //initialize the history object for redirecting purposes
    const history = useHistory();
  
    // function that sends REST API call to our DB to retrieve a given user's favorited stations and save it to state
    const getData = () => {
      API.getFavorites()
      .then((res) => {
        console.log(res.data);
        setFavorite(res.data);
      })
      .catch((e) => {
        console.log(e)
      });
    };
  
    useEffect(() => {
      //code that will check our login status and return an object that is either true or false for "logged_in"
      API.checkLoginStatus().then(res => {
        console.log(res);
        if (res.data && !res.data.logged_in) {
            //if we are not logged in, then redirect
            history.push("/login");
        } else {
          //otherwise, load the favorites page
          getData();
        }
      });
     
    }, []);
  
    // click handler to remove a favorited from the FavoritesPage
    const handleDelete = async (index) => {

      // creates a new array with only the location_id value that matches the deleted card's location_id. We can then use this variable to delete the information from our DB in the deleteFavorite API REST call.
      const filteredFavorite = favorite.filter(fav => fav.id === index);
      
      // API call to delete the favorited station from the DB
      const res = await API.deleteFavorite(filteredFavorite[0].id)
      console.log(res);

      // If the request to DELETE favorite from server is successful..
      if (res.status === 200) {
        alert("Successfully removed from favorites");

         // then save the newly filtered data and set the new state
        const newList = favorite.filter(fav => fav.id !== index);
        setFavorite(newList);
        
      // otherwise, alert user that the favorited station was not removed
      } else {
        console.log(res.status);
        alert('Failed to remove from favorites.');
      }    
    }

    // variable that will hold our newly mapped data in order to render a new Favorite card for each item
    const favoritesCard = favorite.map((fav, index) => {
      if (fav) {
        return (
          <Favorites 
            key={index} 
            favorite={fav} 
            handleDelete={() => handleDelete(fav.id)} />
        )
      }
    });
    
  
    return (
      <Container>
        {/* {favoritesCard} */}
        {favorite.length > 0 ? favoritesCard : 
          <p className="intro">
            It doesn't look like you have any favorites saved yet. Navigate to the Map page to save from your favorite EV charging stations!
          </p>
        }
      </Container>
    );
  }
  
  export default FavoritesPage;