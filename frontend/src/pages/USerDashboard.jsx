import OrderCard from '../components/OrderCard';

function UserDashboard() {
  return (
    <div className="dashboard-panel">
      <h2>Your dashboard</h2>
      <div className="grid" style={{ marginTop: 20 }}>
        <OrderCard title="Pending request" details="Redesign brief in review" />
        <OrderCard title="Saved designs" details="3 upcoming style concepts" />
        <OrderCard title="Messages" details="1 reply from your designer" />
      </div>
    </div>
  );
}

export default UserDashboard;
