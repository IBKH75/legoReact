import "./card.css";

function Card({ name, tag, price, imageSrc, available }) {
  return (
    <div className="product-card">
      <img className="images" src={imageSrc} alt={name} />
      <h2>{name}</h2>
      <p className="tag">{tag}</p>
      <p>Prix : {price} €</p>
      <p>{available ? "Disponible" : "En rupture"}</p>
      <button>Ajouter</button>
    </div>
  );
}
export default Card;