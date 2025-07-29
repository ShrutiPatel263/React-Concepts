import './App.css'
import Title from './Components/Title'
import FoodOptions from './Components/FoodOptions'
import ErrorMessage from './Components/ErrorMessage'
import Container from './Components/Container'
import CustomFood from './Components/CustomFood'
import 'bootstrap/dist/css/bootstrap.min.css'
import { useState } from 'react'


function App() {

//const FoodItems = ["Sandwich", "Puff", "Pizza", "Dosa", "Idli"];

//useState()-->Bydefault undefined text //useState("Kuchh bhi")//Want to show bydefault 
// let textStateArr= useState("Food Item entered by User");//Whenever it declares it returns an array which contain  elements-->1st Current value of state 2nd One methon which can edit
// let textToShow=textStateArr[0];//1st element
// let setTextstate=textStateArr[1];//2nd element

//Short Method to define
//let [textToShow,setTextstate]=useState();  

let [FoodItems,setFoodItems]=useState([
  "Salad",
  "Green Vegetable",
  "Roti",
]);
    const OnKeyDown=(event)=>{
       console.log(event);
     if(event.key==="Enter"){
      let newFoodItem=event.target.value;
      event.target.value="";
      let newItems=[...FoodItems,newFoodItem]//..foodItems means add all previous foodItems to this new array
      setFoodItems(newItems);
     }
    };

  return (
    <>
    <Container>
     <Title />  
     <Container><CustomFood handleOnKeyDown={OnKeyDown}></CustomFood>
     </Container> 
     <FoodOptions items={FoodItems} /> 
     <ErrorMessage items={FoodItems}/> 
    </Container>

    <Container><p>Food is available till 5.00 pm</p></Container>
    </>
  );
}

export default App

