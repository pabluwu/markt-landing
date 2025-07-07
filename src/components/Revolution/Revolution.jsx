// src/components/RevolutionSection.jsx
import { ArrowRight } from "lucide-react";
const RevolutionSection = () => (
    <section className="py-5 text-white text-center" style={{ backgroundColor: '#0f172a' }}>
        <div className="container my-5">
            <h2 className="fw-bold mb-3">Únete a la revolución industrial</h2>
            <p className="mb-4 mx-auto" style={{ maxWidth: '700px' }}>
                Sé parte de los primeros en acceder a Markt y transforma la manera en que tu empresa accede a información técnica y conecta con el ecosistema industrial.
            </p>
            <button className="btn btn-light px-4 py-2 fw-bold">
                Solicitar acceso temprano <ArrowRight size={20} />
            </button>
        </div>
    </section>
);

export default RevolutionSection;
