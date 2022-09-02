import Header from "./components/Header";
import Main from "./components/Main";
import Basket from "./components/Basket";
import data from "./data";
import { useState } from "react";
import Api from "./components/Api";
import Forms from "./components/Formik";

function App(props) {
  console.log(props);
  const { products } = data;
  const [cartItems, setCartItems] = useState([]);
  const onAdd = (product) => {
    const exist = cartItems.find((dvd) => dvd.id === product.id);
    if (exist) {
      setCartItems(
        cartItems.map((dvd) =>
          dvd.id === product.id ? { ...exist, qty: exist.qty + 1 } : dvd
        )
      );
    } else {
      setCartItems([...cartItems, { ...product, qty: 1 }]);
    }
  };
  const onRemove = (product) => {
    const exist = cartItems.find((dvd) => dvd.id === product.id);
    if (exist.qty === 1) {
      setCartItems(cartItems.filter((dvd) => dvd.id !== product.id));
    } else {
      setCartItems(
        cartItems.map((dvd) =>
          dvd.id === product.id ? { ...exist, qty: exist.qty - 1 } : dvd
        )
      );
    }
  };
  return (
    <div className="App">
      <Header countCartItems={cartItems.length}></Header>
      <div className="row">
        <Main onAdd={onAdd} products={products}></Main>
        <Basket
          onAdd={onAdd}
          onRemove={onRemove}
          cartItems={cartItems}
        ></Basket>
        <div></div>
      </div>
      <Api />
      <div>
        <Forms />
      </div>
    </div>
  );
}

export default App;
