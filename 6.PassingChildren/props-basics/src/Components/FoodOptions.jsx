import FoodItem from "./FoodItem";

function FoodOptions({ items }) {

  return (
    <ul className="list-group">
      {items.map((item) => (
        <FoodItem key={item} Item={item} />
      ))}
    </ul>
  );
}

export default FoodOptions;



