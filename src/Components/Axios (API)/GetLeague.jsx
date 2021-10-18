import API from './Getinfo'
import './css/API.css'
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Rank from './Rank'

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
            <Link to={`/Classificacao/${league.data[props.id].name}/${league.data[props.id].id}`}><button className="LeagueButton">Classificação</button></Link>
      </div></>) : ("")}
    </>
  )

}