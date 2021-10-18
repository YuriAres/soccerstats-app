import API from './Getinfo'
import React, {useState, useEffect} from 'react';

export default props => {
    const [league, setLeague] = useState({});

    useEffect(() => {
      API
          .get('/leagues')
          .then((response) => setLeague(response.data))
          .catch((err) => {
            console.error("ops! ocorreu um erro" + err);
          });
    },[]);

    return(
        <>  
            {(typeof league.data != 'undefined') ? (
            console.log(league.data[0].logos.dark)) : ("")}
            
        </>
    )

}