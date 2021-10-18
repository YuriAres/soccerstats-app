import './css/home.css'
import GetLeague from '../Axios (API)/GetLeague'


export default props => {
 
    return (
        <>
        
            <div className="MainArea">
                <div className="Title1">CAMPEONATOS 2021</div>
                <div className="Card">
                        <div className="Title">
                                AMÉRICA DO SUL
                        </div>
                        <div className="Content">
                               <GetLeague></GetLeague>
                        </div>
                </div>
                <div className="Card">
                        <div className="Title">
                                EUROPA
                        </div>
                        <div className="Content">
                                A
                        </div>
                </div>
                <div className="Card">
                        <div className="Title">
                                ÁSIA
                        </div>
                        <div className="Content">
                                A
                        </div>
                </div>
                <div className="Card">
                        <div className="Title">
                                ÁFRICA
                        </div>
                        <div className="Content">
                                A
                        </div>
                </div>
            </div>
        </>
    );
}