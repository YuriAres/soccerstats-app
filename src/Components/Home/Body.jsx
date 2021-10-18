import './css/home.css'
import { Switch, Route} from 'react-router-dom';

import Home from './Home'
import Ranking from './Body_Ranking'
import About from './Body_About'

export default props => {

    return (
        <>
            <Switch>
                <Route exact path="/" component={Home}></Route>
                <Route path="/Classificacao/:ID/:ABR" component={Ranking}></Route>
                <Route path="/QuemSomos" component={About}></Route>
            </Switch>
        </>
    );
}