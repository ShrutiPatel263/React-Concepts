
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'

// function App() {
  

//   return 
//   <div> ------------------------------------>Need a extra div to wrap components
//     <h1>Healthy Foods</h1>
//     <ul class="list-group">
//     <li class="list-group-item">An item</li>
//     <li class="list-group-item">A second item</li> 
//     <li class="list-group-item">A third item</li>
//     <li class="list-group-item">A fourth item</li>
//     <li class="list-group-item">And a fifth one</li>
//    </ul>
//   </div>
// }
//return always return one thing so we have to use div 

//means here we actually return two components 1>h1 2>ul but since we can't return two element we have to use one empty div ...to solve this we use fragment {Frangement simply wrap our components without using any extra div} For this import react

//Code using react fragment

// function App() {
  
//   return( 
//     <React.Fragment> ------------------>have to import React from 'react'
//       <h1>Healthy Foods</h1>
//       <ul class="list-group">
//       <li class="list-group-item">An item</li>
//       <li class="list-group-item">A second item</li>
//       <li class="list-group-item">A third item</li>
//       <li class="list-group-item">A fourth item</li>
//       <li class="list-group-item">And a fifth one</li>
//      </ul>
//    </React.Fragment>
//   );
 
// }

//We can use <> </> instead of <React.Fragment> </React.Fragment>

function App() {

  let foodItems=["Curd","Buttermilk","Vegetable","Fruits"];
  
  return( 
    <>
      <h1>Healthy Foods</h1>

      {/* map example */}
      
      <ul className="list-group">
        {foodItems.map((item) => (
          <li key={item} className="list-group-item">{item}</li>
        ))}
     </ul>
   </>
  );
 
}

export default App
