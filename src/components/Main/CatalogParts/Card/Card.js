import Counter from "./../../../UI/Counter/Counter";

function Card({ product }) {
  return (
    <div className="list-card">
      <div className="list-card-image">
        <img className="list-card-image__img" src={product.src} alt="" />
      </div>
      <div className="list-card-description">{product.title}</div>
      <div className="list-card-bottom">
        <h3 className="list-card-bottom-price">{product.price} ₽</h3>
        <Counter count={product.count} />
        <button className="list-card__button"></button>
      </div>
    </div>
  );
}

export default Card;
