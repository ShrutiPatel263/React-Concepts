
//But here we don't mention item..item should be taken from FoodOptions.jsx file

//Now to catch passes item use props keyword

//3 WAYS TO USE PROPS

//1.
// function FoodItem(props) {
//   return <li className="list-group-item">{props.Item}</li>;
// }


//2.
// function FoodItem(props){
//   let { Item }=props;  //It is called destructuring
//   return <li className="list-group-item">{Item}</li>
// }
// export default FoodItem;

//3.
// function FoodItem({ Item }){
//    return <li className="list-group-item">{Item}</li>      
// }

// export default FoodItem;

//Now add some css module 

import styles from "./FoodItem.module.css"

function FoodItem({ Item }){
   
   const HandleOrderButton = (event)=>{
     <div className={`card ${styles['card-edit']}`}>
    <div className="card-body">
    <h5 className="card-title">Ordered Successfully</h5>
    <h6 className="card-subtitle mb-2 text-body-secondary">`Food Item : ${Item}`</h6>
    <p className="card-text">Pay At Counter</p>
  </div>
</div>
    
   }

   return <li className={`${styles['new-color']} list-group-item`}>
      <span className={styles['spanID']}>{Item}</span>
      <button className={`btn btn-info ${styles['button']}`}
        onClick={(event)=>HandleOrderButton(event)}
      >
      Order
      </button>
      </li>      
}

export default FoodItem; 