import React, { useEffect, useState } from "react";
import API from "../utils/API";
import Favorites from "../components/Favorites/Favorites";
import { useHistory } from "react-router-dom";
import { Container } from "@material-ui/core";

// ********* Having Issues getting the favorites to map out and create a new card for each one liked. Maybe someone else can take a look at this when they hop on. **********************

function FavoritesPage() {
    const [favorite, setFavorite] = useState({});
  
    //initialize the history object for redirecting purposes
    const history = useHistory();
  
    // function that calls client side API to retrieve user's current location so we can set a start point for the map
    // Setting our component's initial states
    const getData = async () => {
      // Loads all API locations to be called in useEffect
      const res = await API.getFavorites()
      console.log(res.data);
      setFavorite(res.data);
    };
  
    useEffect(() => {
      //code that will check our login status and return an object that is either true or false for "logged_in"
      API.checkLoginStatus().then(res => {
        console.log(res)
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
    function handleDelete() {

        // API call to delete the favorited station from the DB
        API.deleteFavorite(favorite.location_id)
        .then((res) => {
          console.log(res.data)
        })
        .catch(err => console.log(err));
    }

    // Variable that holds all of the mapped locations retrieved from our DB
    // const mappedFavorites = () => {
    //     for (let i=0; i<favorite.length; i++) {
    //         {props.favorite.map((fav, index) => {
    //             return (
    //                 <Favorites key={index} favorite={fav} onclick={handleDelete}/>
    //             )
    //         })}
    //     }
    // }
  
    return (
      <Container>
        <Favorites favorite={favorite} />
      </Container>
    );
  }
  
  export default FavoritesPage;