function Feedback() {
  const feedback = [
    {
      name: 'Aisha K.',
      role: 'Working Professional',
      quote: 'RoohFlare helped me redesign my wardrobe without losing my personal style. The process felt effortless and premium.',
    },
    {
      name: 'Nadia M.',
      role: 'Bride-to-Be',
      quote: 'The designer recommendations were spot-on. I finally found a look that feels elegant, modern, and completely me.',
    },
    {
      name: 'Sara T.',
      role: 'Fashion Enthusiast',
      quote: 'The AI assistant and human designer pairing gave me ideas I never would have explored on my own.',
    },
  ];

  return (
    <div className="section">
      <div className="section-header">
        <h2>What clients say</h2>
      </div>

      <div className="grid">
        {feedback.map((item) => (
          <article key={item.name} className="card">
            <h3>{item.name}</h3>
            <p style={{ fontWeight: 600, marginBottom: '12px', color: '#8f5e3d' }}>{item.role}</p>
            <p>“{item.quote}”</p>
          </article>
        ))}
      </div>
    </div>
  );
}

export default Feedback;
