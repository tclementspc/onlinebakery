//when add to cart button clicked, I want to return a small card with image and name of selected product in cart

//export default function Product(props) {
const { image, name, cost, onAdd, onRemove } = props;

//NEW adding up items using qty which stands for quantity

return (
  <div className="cardBlock">
    <img className="small" src={image} alt={name} />
    <h3>{name}</h3>
    <div>${cost}</div>
    <div>
      {qty === 0 ? (
        <button className="cardButton" onClick={() => onAdd(item)}>
          Add To Cart
        </button>
      ) : (
        <div>
          <button onClick={() => onRemove(item)} className="remove">
            -
          </button>
          <span className="p-1">{item.qty}</span>
          <button onClick={() => onAdd(item)} className="add">
            +
          </button>
        </div>
      )}
    </div>
  </div>
);
