import React from 'react'
import { LSHeading, LSPara } from '../commonComponents/Common'
import { useDispatch, useSelector } from 'react-redux'
import "./component.css"
import { decrement, increment, remove } from '../redux/addtocardSlice'
const AddToCart = () => {
    const dispatch = useDispatch();
    const selector = useSelector(state => state.addtocartSlice.data);
    console.log(selector);
    const data = [
        {
            "id": 1,
            "plantName": "A",
            "plantImage": "imageOne",
            "plantPrice": "20$"
        },
        {
            "id": 2,
            "plantName": "B",
            "plantImage": "imageOne",
            "plantPrice": "20$"
        }
    ]
    const totalValue = selector?.reduce((total, item )=> total + item.plantPrice * item.quantity,0);
    console.log(totalValue)
  return (
    <div className='add-to-cart-container'>
      <div className="my-cart-container">
      <LSHeading className='title'>My Cart</LSHeading>
      {selector.map((d)=>(
        <div className="my-cart">
            <img className='mycart-image' src={`./src/images/${d.plantImage}.jpg`} alt={d.plantName} />
            <LSPara className='mycart-para'>{d.plantName}</LSPara>
            <div className="quantity-container">
              <button className='quantity-button' onClick={()=> dispatch(decrement(d.id))}>-</button>
              <span className='quantity-value'>{d.quantity}</span>
              <button className='quantity-button' onClick={() => dispatch(increment(d.id))}>+</button>
            </div>
            <LSPara className='quantity-price'>${d.plantPrice * d.quantity}</LSPara>
            <button className='remove-button' onClick={()=> dispatch(remove(d.id))}>Remove</button>
        </div>
      ))}
      {selector.length === 0 && (
        <div className="description">
          <LSPara>No items added</LSPara>
        </div>
      )}
      </div>
      <div className="order-summary-container">
      <LSHeading>Order Summary</LSHeading>
      <div className="order-summary">
        <LSPara>Subtotal</LSPara>
        <LSPara>{selector.length === 0 ? 0 : totalValue}</LSPara>
      </div>
      <div className="total-smmary">
      <LSPara>Total</LSPara>
      <LSPara>{selector.length === 0 ? 0 : totalValue}</LSPara>
      </div>
      </div>
    </div>
  )
}

export default AddToCart
