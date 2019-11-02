import React from "react";
import "../App.css";
import PlayerCard from "./PlayerCard";
import useDarkMode from "./hooks/useDarkMode"

const Display = props => {
  const [darkMode,setDarkMode] = useDarkMode();

  const toggleDarkMode = event => {
    event.preventDefault();
    setDarkMode(!darkMode);
  };

  return(
    <div>
      <span title="darkModeBtn">
        <button onClick={toggleDarkMode}> Dark mode</button>
      </span>
      {props.playerData.map((player) => {
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
export default Display;
