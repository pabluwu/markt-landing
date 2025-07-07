import { useLocation } from "react-router-dom"; // Importa useLocation
import logo_markt from "../../assets/Markt.png";

const Navbar = () => {
    const location = useLocation(); // Obtiene la ruta actual (ej: "/home")

    // Función para verificar si el enlace es la ruta actual
    const isActive = (path) => {
        return location.pathname === path;
    };

    return (
        <nav className="navbar bg-white border-bottom navbar-dark navbar-expand-lg navbar-light bg-navbar fixed-top">
            <div className="container">
                <a className="navbar-brand text-dark" href="/">
                    <img src={logo_markt} width="100" alt="" />
                </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        
                    </ul>
                    <span className="bg-dark text-white rounded p-2 rounded pointer">
                        Contactar
                    </span>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;