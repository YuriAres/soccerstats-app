import './App.css';
import Header from './Components/Home/Header'
import Body from './Components/Home/Body'
import {BrowserRouter as Router} from 'react-router-dom'

function App() {
  return (
    <>  
      <Router>
        <Header/>
        <Body/>
      </Router>
    </>
  );
}

export default App;
