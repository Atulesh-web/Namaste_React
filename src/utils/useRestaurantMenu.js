import { useEffect, useState } from "react"
const useRestaurantMenu = (resId)=>{
    const [resInfo,setResInfo] = useState(null);
    useEffect(()=>{
        fetchData();
    },[])

    const fetchData = async () => {
        const data = await fetch(
          `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.4986092&lng=77.3999054&restaurantId=${resId}`
        );
        const json = await data.json();
        setResInfo(json?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.itemCards ||json?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards || json?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[3]?.card?.card?.itemCards)
        //setRestauName(json?.data?.cards[0]?.card?.card?.info?.name)
      };
    return resInfo;
}

export default useRestaurantMenu;