import React, { createContext, useState, useEffect } from 'react';
import Api from './api/Api';

const CartContext = createContext();
export default CartContext;

export function CartProvider(props) {
  const [items, setItems] = useState([])

  useEffect(() => {
    Api('cart', setItems)
  }, [setItems]);



  function updateCart(id, quantity, product) {
    fetch(`http://127.0.0.1:8000/api/api/cart/${id}`, {
      'method': 'PUT',
      headers: { 'Content-Type': 'application/json' },

      body: JSON.stringify({ product: product, quantity: quantity })

    }).then(resp => resp.json())
      .then(resp => {
        setItems(prevItems => {
          const updatedItems = prevItems.map(item => {
            if (item.id === resp.id) {
              return resp; }
            return item;
          });
          return updatedItems;
        }
      )
    
    })
      .catch(err => { console.log(err) })
  }

  function deleteItem(id) {

    fetch(`http://127.0.0.1:8000/api/cart/${id}`, {
      'method': 'DELETE',
      headers: { 'Content-Type': 'application/json' }
    }).then((resp) => {
      setItems(items.filter((item) => item.id != id))
    }).catch(err => { console.log(err) })
  }

  function addToCart(size, color, inputQuantity, productId) {

    var mysentdata = {
      product: productId,
      size: size.size, color: color.color,
      items: 1, quantity: inputQuantity
    }

    fetch(`http://127.0.0.1:8000/api/cart/`, {
      'method': 'POST',
      headers: { 'Content-Type': 'application/json' },

      body: JSON.stringify(mysentdata)
    }).then(resp => resp.json())
      .then(resp => setItems([...items, resp]))
      .catch(err => { console.log(err) })
  }

  return (
    <CartContext.Provider value={{ addToCart, items, deleteItem, updateCart }}> {props.children} </CartContext.Provider>
  );
}


