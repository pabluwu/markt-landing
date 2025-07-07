import { Mail, FileText } from 'lucide-react';

const ContactForm = () => (
  <section className="py-5">
    <div className="container text-center">
      <h2 className="fw-bold mb-2">¿Interesado en Markt?</h2>
      <p className="text-muted mb-5">Déjanos tus datos y te contactaremos para mostrarte cómo Markt puede transformar tu empresa</p>
      <div className="mx-auto p-4 border rounded-3 shadow-sm" style={{ maxWidth: '600px' }}>
        <form>
          <div className="mb-4 text-start">
            <label className="form-label fw-semibold d-flex align-items-center">
              <Mail size={18} className="me-2 text-muted" /> Email empresarial
            </label>
            <input
              type="email"
              className="form-control"
              placeholder="tu.email@empresa.com"
            />
          </div>
          <div className="mb-4 text-start">
            <label className="form-label fw-semibold d-flex align-items-center">
              <FileText size={18} className="me-2 text-muted" /> Cuéntanos sobre tu empresa y necesidades
            </label>
            <textarea
              className="form-control"
              rows="4"
              placeholder="Describe tu industria, tamaño de empresa y principales desafíos..."
            ></textarea>
          </div>
          <button type="submit" className="btn w-100 fw-semibold text-white" style={{ backgroundColor: '#0f172a' }}>
            Enviar consulta
          </button>
        </form>
      </div>
    </div>
  </section>
);

export default ContactForm;
