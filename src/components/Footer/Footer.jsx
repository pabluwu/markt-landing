import logo_markt from "../../assets/Markt.png";
import logo_corfo from "../../assets/logo_corfo.png";

const Footer = () => (
    <footer className="bg-light text-center py-4 border-top">
        <div className="container">
            <div className="row">
                <div className="col-md-6">
                    <div className="d-flex justify-content-center h-100 align-items-center">
                        <img
                            className="d-block text-center mx-auto mb-4"
                            src={logo_markt}
                            alt=""
                            style={{ width: '150px' }} />

                    </div>
                </div>
                <div className="col-md-6">
                    <div className="d-flex justify-content-center h-100 align-items-center">
                        <img
                            className="d-block text-center mx-auto mb-4"
                            src={logo_corfo}
                            alt=""
                            style={{ width: '150px' }} />

                    </div>
                </div>
            </div>
            <small className="text-muted py-5">© 2024 Markt. Transformando el acceso a información industrial.</small>
        </div>
    </footer>
);

export default Footer;