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

const root = ReactDOM.createRoot(document.getElementById("root"));
///CORE REACT
// const heading = React.createElement("h1",{className:"heading2"},"I am so HAPPY 😁 for starting React.js")

///JSX - is not HTML but HTML LIKE SYNTAX
///BABLE converts this JSX code into React.createElement
const JsxHeading = (
  <div>
    <div>
      <h1 className="heading">Hi there, this is written using JSX 😁</h1>
    </div>
    <div>
      <h1 className="heading2">Trying multiple lines jsx</h1>
    </div>
  </div>
);

// React Functional Component
const HeadingComponent = ()=>{

  return <div>
    {JsxHeading}
    <h1>This is the my first functional React Component.</h1>
    </div>;
}
console.log(HeadingComponent)
root.render(<HeadingComponent/>);
 