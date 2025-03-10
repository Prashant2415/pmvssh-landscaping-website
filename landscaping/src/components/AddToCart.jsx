import React from 'react'
import { LSCardHeading, LSHeading, LSPara } from '../commonComponents/Common'
import { useDispatch, useSelector } from 'react-redux'
import "./component.css"
import { decrement, increment, remove } from '../redux/addtocardSlice'
import { PrimaryButton } from '../commonComponents/ButtonComponent'
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
  let totalValue = selector?.reduce((total, item) => total + item.plantPrice * item.quantity, 0);
  console.log(totalValue)
  return (
    // <div className='add-to-cart-container'>
    //   <div className="my-cart-container">
    //   <LSHeading className='title'>My Cart</LSHeading>
    //   {selector.map((d)=>(
    //     <div className="my-cart">
    //         <img className='mycart-image' src={`./src/images/${d.plantImage}.jpg`} alt={d.plantName} />
    //         <LSPara className='mycart-para'>{d.plantName}</LSPara>
    //         <div className="quantity-container">
    //           <button className='quantity-button' onClick={()=> dispatch(decrement(d.id))}>-</button>
    //           <span className='quantity-value'>{d.quantity}</span>
    //           <button className='quantity-button' onClick={() => dispatch(increment(d.id))}>+</button>
    //         </div>
    //         <LSPara className='quantity-price'>${d.plantPrice * d.quantity}</LSPara>
    //         <button className='remove-button' onClick={()=> dispatch(remove(d.id))}>Remove</button>
    //     </div>
    //   ))}
    //   {selector.length === 0 && (
    //     <div className="description">
    //       <LSPara>No items added</LSPara>
    //     </div>
    //   )}
    //   </div>
    //   <div className="order-summary-container">
    //   <LSHeading>Order Summary</LSHeading>
    //   <div className="order-summary">
    //     <LSPara>Subtotal</LSPara>
    //     <LSPara>{selector.length === 0 ? 0 : totalValue}</LSPara>
    //   </div>
    //   <div className="total-smmary">
    //   <LSPara>Total</LSPara>
    //   <LSPara>{selector.length === 0 ? 0 : totalValue}</LSPara>
    //   </div>
    //   </div>
    // </div>
    <div className="add-to-cart-container">
      <LSHeading>Shopping Cart</LSHeading>
      <div className="cart-container">
        <div className="shopping-cart-container">
          {selector.map((d) => (
            <div className="my-cart">
              <img className='mycart-image' src={`./src/images/${d.plantImage}.jpg`} alt={d.plantName} />
              <LSPara className='mycart-para'>{d.plantName}</LSPara>
              <div className="quantity-container">
                <button className='quantity-button' onClick={() => dispatch(decrement(d.id))}>-</button>
                <span className='quantity-value'>{d.quantity}</span>
                <button className='quantity-button' onClick={() => dispatch(increment(d.id))}>+</button>
              </div>
              <LSPara className='quantity-price'>${d.plantPrice * d.quantity}</LSPara>
              <PrimaryButton onClick={() => dispatch(remove(d.id))}>Remove</PrimaryButton>
            </div>
          ))}
          {selector.length === 0 && (
            <div className="description">
              <LSPara>No items added</LSPara>
            </div>
          )}
        </div>
        <div className="order-summary-container">
          <LSCardHeading>Order Summary</LSCardHeading>
          <div className="order-summary">
            <div className="order-summary-content">
              <div className="order-content">
                <p className='p-tag'>Subtotal</p>
                <LSPara className='p-tag'>${selector.length === 0 ? 0 : totalValue}</LSPara>
              </div>
              <div className="order-content">
                <p className='p-tag'>Delivery fee</p>
                <LSPara className='p-tag'>${selector.length == 0 ? 0 : 5}</LSPara>
              </div>
            </div>
            <div className="total-summary-content">
              <div className="total-smmary">
                <LSPara>Total</LSPara>
                <LSPara className='total-value'>${selector.length === 0 ? 0 : totalValue + 5}</LSPara>
              </div>
              <LSPara className='p-tag'>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#77B254" class="bi bi-shield-check" viewBox="0 0 16 16">
                <path d="M5.338 1.59a61 61 0 0 0-2.837.856.48.48 0 0 0-.328.39c-.554 4.157.726 7.19 2.253 9.188a10.7 10.7 0 0 0 2.287 2.233c.346.244.652.42.893.533q.18.085.293.118a1 1 0 0 0 .101.025 1 1 0 0 0 .1-.025q.114-.034.294-.118c.24-.113.547-.29.893-.533a10.7 10.7 0 0 0 2.287-2.233c1.527-1.997 2.807-5.031 2.253-9.188a.48.48 0 0 0-.328-.39c-.651-.213-1.75-.56-2.837-.855C9.552 1.29 8.531 1.067 8 1.067c-.53 0-1.552.223-2.662.524zM5.072.56C6.157.265 7.31 0 8 0s1.843.265 2.928.56c1.11.3 2.229.655 2.887.87a1.54 1.54 0 0 1 1.044 1.262c.596 4.477-.787 7.795-2.465 9.99a11.8 11.8 0 0 1-2.517 2.453 7 7 0 0 1-1.048.625c-.28.132-.581.24-.829.24s-.548-.108-.829-.24a7 7 0 0 1-1.048-.625 11.8 11.8 0 0 1-2.517-2.453C1.928 10.487.545 7.169 1.141 2.692A1.54 1.54 0 0 1 2.185 1.43 63 63 0 0 1 5.072.56"/>
                <path d="M10.854 5.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7.5 7.793l2.646-2.647a.5.5 0 0 1 .708 0"/>
              </svg>&nbsp;
                90 Day Limited Warranty against manufacturing defect</LSPara>
            </div>
            <PrimaryButton className='checkout-button'>Checkout</PrimaryButton>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AddToCart
