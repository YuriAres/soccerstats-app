import './css/API.css'
import GetRanking from './GetRanking'

export default props => {
 
  return (
    <>
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

            </tbody>
      </table>
    </>
  )

}