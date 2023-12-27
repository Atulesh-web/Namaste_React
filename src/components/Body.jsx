import RestaurantCard from "./RestaurantCard";
import resNamesObj from "../utils/mockData";
import { IMAGE_URL } from "../utils/constants";
import { useState } from "react";
const Body = () => {
    const [resNamesObjData,setResNamesObjData] = useState(resNamesObj.names)
    return (
      <div className="body">
        <div className="filter">
            <button className="filter-btn"
            onClick={()=>{
                const filteredData = resNamesObjData.filter((data)=> data.rating<4
                )
                setResNamesObjData(filteredData)
            }}
            >
                Top Rated Restaurants
            </button>
        </div>
        <div className="restaurant-container">
          {resNamesObjData.map((data)=>
            (
             <RestaurantCard key={data.id}
             resName={data.RestauName}
             rating={data.rating}
             img={IMAGE_URL}
           />
            )
          )
        }
         
        </div>
      </div>
    );
  };

export default Body;