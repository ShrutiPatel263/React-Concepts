import FoodItem from "./FoodItem";

function FoodOptions({ items }) {

  return (
    <ul className="list-group">
      {items.map((item) => (
        <FoodItem key={item} Item={item}
         HandleBuyButton={()=>console.log("Clicked")}  //We can also pass behaviour
        />
      ))}
    </ul>
  );
}

export default FoodOptions;



