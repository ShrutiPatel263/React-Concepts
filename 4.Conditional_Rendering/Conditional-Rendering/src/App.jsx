import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'

//3 types

//1.if else statement -->(But we have to right it before return bcz return only accept the jsx code)
function App() {

   let age=18;
   if(age===18){
    return<h3>You are 18</h3>
   }
  
   return 
    <>
{/*2. Ternary Operator */}
     {age===18 ? <h3>You are 18</h3> : null}

{/*3.Conditional Operator */}

    {age===18 && <h3>You are 18</h3>} 
    </>


}

export default App
