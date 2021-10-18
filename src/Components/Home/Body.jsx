import './css/home.css'
import GetLeague from '../Axios (API)/GetLeague'


export default props => {

    return (
        <>
        
            <div className="MainArea">
                <div className="Title1">CAMPEONATOS 2021</div>
                <div className="Card">
                        <div className="Title">
                                AMÉRICAS
                        </div>
                        <div className="Content">
                                <GetLeague id="0"/>
                                <GetLeague id="2"/>
                                <GetLeague id="12"/>
                        </div>
                </div>
                <div className="Card">
                        <div className="Title">
                                EUROPA
                        </div>
                        <div className="Content">
                                <GetLeague id="4"/>
                                <GetLeague id="5"/>
                                <GetLeague id="6"/>
                                <GetLeague id="7"/>
                                <GetLeague id="9"/>
                                <GetLeague id="13"/>
                                <GetLeague id="14"/>
                                <GetLeague id="16"/>
                        </div>
                </div>
                <div className="Card">
                        <div className="Title">
                                ÁSIA
                        </div>
                        <div className="Content">
                                <GetLeague id="3"/>
                                <GetLeague id="8"/>
                                <GetLeague id="10"/>
                                <GetLeague id="11"/>
                                <GetLeague id="15"/>
                                <GetLeague id="17"/>
                                <GetLeague id="18"/>
                        </div>
                </div>
                <div className="Card">
                        <div className="Title">
                                ÁFRICA E OCEÂNIA
                        </div>
                        <div className="Content">
                                <GetLeague id="1"/>
                                <GetLeague id="19"/>
                        </div>
                </div>
            </div>
        </>
    );
}