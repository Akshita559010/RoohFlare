function ServiceCard({ title, description, action }) {
  return (
    <article className="card">
      <h3>{title}</h3>
      <p>{description}</p>
      <button className="card-btn" type="button">{action}</button>
    </article>
  );
}

export default ServiceCard;
