import { useState } from "react";
import FoodItem from "./FoodItem";

function FoodOptions({ items }) {

let[textShow,setMessage]=useState();

  const handleOnClick=(item)=>{
      setMessage
      (
      <div className="card">
      <div className="card-body">
    <h5 className="card-title">Order {item} Successfully</h5>
    <h6 className="card-subtitle mb-2 text-body-secondary">Thank You</h6>
    <p className="card-text">Pay At Main Counter</p>
  </div>
  </div>
)
}
  return (
    <>
    <ul className="list-group">
      {items.map((item) => (
        <FoodItem key={item} Item={item}
         HandleBuyButton={()=>handleOnClick(item)}  //We can also pass behaviour
        />
      ))}
    </ul>
    {textShow && <div>{textShow}</div>}
    </>
  );
}

export default FoodOptions;



