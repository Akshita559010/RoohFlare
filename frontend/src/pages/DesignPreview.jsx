import DesignPreviewCard from '../components/DesignPreview';

function DesignPreviewPage() {
  return (
    <div className="dashboard-panel">
      <h2>Preview your redesign</h2>
      <div style={{ marginTop: 20 }}>
        <DesignPreviewCard title="Final look preview" subtitle="Your redesigned outfit concept" />
      </div>
    </div>
  );
}

export default DesignPreviewPage;
