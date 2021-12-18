import { useState } from 'react';
import Wrapper from "./components/UI/Wrapper/Wrapper";
import Header from "./components/Layout/Header";
import Meals from './components/Meals/Meals';
import Cart from "./components/Cart/Cart";
import CartProvider from './components/store/CartProvider';

function App() {

  const [cartIsShown, setCartIsShown] = useState(false);

  const showCartHandler = () => {
    setCartIsShown(true);
  };

  const hideCartHandler = () => {
    setCartIsShown(false);
  };

  return (
    <Wrapper>
      <CartProvider>
        {cartIsShown && <Cart onClose={hideCartHandler}/>}
            <Header onShowCart={showCartHandler} />
            <main>
              <Meals />
            </main>
      </CartProvider>
    </Wrapper>
  );
}

export default App;
