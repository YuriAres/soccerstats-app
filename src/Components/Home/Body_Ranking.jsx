import './css/home.css'
import Ranking from '../Axios (API)/Rank' 

export default props => {

    return (<> 
        <div className="MainArea">
        
        <div className="Title1">TABELA BRASILEIRÃO</div>
            <Ranking league="eng.1"></Ranking>
        </div>
        
        </>);
    

}