import React, { Fragment, useState } from "react";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import Cart from "./components/Cart/Cart";
function App() {
  const [cartIsShown, setCartIsShown] = useState(false);

  const showCarthandler = () => {
    setCartIsShown(true);
  };
const hideCartHandler=()=> {
  setCartIsShown(false);
}
  return (
    <Fragment>
     {cartIsShown && <Cart onClose={hideCartHandler}/>} 
      <Header onShowCart={showCarthandler}/>
      <main>
        <Meals></Meals>
      </main>
    </Fragment>
  );
}

export default App;
