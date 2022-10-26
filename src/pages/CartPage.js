import { Container } from "reactstrap";
import Cart from "../components/Cart";
import Basket from "../components/Basket";
import { useState } from "react";
import { useEffect, useDeferredValue, useTransition } from "react";

const CartPage = () => {
  const [cartItems, setCartItems] = useState([]);
  const { products } = ROLLS;
  // have to define selected rolls???
  const onAdd = (product) => {
    const exist = cartItems.find((x) => x.id === product.id);
    //looking for if the product is in the cart
    if (exist) {
      const newCartItems = cartItems.map(
        (x) => (x.id === product.id ? { ...exist, qty: exist.qty + 1 } : x)
        //if product is in the cart, increase the quantity by 1 and keep other properties
      );
      setCartItems(newCartItems);
      localStorage.setItem("cartItems", JSON.stringify(newCartItems));
    } else {
      const newCartItems = [...cartItems, { ...item, qty: 1 }];
      setCartItems(newCartItems);
      localStorage.setItem("cartItems", JSON.stringify(newCartItems));
    }
  };

  const onRemove = (product) => {
    const exist = cartItems.find((x) => x.id === product.id);
    if (exist.qty === 1) {
      const newCartItems = cartItems.filter((x) => x.id !== product.id);
      setCartItems(newCartItems);
      localStorage.setItem("cartItems", JSON.stringify(newCartItems));
    } else {
      const newCartItems = cartItems.map((x) =>
        x.id === product.id ? { ...exist, qty: exist.qty - 1 } : x
      );
      setCartItems(newCartItems);
      localStorage.setItem("cartItems", JSON.stringify(newCartItems));
    }
  };
  const [isPending, startTransition] = useTransition();

  useEffect(() => {
    startTransition(() => {
      setCartItems(
        localStorage.getItem("cartItems")
          ? JSON.parse(localStorage.getItem("cartItems"))
          : []
      );
    });
  }, []);
  //useEffect keeps item on the page when you refresh page
  const cartItemsCount = useDeferredValue(cartItems.length);

  return isPending ? (
    <div>Loading...</div>
  ) : (
    <Container>
      <Header countCartItems={cartItemsCount} />
      <div className="appreciation">THANK YOU FOR SHOPPING!</div>
      <div className="delivery">Delicious rolls are on the way!</div>
      <Cart
        products={products}
        cartItems={cartItems}
        onAdd={onAdd}
        onRemove={onRemove}
      />
      <Basket cartItems={cartItems} onAdd={onAdd} onRemove={onRemove} />
    </Container>
  );
};

export default CartPage;
