import { useEffect, useState } from 'react'
import './Cart.css'
import { IoCartOutline } from 'react-icons/io5';
import { Link } from 'react-router-dom';



export default function Cart() {
const [product, setProduct] = useState(JSON.parse(localStorage.getItem('cart')))
 let [cart, setCart] = useState(
  product.reduce((arr, el) => 
    ((arr.find(({name}) => el.name == name) || arr.push(el)), arr), []) || []
  );

  useEffect(() => {
    const newProduct = JSON.parse(localStorage.getItem("cart"))
    localStorage.setItem("cart", JSON.stringify(newProduct));
  }, []);
  

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(product));
    console.log(product)
  }, [cart]);
  

  const removeCart = () => {
  localStorage.setItem("cart", JSON.stringify([]))
  setCart([])
  setProduct([])

}
    
function addProduct (item) {
  const arr = JSON.parse(localStorage.getItem("cart"))
  const newArr = [...arr, item];
  localStorage.setItem("cart", JSON.stringify(newArr));
  setProduct(newArr)
}

function deleteProduct (newItem) {
  const arr = JSON.parse(localStorage.getItem("cart"))
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].name === newItem.name) {
      arr.splice(i, 1);
      break;
    }
  }
  
 localStorage.setItem("cart", JSON.stringify(arr));
 setProduct(arr)
}

  function calcSubCount(name) {
    let result = product.filter(elem => elem.name == name)
    return result.length
  }

  function calcSubPrice(name, price) {
    return Number(calcSubCount(name)) * Number(price.replace(/[^\d]/g, ' ').slice(-5))
  }

  function calcSubTotalPrice() {
    let totalPrice = 0
    product.forEach((item) => {
      totalPrice += Number(item.price.replace(/[^\d]/g, ' ').slice(-5))
    })
    return totalPrice
  }


  function calcObs() {
    let totalPrice = 0
    product.forEach((item) => {
      totalPrice += Number(item.price.replace(/[^\d]/g, ' ').slice(-5))
    })

    return (totalPrice * 15) / 100 
  }

 
    return (
        <div>
          <Link to="/pitstop">
            <div className='cartIcon' style={{position: 'sticky',
                   top: '10px', marginLeft: '1%',}} >
                <div style={{
                  width: '70px',
                  color: 'white',
                  borderRadius: 10,
                  background: '#fea116',
                  display: 'flex',
                  justifyContent: 'space-evenly',
                  paddingTop: '10px',
                  paddingBottom: '10px',
                  marginTop: '-25px'
                  }}>
                  
                      <div style={{color: 'white'}}>
                        <h3 style={{color: 'white'}}>Меню</h3>
                      </div>
                  </div>
                  </div>
                  </Link>
        <div className="shopping-cart">

      <div className="title">
        Корзина
        <button onClick={() => removeCart()}>Очистить</button>

      </div>
     
     {cart ? cart.map((item, key) => (
      
      <div className="item" key={key}>

        <div className="description">
          <span>{item.name}</span>
        </div>
 
        <div className="quantity">
          <button className="plus-btn" type="button" name="button" onClick={() => addProduct(item)}>
            +
          </button>
          <input type="text" name="name" value={calcSubCount(item.name)} />
          <button className="minus-btn" type="button" name="button" onClick={() => deleteProduct(item)}>
            -
          </button>
        </div>
 
        <div className="total-price"><a>{calcSubPrice(item.name, item.price)+'c'}</a></div>
      </div>
      )): <h1>Корзина пуст</h1>}
 
        </div>
          <div className='sum'>            
            <h4>Обслуживание 15%:  {calcObs() + 'c'}</h4>
            <h1>Сумма: {calcSubTotalPrice() + calcObs() +'c'}</h1>
          </div>
        </div>
    );
}