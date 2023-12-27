const RestaurantCard = (props) => {
    const { resName, rating, img } = props;
   
      return (
      <div className="restaurant-card"
        style={{
          backgroundColor: "lightgray",
        }}
      >
        <img className="pizza-logo" src={img} />
        <h3>{resName}</h3>
        <h4>Fresh, Cheeze Burst</h4>
        <h4>{rating}</h4>
        <h4>38 minutes</h4>
      </div>
      );
      
   };

   export default RestaurantCard;