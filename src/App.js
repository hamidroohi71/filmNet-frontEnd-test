import "./App.css";
import React, { useState, useEffect } from "react";
import UserPart from "./Components/UsersPart";

function App() {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);

  useEffect(() => {
    //Requesting the api to recieve the users data
    fetch("https://reqres.in/api/users?page=1")
      .then((res) => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setItems(result.data);
        },
        (error) => {
          setIsLoaded(isLoaded);
          setError(error);
        }
      );
  }, []);

  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <div class="Loading">Loading...</div>;
  } else
    return (
      <div className="PageContainer">
        <h1 className="Title">FilmNet Front End Developing Test</h1>
        <UserPart data={items} />
        <footer>
          <h2>Created by Hamid Roohi</h2>
          <h3>Phone: +98-910-778-5026</h3>
        </footer>
      </div>
    );
}

export default App;
