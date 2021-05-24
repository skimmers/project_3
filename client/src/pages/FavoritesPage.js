import React, { useEffect, useState } from "react";
import API from "../utils/API";
import Favorites from "../components/Favorites/Favorites";
import { useHistory } from "react-router-dom";
import { Container } from "@material-ui/core";

// ********* Having Issues getting the favorites to map out and create a new card for each one liked. Maybe someone else can take a look at this when they hop on. **********************

function FavoritesPage() {
    const [favorite, setFavorite] = useState([]);
  
    //initialize the history object for redirecting purposes
    const history = useHistory();
  
    // function that calls client side API to retrieve user's current location so we can set a start point for the map
    // Setting our component's initial states
    const getData = () => {
      // Loads all API locations to be called in useEffect
      API.getFavorites()
      .then((res) => {
        console.log(res.data);
        setFavorite(res.data);
      })
      .catch(e => console.log(e));
    };
  
    useEffect(() => {
      //code that will check our login status and return an object that is either true or false for "logged_in"
      API.checkLoginStatus().then(res => {
        console.log(res);
        if (res.data && !res.data.logged_in) {
            //if we are not logged in, then redirect
            history.push("/login");
        } else {
          //otherwise, load the map
          getData();
        }
      });
     
    }, []);
  
    // click handler to remove a favorited from the FavoritesPage
    const handleDelete = async (index) => {

      // creates a new array with all data that does not match the deleted card, and saves it to state.
      const newList = favorite.filter(fav => fav.location_id !== index);
      setFavorite(newList);

      // creates a new array with only the location_id value that matches the deleted card. We can then use this variable to delete the information from our DB in the deleteFavorite API REST call.
      const filteredFavorite = favorite.filter(fav => fav.id == index);
      console.log(filteredFavorite);
      
      // API call to delete the favorited station from the DB
      const res = await API.deleteFavorite(filteredFavorite[0].id)
      console.log(res);
      if (res.status === 200) {
        console.log("Clicked!" + res.status);
        alert("Successfully removed from favorites");
      } else {
        alert('Failed to delete post.');
      }    
    }

    // variable that will hold our newly mapped data in order to render a new Favorite card for each item
    const favoritesCard = favorite.map((fav, index) => {
      console.log(fav.id)
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
      <div>
        {favoritesCard}
      </div>
    );
  }
  
  export default FavoritesPage;