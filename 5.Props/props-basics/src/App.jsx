import './App.css'
import Title from './Components/Title'
import FoodOptions from './Components/FoodOptions'
import ErrorMessage from './Components/ErrorMessage'
import 'bootstrap/dist/css/bootstrap.min.css'


function App() {

const FoodItems = ["Sandwich", "Puff", "Pizza", "Dosa", "Idli"];


  return (
    <>
     <Title />
     <FoodOptions items={FoodItems} /> 
     <ErrorMessage items={FoodItems}/> 
    </>
  );
}

export default App

