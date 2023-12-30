import RestaurantCard from "./RestaurantCard";
import resNamesObj from "../utils/mockData";
import { IMAGE_URL } from "../utils/constants";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer.jsx";
const Body = () => {
  const [originalArray,setOriginalArray] = useState([]);
  const [resNamesObjData, setResNamesObjData] = useState([]);
  const [searchText, setSearchText] = useState("");
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING"
    );
    ///"https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.4986092&lng=77.3999054&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    const json = await data.json();
    console.log(json)
    setOriginalArray(json.data.cards[0].card.card.imageGridCards.info);
    setResNamesObjData(json.data.cards[0].card.card.imageGridCards.info);
  };

  return resNamesObjData.length == 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter">
        <div className="search-btn">
          <input type="text" value={searchText} onChange={(e)=>{
             setResNamesObjData(originalArray)
            setSearchText(e.target.value)}} />
          <button onClick={()=>{ 
            console.log(originalArray,"OA")
           
            const filteredData =  resNamesObjData.filter((res)=> res.action.text.toLowerCase().includes(searchText.toLowerCase()));
            setResNamesObjData(filteredData)
          }}>Search</button>
        </div>
        <button
          className="filter-btn"
          onClick={() => {
            const filteredData = resNamesObjData.filter(
              (data) => data.rating < 4
            );

            console.log(filteredData);
            setResNamesObjData(filteredData);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="restaurant-container">
        {resNamesObjData.map((data) => (
          <RestaurantCard key={data.id} img={data.imageId} name={data.action.text} />
        ))}
      </div>
    </div>
  );
};

export default Body;
