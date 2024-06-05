import ShoppingCart from "../materials/shopping-cart.png";

const Header = () => {
    return (
        <div className="header">
          <img src={ShoppingCart} alt="logo" />
          <h1>Shopping List</h1>
        </div>
      );
}

export default Header