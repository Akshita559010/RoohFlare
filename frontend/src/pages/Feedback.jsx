import FeedbackComponent from '../components/Feedback';

function FeedbackPage() {
  return (
    <div className="dashboard-panel">
      <h2>Feedback</h2>
      <div style={{ marginTop: 20 }}>
        <FeedbackComponent />
      </div>
    </div>
  );
}

export default FeedbackPage;
