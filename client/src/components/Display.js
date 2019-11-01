import React from "react";
import "../App.css";
import PlayerCard from "./PlayerCard";

const Display = props => {
  const [darkMode,setDarkMod] = userDarkMode();

  const toggleDarkMode = event => {
    event.preventDefault();
    setDarkMode(darkMode);
  };

  return(
    <div>
      <span title="darkModeBtn">
        <button onClick={toggleDarkMode}> Dark mode</button>
      </span>
      {props.PlayerData.map((player) => {
        return <PlayerCard
        key={player.name}
        name={player.name}
        country={player.country}
        searches= {player.searches}
        />
      })}
    </div>
  )
}
export default Display
