import DesignPreview from '../components/DesignPreview';

function Redesign() {
  return (
    <div className="form-shell">
      <h2>Request a redesign</h2>
      <form className="form-grid">
        <label>
          Style goal
          <input type="text" placeholder="Minimal, luxe, office-ready..." />
        </label>
        <label>
          Budget
          <input type="text" placeholder="$200 - $800" />
        </label>
        <label>
          Notes
          <textarea rows="5" placeholder="Tell us about your fit preferences, favorite colors, and inspiration." />
        </label>
        <button className="primary-btn" type="submit">Submit request</button>
      </form>

      <div style={{ marginTop: 28 }}>
        <DesignPreview title="Concept preview" subtitle="Initial AI-generated outfit direction" />
      </div>
    </div>
  );
}

export default Redesign;
