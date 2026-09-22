import DesignPreview from '../components/DesignPreview';

function Design() {
  return (
    <div className="dashboard-panel">
      <h2>Design collection</h2>
      <div className="grid" style={{ marginTop: 20 }}>
        <DesignPreview title="Signature blazer" subtitle="Structured tailoring" />
        <DesignPreview title="Weekend edit" subtitle="Relaxed, luxe essentials" />
        <DesignPreview title="Occasion-ready" subtitle="Event styling collection" />
      </div>
    </div>
  );
}

export default Design;
