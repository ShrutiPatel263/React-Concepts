
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

function FoodItem({ Item,HandleBuyButton }){


   return <li className={`${styles['new-color']} list-group-item`}>
      <span className={styles['spanID']}>{Item}</span>
      <button className={`btn btn-info ${styles['button']}`}
        onClick={HandleBuyButton}
      >
      Order
      </button>
      </li>      
}

export default FoodItem; 