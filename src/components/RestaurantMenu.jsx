import { useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import Learn from "./Learn";
const RestaurantMenu = () => {
  const { resId } = useParams();
  const [temp, setTemp] = useState(0);

  const cardData = useRestaurantMenu(resId);

  return cardData == null ? (
    <Shimmer />
  ) : (
    <div className="menu">
      <h2>Menu</h2>
      <button className="veg">Veg</button>
      {cardData.map((cardData, index) => (
        <div key={cardData.card.info.id}>
          <ul>
            <li>{cardData.card.info.name}</li>
          </ul>
          <Learn
                setTemp={() => {
                  console.log(index, "index");
                  return setTemp(index);
                }}
              />
        </div>
      ))}
    </div>
  );
};

export default RestaurantMenu;
