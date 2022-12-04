import React, { useState, useEffect } from "react";
import SearchApiData from "./components/SearchApiData"

import "./App.css";

function App() {
  // the value of the search field
  const [name, setName] = useState("");

  // the search result
  const [foundUsers, setFoundUsers] = useState(USERS);


  const filter = (e) => {
    const keyword = e.target.value;

    if (keyword !== "") {
      const results = USERS.filter((user) => {
        return user.name.toLowerCase().startsWith(keyword.toLowerCase());
        // Use the toLowerCase() method to make it case-insensitive
      });
      setFoundUsers(results);
    } else {
      setFoundUsers(USERS);
    }

    setName(keyword);
  };

  return (
    <div className="container">
      <h5></h5>
      <input
        type="search"
        value={name}
        onChange={filter}
        className="input"
        placeholder="Search"
      />

      <div className="user-list">

        {foundUsers && foundUsers.length > 0 ? (
          foundUsers.map((user) => (
            <li key={user.id} className="user" id="div1">
              <span className="user-id">{user.id}</span>
              <span className="user-name">{user.name}</span>
              <span className="user-age">{user.street_no}, {user.locality}</span>
              ,

              <span className="user-name">{user.postal_code}</span>
            </li>

          ))
        ) : (
          <h1>No results found!</h1>
        )}
      </div>
    </div>
  );
}

const USERS = [

  {
    "id": 1,
    "name": "Bazaar Cafe",
    "place_id": "kjk234g4gcvfx8usg1l33pi",
    "street_no": "60H",
    "locality": "Solomos Island Road",
    "postal_code": "20688",
    "lat": "36.7783 N",
    "long": "119.4179 W"
  }, {
    id: 2,
    "name": "Ashley's Cafe",
    "place_id": "12hydbdf76sljfts87sbfis",
    "street_no": "1B",
    "locality": "Macarthur Blvd",
    "postal_code": "20619",
    "lat": "38.1781 N",
    "long": "118.4171 W"
  }, {
    id: 3,
    "name": "Avenue Cafe",
    "place_id": "skjd86svvfdrsv55svbvf3f",
    "street_no": "45250",
    "locality": "Worth Avenue, Unit A",
    "postal_code": "20619",
    "lat": "36.1152",
    "long": "117.521"
  }, {
    id: 4,
    "name": "Hi-Lo Cafe",
    "place_id": "mjdhgetr4pojfyts22fzfsh",
    "street_no": "1X",
    "locality": "Macarthur Blvd",
    "postal_code": "20687",
    "lat": "36.7783",
    "long": "119.4179"
  }, {
    id: 5,
    "name": "California Chicken Cafe",
    "place_id": "12hydbdf76sljfts87sbfis",
    "street_no": "22803",
    "locality": "Gunston Dr Lexington Park",
    "postal_code": "20688",
    "lat": "35.7788",
    "long": "119.979"
  }, {
    id: 6,
    "name": "Avenue Bakery Cafe",
    "place_id": "jahgde7wgdiau8ewsahgosd"
  }, {
    id: 7,
    "name": "Philz Coffee",
    "place_id": "urhw3837ehalod7w02b7835",
    "street_no": "225",
    "locality": "Macarthur Blvd",
    "postal_code": "20687",
    "lat": "35.77813",
  },

]

export default App;

