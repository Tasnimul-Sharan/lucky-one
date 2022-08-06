import "./App.css";
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Shop></Shop>
      <Footer></Footer>
    </div>
  );
}

const Header = () => {
  return (
    <div>
      <h1>Electronics Devices</h1>
    </div>
  );
};

const Shop = () => {
  const [devices, setDevice] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => setDevice(data));
  }, []);

  const handleDevice = (device) => {
    console.log(device);
    let newCart = [...cart, device];
    setCart(newCart);
  };

  const handleEmpty = () => {
    setCart([]);
  };

  const handleRandom = () => {
    // const nameDevice = Math.floor(Math.random() * 1000);
    // const nameString = nameDevice + cart.name;
    // if (nameString.length === 4) {
    //   return nameDevice;
    // }
    // setCart([...product]);
    setCart([cart[parseInt(Math.random() * cart.length)]]);
  };

  return (
    <div className="shop-contaiiner">
      <div className="device-container">
        {devices.map((device) => (
          <Device
            key={device.id}
            device={device}
            handleDevice={handleDevice}
          ></Device>
        ))}
      </div>
      <div className="cart-container">
        <Cart
          handleEmpty={handleEmpty}
          handleRandom={handleRandom}
          cart={cart}
        ></Cart>
      </div>
    </div>
  );
};

const Device = ({ device, handleDevice }) => {
  const { id, price, picture, name } = device;
  return (
    <div className="device">
      <img src={picture} alt="" />
      <div>
        <p>id : {id}</p>
        <p>name : {name}</p>
        <p>price : $ {price}</p>
      </div>
      <button onClick={() => handleDevice(device)} className="btn-device">
        <p>
          Add To Cart <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
        </p>
      </button>
    </div>
  );
};

const Cart = ({ cart, handleRandom, handleEmpty }) => {
  console.log(cart);

  // const [product, setProduct] = useState([]);

  // const [empty, setEmpty] = useState([]);

  return (
    <div>
      <h2>Selected Devices</h2>
      {cart.map((crt) => (
        <h4 key={crt.name}>{crt.name}</h4>
      ))}
      <button onClick={handleRandom} className="btn-cart">
        Choose one device
      </button>
      <br />
      <button onClick={handleEmpty} className="btn-empty">
        Choose again
      </button>
    </div>
  );
};

const Footer = () => {
  return (
    <div>
      <h2>How React works</h2>
      <p>
        A JavaScript Library building user interfaces. React use jsx(javaScript
        XML) , with the help of jsx we can write html code in javaScript
        expression are used by brackets this.A react Application is made of
        multiple components, each responsible for rendering a small, reusable
        piece of HTML.React implements a virtual dom that is basically a DOM
        tree representation in javaScript. So when it needs to read or write to
        the DOM, it will use the virtual representation of it. Then the virtual
        DOM will try to find the most efficient way to update the DOM.
      </p>

      <h2>Props vs State difference</h2>
      <p>
        Props are read-only and state is both read and write.Props cannot be
        modified and state can be modified using this setState. Where you change
        the state it is called stateful component and props are called to be
        presentation component.Props are immutable but the states are
        mutable.Props are used to pass data from one component to another and
        the state is passed within the component only.{" "}
      </p>
    </div>
  );
};

export default App;
