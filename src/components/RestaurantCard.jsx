const RestaurantCard = (props) => {
    const {img,name} = props;
    
   
      return (
      <div className="restaurant-card"
        style={{
          backgroundColor: "lightgray",
        }}
      >
        <img className="pizza-logo" src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${img}`} />
        <h3>{name}</h3>
        <h4>Fresh, Cheeze Burst</h4>
        <h4>Equal</h4>
        <h4>38 minutes</h4>
      </div>
      );
      
   };

   export default RestaurantCard;