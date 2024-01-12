import { useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import Learn from "./Learn";
import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";
const RestaurantMenu = () => {
  const { resId } = useParams();
  const [temp, setTemp] = useState(0);

 const dispatch = useDispatch();
  const cardData = useRestaurantMenu(resId);

  const handleAddItem = (item)=>{
      dispatch(addItem(item))
  }

  return cardData == null ? (
    <Shimmer />
  ) : (
    <div className="menu">
      <h2>Menu</h2>
      <button className="veg">Veg</button>
      {cardData.map((cardData, index) => (
        <div key={cardData.card.info.id}>
          <ul className=" flex justify-between">
            <li>{cardData.card.info.name}</li>
            <button onClick={() => handleAddItem(cardData
              )} className=" mr-14">Add+</button>
          </ul>
          {/* <Learn
                setTemp={() => {
                  console.log(index, "index");
                  return setTemp(index);
                }}
              /> */}
        </div>
      ))}
    </div>
  );
};

export default RestaurantMenu;
