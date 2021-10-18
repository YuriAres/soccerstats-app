import './css/API.css'
import GetRanking from './GetRanking'


export default props => {
  if(props.league === "arg.1"){
    return (
      <> 
                <GetRanking league={props.league} id={0}></GetRanking>
                <GetRanking league={props.league} id={1}></GetRanking>
                <GetRanking league={props.league} id={2}></GetRanking>
                <GetRanking league={props.league} id={3}></GetRanking>
                <GetRanking league={props.league} id={4}></GetRanking>
                <GetRanking league={props.league} id={5}></GetRanking>

        </>
    );
  }
    if(props.league === "chn.1"){
      return (
        <> 
                  <GetRanking league={props.league} id={0}></GetRanking>
                  <GetRanking league={props.league} id={1}></GetRanking>
                  <GetRanking league={props.league} id={2}></GetRanking>
                  <GetRanking league={props.league} id={3}></GetRanking>
                  <GetRanking league={props.league} id={4}></GetRanking>
                  <GetRanking league={props.league} id={5}></GetRanking>
                  <GetRanking league={props.league} id={6}></GetRanking>
                  <GetRanking league={props.league} id={7}></GetRanking>
          </>
      );
    }
      if(props.league === "sgp.1"){
        return (
          <> 
                    <GetRanking league={props.league} id={0}></GetRanking>
                    <GetRanking league={props.league} id={1}></GetRanking>
                    <GetRanking league={props.league} id={2}></GetRanking>
                    <GetRanking league={props.league} id={3}></GetRanking>
                    <GetRanking league={props.league} id={4}></GetRanking>
                    <GetRanking league={props.league} id={5}></GetRanking>
                    <GetRanking league={props.league} id={6}></GetRanking>
                    <GetRanking league={props.league} id={7}></GetRanking>
                    <GetRanking league={props.league} id={8}></GetRanking>
            </>
        );
  }
  if(props.league === "aus.1" || props.league === "mys.1"){
    return (
      <> 
                <GetRanking league={props.league} id={0}></GetRanking>
                <GetRanking league={props.league} id={1}></GetRanking>
                <GetRanking league={props.league} id={2}></GetRanking>
                <GetRanking league={props.league} id={3}></GetRanking>
                <GetRanking league={props.league} id={4}></GetRanking>
                <GetRanking league={props.league} id={5}></GetRanking>
                <GetRanking league={props.league} id={6}></GetRanking>
                <GetRanking league={props.league} id={7}></GetRanking>
                <GetRanking league={props.league} id={8}></GetRanking>
                <GetRanking league={props.league} id={9}></GetRanking>
                <GetRanking league={props.league} id={10}></GetRanking>
                <GetRanking league={props.league} id={11}></GetRanking>
        </>
    );
}
if(props.league === "rus.1" || props.league === "uga.1" || props.league === "tha.1"){
  return (
    <> 
              <GetRanking league={props.league} id={0}></GetRanking>
              <GetRanking league={props.league} id={1}></GetRanking>
              <GetRanking league={props.league} id={2}></GetRanking>
              <GetRanking league={props.league} id={3}></GetRanking>
              <GetRanking league={props.league} id={4}></GetRanking>
              <GetRanking league={props.league} id={5}></GetRanking>
              <GetRanking league={props.league} id={6}></GetRanking>
              <GetRanking league={props.league} id={7}></GetRanking>
              <GetRanking league={props.league} id={8}></GetRanking>
              <GetRanking league={props.league} id={9}></GetRanking>
              <GetRanking league={props.league} id={10}></GetRanking>
              <GetRanking league={props.league} id={11}></GetRanking>
              <GetRanking league={props.league} id={12}></GetRanking>
              <GetRanking league={props.league} id={13}></GetRanking>
              <GetRanking league={props.league} id={14}></GetRanking>
              <GetRanking league={props.league} id={15}></GetRanking>
      </>
  );
}
if(props.league === "mex.1" || props.league === "ned.1" || props.league === "ger.1" || props.league === "por.1" || props.league === "jpn.1" || props.league === "idn.1"){
  return (
    <> 
              <GetRanking league={props.league} id={0}></GetRanking>
              <GetRanking league={props.league} id={1}></GetRanking>
              <GetRanking league={props.league} id={2}></GetRanking>
              <GetRanking league={props.league} id={3}></GetRanking>
              <GetRanking league={props.league} id={4}></GetRanking>
              <GetRanking league={props.league} id={5}></GetRanking>
              <GetRanking league={props.league} id={6}></GetRanking>
              <GetRanking league={props.league} id={7}></GetRanking>
              <GetRanking league={props.league} id={8}></GetRanking>
              <GetRanking league={props.league} id={9}></GetRanking>
              <GetRanking league={props.league} id={10}></GetRanking>
              <GetRanking league={props.league} id={11}></GetRanking>
              <GetRanking league={props.league} id={12}></GetRanking>
              <GetRanking league={props.league} id={13}></GetRanking>
              <GetRanking league={props.league} id={14}></GetRanking>
              <GetRanking league={props.league} id={15}></GetRanking>
              <GetRanking league={props.league} id={16}></GetRanking>
              <GetRanking league={props.league} id={17}></GetRanking>
      </>
  );
}
if(props.league === "bra.1" || props.league === "eng.1" || props.league === "fra.1" || props.league === "ita.1" || props.league === "esp.1" || props.league === "idn.1"){
  return (
    <> 
              <GetRanking league={props.league} id={0}></GetRanking>
              <GetRanking league={props.league} id={1}></GetRanking>
              <GetRanking league={props.league} id={2}></GetRanking>
              <GetRanking league={props.league} id={3}></GetRanking>
              <GetRanking league={props.league} id={4}></GetRanking>
              <GetRanking league={props.league} id={5}></GetRanking>
              <GetRanking league={props.league} id={6}></GetRanking>
              <GetRanking league={props.league} id={7}></GetRanking>
              <GetRanking league={props.league} id={8}></GetRanking>
              <GetRanking league={props.league} id={9}></GetRanking>
              <GetRanking league={props.league} id={10}></GetRanking>
              <GetRanking league={props.league} id={11}></GetRanking>
              <GetRanking league={props.league} id={12}></GetRanking>
              <GetRanking league={props.league} id={13}></GetRanking>
              <GetRanking league={props.league} id={14}></GetRanking>
              <GetRanking league={props.league} id={15}></GetRanking>
              <GetRanking league={props.league} id={16}></GetRanking>
              <GetRanking league={props.league} id={17}></GetRanking>
              <GetRanking league={props.league} id={18}></GetRanking>
              <GetRanking league={props.league} id={19}></GetRanking>
      </>
  );
}
if(props.league === "tur.1"){
  return (
    <> 
              <GetRanking league={props.league} id={0}></GetRanking>
              <GetRanking league={props.league} id={1}></GetRanking>
              <GetRanking league={props.league} id={2}></GetRanking>
              <GetRanking league={props.league} id={3}></GetRanking>
              <GetRanking league={props.league} id={4}></GetRanking>
              <GetRanking league={props.league} id={5}></GetRanking>
              <GetRanking league={props.league} id={6}></GetRanking>
              <GetRanking league={props.league} id={7}></GetRanking>
              <GetRanking league={props.league} id={8}></GetRanking>
              <GetRanking league={props.league} id={9}></GetRanking>
              <GetRanking league={props.league} id={10}></GetRanking>
              <GetRanking league={props.league} id={11}></GetRanking>
              <GetRanking league={props.league} id={12}></GetRanking>
              <GetRanking league={props.league} id={13}></GetRanking>
              <GetRanking league={props.league} id={14}></GetRanking>
              <GetRanking league={props.league} id={15}></GetRanking>
              <GetRanking league={props.league} id={16}></GetRanking>
              <GetRanking league={props.league} id={17}></GetRanking>
              <GetRanking league={props.league} id={18}></GetRanking>
              <GetRanking league={props.league} id={19}></GetRanking>
              <GetRanking league={props.league} id={20}></GetRanking>
      </>
  );
}

}