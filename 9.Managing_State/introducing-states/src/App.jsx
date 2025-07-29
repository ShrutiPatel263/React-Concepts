//Basically hooks are used to change the UI of the page .useState is one type of hook Which use to change state of elements

//Suppose here simply we have two buttons increase & decrease now we want to change value of count based on button clicked

import { useState } from 'react'
import './App.css'

function App() {
   
   //Now basically we want to change the value of counter element right..so in useState we use counter variable & one method which defines what kind of change you need when button pressed
   
   let[counter,setCounter]=useState(15);//By default value of counter is 15

   let addValue=()=>{
      setCounter(counter+1);
      if(counter>=20){
         setCounter(0);
      }
   }

   let removeValue=()=>{
      setCounter(counter-1);
      if(counter<=0){
         setCounter(0);
      }
   }
  return (
    <>
     <h1>Count : {counter}</h1>
     <button onClick={addValue}>Increase Count</button>
     <br></br>
     <br></br>
     <button onClick={removeValue}>Decrease Count</button>
    </>
  )
}

export default App

//Now with the help of this code we can change value of counter 
//Now additionally we want to limit the value of counter like 0 to 20 so now we can do this....

