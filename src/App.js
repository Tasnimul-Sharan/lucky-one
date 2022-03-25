import './App.css';
import { useEffect, useState } from 'react';

function App() {
  return (
    <div className="App">
     <Header></Header>
     <Shop></Shop>
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

useEffect(() => {
  fetch("data.json")
  .then(res => res.json())
  .then(data => setDevice(data))
}, [])
  return (
   <div className='shop-contaiiner'>
      <div className='device-container'>
        {
          devices.map(device => <Device key={device.id} device={device} ></Device>)
        }
      </div>
      <div className='cart-container'>
        <Cart></Cart>
      </div>
   </div>
  )
}

const handleDevice = (device) => {
   console.log(device)
   
}

const Device = ({device}) => {
  const {id, price, picture, name} = device ;
  return (
    <div className='device'>
      <img src={picture} alt="" />
      <div>
        <p>id : {id}</p>
        <p>name : {name}</p>
        <p>price : $ {price}</p>
      </div>
      <button onClick={()=>handleDevice(device)} className='btn-device'>Add To Cart</button>
    </div>
  )
}

const Cart = () => {
  return (
    <div>
      <h1>Order Devices</h1>
      <h5>device name :</h5>
    </div>
  )
}

export default App;
