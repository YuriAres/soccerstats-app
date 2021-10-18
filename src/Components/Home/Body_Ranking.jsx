import './css/home.css'
import Ranking from '../Axios (API)/Rank'
import { useParams } from 'react-router';

export default props => {
    const {ID,ABR} = useParams()

    return (<> 
        <div className="MainArea">
        
        <div className="Title1">{ID}</div>
            <div className="Table">
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
                        <Ranking league={ABR}></Ranking>
                    </tbody>
                </table>
            </div>
        </div>
        
        </>);
    

}