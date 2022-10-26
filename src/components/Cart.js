//selected items go this cart list of products to add and delete amounts
import ROLLS from "../app/shared/ROLLS";
import Product from "./Product";

const Cart = (props) => {
  const { cartItems, products, onAdd, onRemove } = props;
  const { ROLLS } = products;
  //only selected Rolls from Rolls array should go into the cart -**NEED HELP**

  //may have to change
  return (
    <div className="block col-2">
      <h3>SHOPPING CART</h3>
      <div className="row">
        {products.map((product) => {
          <Product
            key={product.id}
            product={product}
            onAdd={onAdd}
            onRemove={onRemove}
            item={cartItems.find((x) => x.id === product.id)}
          ></Product>;
        })}
      </div>
    </div>
  );
};
export default Cart;
