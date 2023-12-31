import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const [name,setRestauName] = useState("");
  const [cardData, setCardData] = useState(null);
  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const data = await fetch(
      `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.4986092&lng=77.3999054&restaurantId=${resId}`
    );
    const json = await data.json();
    console.log(json, "json");
    setRestauName(json?.data?.cards[0]?.card?.card?.info?.name)
    setCardData( json?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.itemCards ||json?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards || json?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[3]?.card?.card?.itemCards );
  };
 

  return cardData == null ? (
    <Shimmer />
  ) : (
    <div className="menu">
      <h1>{name}</h1>
      <h2>Menu</h2>
      <button className="veg" onClick={()=>{
        const vegItems = cardData.filter((items)=> items.card.info.isVeg)
        setCardData(vegItems)
      }}>Veg</button>
      {cardData.map((cardData) => (
        <ul key={cardData.card.info.id}>
          <li>{cardData.card.info.name}</li>
        </ul>
      ))}
    </div>
  );
};

export default RestaurantMenu;
