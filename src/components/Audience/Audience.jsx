// src/components/AudienceSection.jsx
import { Building2, Users2, TrendingUp, Search } from 'lucide-react';

const AudienceSection = () => (
    <section className="py-5">
        <div className="container text-center">
            <h2 className="fw-bold mb-2">¿Para quién es Markt?</h2>
            <p className="text-muted mb-5">Diseñado específicamente para profesionales y empresas industriales</p>
            <div className="row g-4">
                <div className="col-md-3">
                    <div className="border p-4 rounded h-100">
                        <div className="mb-3">
                            <Building2 size={32} />
                        </div>
                        <h5 className="fw-bold">Empresas Industriales</h5>
                        <p className="text-muted small">Manufactura y tecnología</p>
                    </div>
                </div>
                <div className="col-md-3">
                    <div className="border p-4 rounded h-100">
                        <div className="mb-3">
                            <Users2 size={32} />
                        </div>
                        <h5 className="fw-bold">Equipos de Ventas</h5>
                        <p className="text-muted small">Y soporte técnico</p>
                    </div>
                </div>
                <div className="col-md-3">
                    <div className="border p-4 rounded h-100">
                        <div className="mb-3">
                            <TrendingUp size={32} />
                        </div>
                        <h5 className="fw-bold">Áreas Estratégicas</h5>
                        <p className="text-muted small">Compras, innovación, desarrollo</p>
                    </div>
                </div>
                <div className="col-md-3">
                    <div className="border p-4 rounded h-100">
                        <div className="mb-3">
                            <Search size={32} />
                        </div>
                        <h5 className="fw-bold">Consultores</h5>
                        <p className="text-muted small">Distribuidores y representantes</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
);

export default AudienceSection;
