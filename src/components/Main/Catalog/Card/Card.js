import Counter from "./../../../UI/Counter/Counter";
import './Card.css';

function Card({ product }) {
  return (
    <div className="card">
      <div className="card-image-wrapper">
        <img className="card-image__img" src={product.src} alt="" />
      </div>
      <div className="card__title">{product.title}</div>
      <div className="card-controls">
        <h3 className="card-price">{product.price} Br</h3>
        <Counter min={1} max={product.count} />
        <button className="card__button"></button>
      </div>
    </div>
  );
}

export default Card;
