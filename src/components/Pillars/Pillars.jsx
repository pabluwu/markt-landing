// src/components/PillarsSection.jsx
import { MessageSquare, Network, BarChart2, CheckCircle } from 'lucide-react';

const PillarsSection = () => (
  <section className="py-5 bg-light">
    <div className="container">
      <h2 className="text-center fw-bold mb-3">Tres pilares fundamentales</h2>
      <p className="text-center text-muted mb-5">
        Markt combina inteligencia artificial, marketplace B2B y análisis competitivo en una sola plataforma
      </p>
      <div className="row g-4">
        <div className="col-md-4">
          <div className="card h-100 p-4 border-0 shadow-sm">
            <div className="mb-3">
              <div className="bg-light rounded p-2 d-inline-block">
                <MessageSquare size={24} />
              </div>
            </div>
            <h5 className="fw-bold">Buscador Inteligente RAG</h5>
            <p className="text-muted">Chatbot basado en IA que responde preguntas complejas sobre documentos técnicos</p>
            <div className="bg-light rounded p-2 fst-italic text-muted mb-3">
              “¿El motor XYZ soporta más de 300 grados Celsius?”
            </div>
            <ul className="list-unstyled">
              <li className="mb-1"><CheckCircle size={16} className="me-2 text-success" />Respuestas inmediatas</li>
              <li className="mb-1"><CheckCircle size={16} className="me-2 text-success" />Entrena con tus documentos</li>
              <li className="mb-1"><CheckCircle size={16} className="me-2 text-success" />Para vendedores y soporte</li>
            </ul>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card h-100 p-4 border-0 shadow-sm">
            <div className="mb-3">
              <div className="bg-light rounded p-2 d-inline-block">
                <Network size={24} />
              </div>
            </div>
            <h5 className="fw-bold">Marketplace B2B</h5>
            <p className="text-muted">LinkedIn industrial para conectar empresas y generar oportunidades</p>
            <ul className="list-unstyled">
              <li className="mb-1"><CheckCircle size={16} className="me-2 text-success" />Mostrar proyectos realizados</li>
              <li className="mb-1"><CheckCircle size={16} className="me-2 text-success" />Publicar necesidades</li>
              <li className="mb-1"><CheckCircle size={16} className="me-2 text-success" />Procesos de licitación</li>
              <li className="mb-1"><CheckCircle size={16} className="me-2 text-success" />Visibilidad confiable</li>
            </ul>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card h-100 p-4 border-0 shadow-sm">
            <div className="mb-3">
              <div className="bg-light rounded p-2 d-inline-block">
                <BarChart2 size={24} />
              </div>
            </div>
            <h5 className="fw-bold">Inteligencia de Negocios</h5>
            <p className="text-muted">Analiza la competencia y identifica tendencias del mercado</p>
            <ul className="list-unstyled">
              <li className="mb-1"><CheckCircle size={16} className="me-2 text-success" />Análisis de competencia</li>
              <li className="mb-1"><CheckCircle size={16} className="me-2 text-success" />Líneas de negocio crecientes</li>
              <li className="mb-1"><CheckCircle size={16} className="me-2 text-success" />Tendencias del sector</li>
              <li className="mb-1"><CheckCircle size={16} className="me-2 text-success" />Análisis de noticias</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default PillarsSection;
