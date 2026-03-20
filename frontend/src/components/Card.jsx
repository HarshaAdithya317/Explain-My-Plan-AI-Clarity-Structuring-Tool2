function Card({ title, content }) {
  return (
    <div style={{
      border: "1px solid #ccc",
      padding: "10px",
      marginTop: "10px",
      borderRadius: "8px"
    }}>
      <h3>{title}</h3>
      <p>{content}</p>
    </div>
  );
}

export default Card;