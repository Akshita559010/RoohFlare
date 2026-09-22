function Chat() {
  const messages = [
    { sender: 'Designer', text: 'I love your preference for clean tailoring and warm neutrals.' },
    { sender: 'You', text: 'Perfect — can we make it more evening-appropriate?' },
    { sender: 'Designer', text: 'Absolutely. I can swap in a satin finish and a sharper shoulder line.' },
  ];

  return (
    <div className="dashboard-panel">
      <h2>Design chat</h2>
      <div style={{ marginTop: 20, display: 'grid', gap: 12 }}>
        {messages.map((message) => (
          <div key={message.sender + message.text} className="card" style={{ background: message.sender === 'You' ? '#f9efe8' : '#fff' }}>
            <strong>{message.sender}</strong>
            <p>{message.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Chat;
