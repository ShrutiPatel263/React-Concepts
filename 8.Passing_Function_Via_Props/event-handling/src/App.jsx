import './App.css'
import Title from './Components/Title'
import FoodOptions from './Components/FoodOptions'
import ErrorMessage from './Components/ErrorMessage'
import Container from './Components/Container'
import CustomFood from './Components/CustomFood'
import 'bootstrap/dist/css/bootstrap.min.css'


function App() {

const FoodItems = ["Sandwich", "Puff", "Pizza", "Dosa", "Idli"];
    const handleOnChange=(event)=>{
        console.log(event.target.value)
    };

  return (
    <>
    <Container>
     <Title />  
     <Container><CustomFood handleOnChange={handleOnChange}></CustomFood></Container>
     <FoodOptions items={FoodItems} /> 
     <ErrorMessage items={FoodItems}/> 
    </Container>

    <Container><p>Food is available till 5.00 pm</p></Container>
    </>
  );
}

export default App

