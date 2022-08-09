import '../styles/globals.css'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { useState } from 'react'
import { useEffect } from 'react'

function MyApp({ Component, pageProps }) {
  const [cart, setCart] = useState({})
  const [subtotal, setSubTotal] = useState(0)

  useEffect(() => {
    console.log('hey i am a salman')

    try {
      if (localStorage.getItem("cart")) {
        setCart(json.parse(localStorage.getItem("cart")))
        saveCart(json.parse(localStorage.getItem("cart")))
      }
      else {
      }
    } catch (error) {
      console.error(error);
      localStorage.clear()
    }


  }, [])

  const saveCart = (myCart) => {
    localStorage.setItem("cart", JSON.stringify(myCart))
    let subt = 0;
    let keys = Object.keys(myCart);
    for (let i = 0; i < keys.length; i++) {
      subt += myCart[keys[i]]["price"] * myCart[keys[i]].qty;
    }
    setSubTotal(subt)
  }



  const addToCart = (itemcode, qty, price, name, size, variant) => {
    let newCart = cart;
    if (itemcode in cart) {
      newCart[itemcode].qty = cart[itemcode].qty + qty
    }
    else {
      newCart[itemcode] = { qty: 1, price, name, size, variant }
    }
    setCart(newCart)
    saveCart(newCart)
  }


  const clearCart = () => {

    setCart({})
    saveCart({})
  }



  const removeToCart = (itemcode, qty, price, name, size, variant) => {
    let newCart = JSON.parse(JSON.stringify(cart));
    if (itemcode in cart) {
      newCart[itemcode].qty = cart[itemcode].qty - qty
    }
    console.log(newCart[itemcode])
    if (newCart[itemcode]["qty"] <= 0) {
      delete newCart[itemcode]
    }
    setCart(newCart)
    saveCart(newCart)
  }
  return <>
    <Navbar key={subtotal} cart={cart} addToCart={addToCart} clearCart={clearCart} removeToCart={removeToCart} subtotal={subtotal} />
    <Component cart={cart} addToCart={addToCart} clearCart={clearCart} removeToCart={removeToCart} subtotal={subtotal} {...pageProps} />
    <Footer />
  </>
}

export default MyApp
