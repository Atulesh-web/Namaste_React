const RestaurantCard = (props) => {
    const {img,name,rating,timeString} = props;
    
   
      return (
      <div className="restaurant-card"
        style={{
          backgroundColor: "lightgray",
        }}
      >
        <img className="pizza-logo" src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${img}`} />
        <h3>{name}</h3>
        <h4>Fresh, Cheeze Burst</h4>
        <h4>{rating}</h4>
        <h4>{timeString}</h4>
      </div>
      );
      
   };

 export  const withPromotedLabel = (RestaurantCard)=>{
    return (props) =>{
      return (
        <div>
        <label>Promoted</label>
        <RestaurantCard {...props}/>
        </div>
      )
    }
   }
   export default RestaurantCard;