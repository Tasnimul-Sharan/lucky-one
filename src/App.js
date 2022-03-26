import './App.css';
import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart} from '@fortawesome/free-solid-svg-icons'

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
  return(
    <div>
      <h1>Electronics Devices</h1>
    </div>
  )
}

const Shop = () => {
const [devices, setDevice] = useState([])
const [cart, setCart] = useState([])

useEffect(() => {
  fetch("data.json")
  .then(res => res.json())
  .then(data => setDevice(data))
}, [])

const handleDevice = (device) => {
  console.log(device)
  let newCart = [...cart, device]
 setCart(newCart)
}

  return (
   <div className='shop-contaiiner'>
      <div className='device-container'>
        {
          devices.map(device => <Device key={device.id} device={device} handleDevice={handleDevice} ></Device>)
        }
      </div>
      <div className='cart-container'>
        <Cart cart={cart}></Cart>
      </div>
   </div>
  )
}


const Device = ({device, handleDevice}) => {

  const {id, price, picture, name} = device ;
  return (
    <div className='device'>
      <img src={picture} alt="" />
      <div>
        <p>id : {id}</p>
        <p>name : {name}</p>
        <p>price : $ {price}</p>
      </div>
      <button onClick={()=>handleDevice(device)} className='btn-device'>
        <p>Add To Cart <FontAwesomeIcon icon={faShoppingCart} ></FontAwesomeIcon></p>
      </button>
    </div>
  )
}

const Cart = ({cart }) => {
  console.log(cart)

  const [empty, setEmpty] = useState([])
const [product, setProduct] = useState([])


const handleEmpty = () => {
  let newEmpty = []
  console.log(empty)
  newEmpty = [...empty, cart];
  setEmpty(newEmpty);
  }

  const handleCart = (random) => {
    console.log(random)
    let newProd = [...product, random ]
    setProduct(newProd) ;
  
  }

  return (
    <div>
      <h1>Order Devices</h1>
      {
        cart.map(crt => <h3 key={crt.name}>{crt.name}</h3>)
      }
      <button onClick={()=>handleCart()} className="btn-cart">Choose one device</button> <br/>
      <button onClick={() =>handleEmpty()} className="btn-empty">Choose again</button>
    </div>
  )
}

const Footer = () => {
  return (
    <div>
      <h2>How React works</h2>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi facilis inventore saepe eos fuga corrupti, eius, sapiente laboriosam dolorem maiores nostrum. Ipsam magnam, suscipit nihil culpa officiis ea error! Aliquam.</p>
    </div>
  )
}

export default App;
