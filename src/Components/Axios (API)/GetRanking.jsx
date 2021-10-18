import API from './Getinfo'
import './css/API.css'
import React, { useState, useEffect } from 'react';

export default props => {
  const [league, setLeague] = useState({});

  useEffect(() => {
    API
      .get('/leagues/'+props.league+'/standings?season=2020&sort=asc')
      .then(response => {setLeague(response.data)})
      .catch((err) => {
        console.error("ops! ocorreu um erro" + err);
      });
  }, []);

  return (
    <>
      {(typeof league.data != 'undefined') ? (<> 
            <tr>
                <td>{league.data.standings[props.id].stats[8].displayValue}</td>
                <td>{league.data.standings[props.id].team.name}</td>
                <td>{league.data.standings[props.id].stats[6].displayValue}</td>
                <td>{league.data.standings[props.id].stats[3].displayValue}</td>
                <td>{league.data.standings[props.id].stats[0].displayValue}</td>
                <td>{league.data.standings[props.id].stats[2].displayValue}</td>
                <td>{league.data.standings[props.id].stats[1].displayValue}</td>
                <td>{league.data.standings[props.id].stats[4].displayValue}</td>
                <td>{league.data.standings[props.id].stats[5].displayValue}</td>
                <td>{league.data.standings[props.id].stats[9].displayValue}</td>
            </tr>

        
        </>) : ("")}
    </>
  )

}