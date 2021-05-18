import React, { useEffect, useState } from "react";
import GoogleMapReact from 'google-map-react';
import API from "../utils/API";
import SearchBar from "../components/SearchBar/SearchBar"


function HomePage() {
  // Setting our component's initial state
  const [location, setLocation] = useState([])

  // Load all books and store them with setBooks
  useEffect(() => {
    loadLocation()
  }, [])

  // Loads all books and sets them to books
  function loadLocation() {
    API.getLocation()
      .then(res => {
        console.log(res.data) 
        setLocation(res.data)
      })
      .catch(err => console.log(err));
  };

//   function handleInputChange(event) {
//     // add code to control the components here
//     const { name, value } = event.target;
//     const newState = {
//       ...formObject,
//       [name]: value
//     }

//     setFormObject(newState);
//   }

//   function handleFormSubmit() {
//     // add code here to post a new book to the api
//     if (formObject.title, formObject.author) {
//       API.saveBook(formObject)
//       .then((res) => {
//         console.log(res.data)
//         setFormObject(res.data);
//       })
//       .catch(err => console.log(err));
//     }
//   }

    return (
<<<<<<< HEAD:client/src/pages/homepage.js
      <div>
          <h1>Testing for API JSON data</h1>
      </div>
    );
  }

=======

        <div>
          <SearchBar />
            <h2> Map Page</h2>
        </div>
    )
}

  //     <div>
  //         <h1>Testing for API JSON data</h1>
  //     </div>
  //   );
  // }

>>>>>>> 67b286145618014ff9707f053f91934b900f91f5:client/src/pages/HomPage.js

export default HomePage;