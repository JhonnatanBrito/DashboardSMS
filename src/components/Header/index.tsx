import logo from '../../assets/img/logo.svg';
import './styles.css';
function Header() {
    return (
        <header>

            <div className="dsmeta-logo-container">

                <img src={logo} alt="SmsSender" />
                <h1>Sistema de Envio de SMS </h1>
                <p>Desenvolvido por 
                    <a href="https://www.instagram.com/jhonnatan_brito_ti/">Jhonnatan Brito</a>
                </p>
            </div>
        </header>
    )
}

export default Header;
