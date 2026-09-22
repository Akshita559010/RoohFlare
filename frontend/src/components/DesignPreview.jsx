function DesignPreview({ title = 'Design Preview', subtitle = 'Your look concept' }) {
  return (
    <div className="card">
      <h3>{title}</h3>
      <p>{subtitle}</p>
      <div style={{ marginTop: 18, minHeight: 180, borderRadius: 18, background: 'linear-gradient(135deg,#f0d5b3,#f9f1e7)', border: '1px solid rgba(0,0,0,0.05)' }} />
    </div>
  );
}

export default DesignPreview;
