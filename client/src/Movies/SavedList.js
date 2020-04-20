import React from 'react';
import { useHistory } from 'react-router-dom' // hook


function SavedList(props) {

  const history = useHistory()

  function returnHome() {
    history.push("/")
  }

  return (

    <div className="saved-list">
      <h3>Saved Movies:</h3>
      {props.list.map(movie => (
        <span className="saved-movie">{movie.title}</span>
      ))}
      <div className="home-button" onClick={returnHome}>Home</div>
    </div>
  )
};

export default SavedList;
