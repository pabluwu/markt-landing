import { ArrowRight } from "lucide-react";
const HeroSection = () => (
    <section className="text-center py-5 mt-5 container">
        <div className="w-50 mx-auto">
            <span style={{ background: '#f1f5f9' }} className="badge p-2 text-dark mb-3">
                Nueva Plataforma Industrial
            </span>
            <h1 className="display-4 fw-bold">
                Información <span className="text-primary">técnica y comercial</span> al alcance de tu industria
            </h1>
            <p className="text-secondary fs-5">
                Markt facilita el acceso a información técnica confiable y conecta empresas industriales con IA y marketplace B2B especializado.
            </p>
            <div className="d-flex justify-content-center gap-3 mt-4">
                <a href="https://app.markt.cl/" target="_blank" className="btn btn-dark text-white fw-bold">
                    Comenzar ahora
                    <ArrowRight className="ps-2"/>
                </a>
                <button className="btn btn-outline-secondary fw-bold text-dark">Ver demo</button>
            </div>
        </div>
    </section>
);

export default HeroSection;