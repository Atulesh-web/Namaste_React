import React from "react";
import ReactDOM from "react-dom/client";

// USING CORE REACT
// const root = ReactDOM.createRoot(document.getElementById("root"));
// const heading1 = React.createElement("h1", {className : "heading"}, "Welcome to React JS");
// const heading2 = React.createElement("h2",{className : "heading2"}, "Hi there");
// const child1 = React.createElement("div", {id:"child"}, [heading1, heading2,heading1]);
// const child2 = React.createElement("div", {id:"child2"}, [heading1, heading2,heading1]);
// const parent = React.createElement("div", {id:"parent"}, [child1,child2]);
// root.render(parent);

/*
* Header
- Logo
- Nav items

* Body
- Search bar
 * Card Container
  - Restau Cards - Name, Star Rating, Cuisine, delivery time
* Footer
- Copyright
- Links
- Addreess
- Contact
*/

const root = ReactDOM.createRoot(document.getElementById("root"));
///CORE REACT
// const heading = React.createElement("h1",{className:"heading2"},"I am so HAPPY 😁 for starting React.js")

///JSX - is not HTML but HTML LIKE SYNTAX
///BABLE converts this JSX code into React.createElement
// const JsxHeading = (
//   <div>
//     <div>
//       <h1 className="heading">Hi there, this is written using JSX 😁</h1>
//     </div>
//     <div>
//       <h1 className="heading2">Trying multiple lines jsx</h1>
//     </div>
//   </div>
// );

// React Functional Component
// const HeadingComponent = ()=>{

//   return <div>
//     {JsxHeading}
//     <h1>This is the my first functional React Component.</h1>
//     </div>;
// }
// console.log(HeadingComponent)
// root.render(<HeadingComponent/>);

const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img
          className="logo"
          src="https://cdn.dribbble.com/userupload/11976455/file/original-b26138b707bfbf391c5e2a05b42f43b3.jpg?resize=400x300&vertical=center"
        />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};
const resNamesObj = {
  names: [{"RestauName":"Pizza hut",id:1},{"RestauName": "KFC",id:2},{ "RestauName":"Biryani House",id:3}, {"RestauName":"Dominoz",id:4}, {"RestauName":"Mozo",id:5},{"RestauName":"Burger club",id:6}],
};
const RestaurantCard = (props) => {
  const { resName, rating, img } = props;
  const restauCards = resName.names.map((names) => {
    return (
    <div key={names.id}
      className="restaurant-card"
      style={{
        backgroundColor: "lightgray",
      }}
    >
      <img className="pizza-logo" src={img} />
      <h3>{names.RestauName}</h3>
      <h4>Fresh, Cheeze Burst</h4>
      <h4>{rating}</h4>
      <h4>38 minutes</h4>
    </div>
    )
    
  });
  console.log(restauCards,"check")
  return restauCards;
};


const Body = () => {
  return (
    <div className="body">
      <div className="search">Search</div>
      <div className="restaurant-container">
        <RestaurantCard
          resName={resNamesObj}
          rating="4.6"
          img="https://img.freepik.com/free-photo/appetizing-slice-pizza-flat-lay-generative-ai_169016-28936.jpg?size=338&ext=jpg&ga=GA1.1.1546980028.1703376000&semt=ais"
        />
      </div>
    </div>
  );
};

const AppLayoutCompount = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};

root.render(<AppLayoutCompount />);
