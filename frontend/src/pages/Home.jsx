import { Link } from 'react-router-dom';
import Feedback from '../components/Feedback';
import ServiceCard from '../components/ServiceCard';

const services = [
  {
    title: 'Personal Style Redesign',
    description: 'Transform your wardrobe with new silhouettes, colors, and fit guidance tailored to your lifestyle.',
    action: 'Book a redesign',
  },
  {
    title: 'Designer Pairing',
    description: 'Match with vetted professionals who understand your goals and comfort level.',
    action: 'Choose a designer',
  },
  {
    title: 'AI Styling Assistant',
    description: 'Get smart recommendations and outfit concepts based on occasion, budget, and taste.',
    action: 'Try the assistant',
  },
];

function Home() {
  return (
    <>
      <section className="hero">
        <div>
          <p style={{ textTransform: 'uppercase', letterSpacing: '0.12em', fontWeight: 700, color: '#8f5e3d' }}>RoohFlare</p>
          <h1>Turn your wardrobe into a signature look.</h1>
          <p>
            We blend expert styling, AI guidance, and boutique designer curation so you can feel confident in every outfit.
          </p>
          <div className="cta-row">
            <Link className="primary-btn" to="/redesign">Start redesign</Link>
            <Link className="secondary-btn" to="/design">Explore designs</Link>
          </div>
        </div>

        <div className="hero-visual" aria-label="Fashion inspiration collage" />
      </section>

      <section className="section">
        <div className="section-header">
          <h2>How it works</h2>
        </div>

        <div className="grid">
          {services.map((service) => (
            <ServiceCard key={service.title} {...service} />
          ))}
        </div>
      </section>

      <Feedback />
    </>
  );
}

export default Home;
