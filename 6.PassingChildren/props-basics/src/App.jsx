import './App.css'
import Title from './Components/Title'
import FoodOptions from './Components/FoodOptions'
import ErrorMessage from './Components/ErrorMessage'
import Container from './Components/Container'
import 'bootstrap/dist/css/bootstrap.min.css'


function App() {

const FoodItems = ["Sandwich", "Puff", "Pizza", "Dosa", "Idli"];


  return (
    <>
    <Container>
     <Title />
     <FoodOptions items={FoodItems} /> 
     <ErrorMessage items={FoodItems}/> 
    </Container>

    <Container><p>First Take towken by giving order & Then collect from main counter</p></Container>
    </>
  );
}

export default App

