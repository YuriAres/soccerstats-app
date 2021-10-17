import './css/home.css'
import Logo from '../../Images/Home/logo.png'
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
                        <span className="MenuOptions"><a href="">HOME</a></span>
                        <span className="MenuOptions"><a href="">ESTATISTICAS</a></span>
                        <span className="MenuOptions"><a href="">QUEM SOMOS</a></span>
                    </div>
                </div>
            </header>
            <div className="MainArea"></div>
        </>
    );
}