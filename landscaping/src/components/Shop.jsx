import React, { useState } from 'react'
import "./component.css"
import { Data } from './Data';
import { Card } from '../commonComponents/Card';
import { useDispatch, useSelector } from 'react-redux';
import { addtocart } from '../redux/addtocardSlice';
import ToastComponent from '../commonComponents/ToastComponent';
const Shop = () => {
  const dataValue = Data;
  const dispatch = useDispatch();
  const selector = useSelector(state => state.addtocartSlice);

  const [sort, setSort] = useState("asc")
  const [search, setSearch] = useState("")
  const [flag, setFlag] = useState(false)
  const [toast, setToast] = useState(false);
  const handleSort = (event) => {
    const order = event.target.value;
    setSort(order);
  }

  const handleSearch =(event)=>{
    setFlag(true);
    setSearch(event.target.value);
  }
  const filterData = dataValue.sort((a, b) => {
    return sort === "asc" ? a.plantName.localeCompare(b.plantName) : b.plantName.localeCompare(a.plantName)
  })
  
  const searchData = dataValue.filter( d => d.plantName.toLowerCase().includes(search.toLowerCase()))
  
  const handleOnCardClick =(data)=>{
    console.log(data);
    setToast(true)
    dispatch(addtocart(data));
  }
  console.log(selector)

  const handleToastTimeout =(timeoutValue)=>{
    setToast(timeoutValue)
  }
  return (
    <div className='shop-container'>
      {toast && (
        <ToastComponent toastMsg="Product is added to the cart" delay={2000} onTimeOut={handleToastTimeout}/>
      )}
      <div className="search-filter-container">
        <div className="search-container">
          <input className='search-text' type="text" placeholder='Search......' value={search} onChange={handleSearch}/>
          {/* <button className='search-button'>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
              <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
            </svg>
          </button> */}
        </div>
        <div className="filter-container">
          <form>
            <select className='select' onChange={handleSort} value={sort}>
              <option value="asc">Sort by A-Z</option>
              <option value="desc">Sort by Z-A</option>
            </select>
          </form>
        </div>
      </div>
      <div className="product-container">
        {flag ? (
          <div className="card-container">
          {searchData.map((d) => {
            return (
              <Card d={d}
              onCardClick={handleOnCardClick}
              />
            )
          })}
        </div>
        ) : (
          <div className="card-container">
          {filterData.map((d) => {
            return (
              <Card d={d}
              onCardClick={handleOnCardClick}
              />
            )
          })}
        </div>
        )}
      </div>
    </div>
  )
}

export default Shop
