import './css/home.css'
import Ranking from '../Axios (API)/Rank' 

export default props => {

    return (<> 
        <div className="MainArea">
        
        <div className="Title1">TABELA BRASILEIRÃO</div>
        <table>
          <thead>
              <tr> 
                <th>Pos.</th>
                <th>Time</th>
                <th>Pontos</th>
                <th>Jogos</th>
                <th>Vit.</th>
                <th>Emp.</th>
                <th>Der.</th>
                <th>GP</th>
                <th>GC</th>
                <th>SG</th>
              </tr> 
          </thead>
          <tbody>
              <Ranking league="por.1"></Ranking>
          </tbody>
        </table>
        </div>
        
        </>);
    

}