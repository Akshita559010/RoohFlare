import OrderCard from '../components/OrderCard';

function DesignerDashboard() {
  return (
    <div className="dashboard-panel">
      <h2>Designer dashboard</h2>
      <div className="grid" style={{ marginTop: 20 }}>
        <OrderCard title="Open requests" details="5 redesign requests waiting" />
        <OrderCard title="Earnings" details="$2,450 this month" />
        <OrderCard title="Client chats" details="7 active conversations" />
      </div>
    </div>
  );
}

export default DesignerDashboard;
