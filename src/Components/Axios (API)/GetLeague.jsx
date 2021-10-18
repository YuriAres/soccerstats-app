import API from './Getinfo'
import './css/API.css'
import React, { useState, useEffect } from 'react';

export default props => {
  const [league, setLeague] = useState({});

  useEffect(() => {
    API
      .get('/leagues')
      .then((response) => setLeague(response.data))
      .catch((err) => {
        console.error("ops! ocorreu um erro" + err);
      });
  }, []);

  return (
    <>
      {(typeof league.data != 'undefined') ? (<> 
      <div className="LeagueDiv">
          <div className="LeagueImage">
            <img src={league.data[props.id].logos.light} className="LeagueIcons" />
          </div>
          <div className="LeagueDescription">
            {league.data[props.id].name}
            <div>({league.data[props.id].abbr})</div>
          </div>
          <button className="LeagueButton">Classificação</button>
      </div></>) : ("")}
    </>
  )

}