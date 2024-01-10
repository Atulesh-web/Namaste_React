import RestaurantCard, { withPromotedLabel } from "./RestaurantCard";
import resNamesObj from "../utils/mockData";
import { IMAGE_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer.jsx";
import useOnlineStatus from "../utils/useOnlineStatus.js";
const Body = () => {
  const [originalArray, setOriginalArray] = useState([]);
  const [resNamesObjData, setResNamesObjData] = useState(null);
  const [searchText, setSearchText] = useState("");
  const RestauantCardPromoted = withPromotedLabel(RestaurantCard);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.4986092&lng=77.3999054&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    ///"https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.4986092&lng=77.3999054&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    const json = await data.json();

    setOriginalArray(
      json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setResNamesObjData(
      json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  const status = useOnlineStatus();
  if (!status) {
    return (
      <h1>Looks life you're offline! Please check your internet connection</h1>
    );
  }
  return resNamesObjData == null ? (
    <Shimmer />
  ) : (
    <div className="body">
      {/* <div className="filter">
        <div className="search-btn">
          <input
            type="text"
            value={searchText}
            onChange={(e) => {
              setResNamesObjData(originalArray);
              setSearchText(e.target.value);
            }}
          />
          <button
            onClick={() => {
              const filteredData = resNamesObjData.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
              );
              setResNamesObjData(filteredData);
            }}
          >
            Search
          </button>
        </div>
        <button
          className="filter-btn"
          onClick={() => {
            const filteredData = resNamesObjData.filter(
              (data) => data.info.avgRating > 4.5
            );
            setResNamesObjData(filteredData);
          }}
        >
          Top Rated Restaurants
        </button>
      </div> */}
      <div className="restaurant-container">
        {resNamesObjData.map((data) => (
         
          <Link to={`restaurants/${data.info.id}`} key={data.info.id}>
            {data.info.avgRating<4 ? (
              <RestauantCardPromoted
                img={data.info.cloudinaryImageId}
                name={data.info.name}
                rating={data.info.avgRating}
                timeString={data.info.sla.slaString}
              />
            ) : (
              <RestaurantCard
                img={data.info.cloudinaryImageId}
                name={data.info.name}
                rating={data.info.avgRating}
                timeString={data.info.sla.slaString}
              />
            )}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
