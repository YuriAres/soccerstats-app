import './css/home.css'
import Logo from '../../Images/Home/logo.png'
import { Link } from 'react-router-dom';

export default props => {
    return (
        <>
            <header> 
                <div className="AreaMenu">
                    <div className="Left">
                        <img src={Logo} className="ImageLogo"/>
                        <span className="Title">Soccer<strong>STATS</strong></span>
                    </div>
                    <div className="Right">
                        <span className="MenuOptions"><Link to="/">HOME</Link></span>
                        <span className="MenuOptions"><Link to="/Classificacao">ESTATISTICAS</Link></span>
                        <span className="MenuOptions"><Link to="/QuemSomos">QUEM SOMOS</Link></span>
                    </div>
                </div>
            </header>
        </>
    );
}