
const root = ReactDOM.createRoot(document.getElementById("root"));
const heading1 = React.createElement("h1", {className : "heading"}, "Welcome to React JS");
const heading2 = React.createElement("h2",{className : "heading2"}, "Hi there");
const child1 = React.createElement("div", {id:"child"}, [heading1, heading2,heading1]);
const child2 = React.createElement("div", {id:"child2"}, [heading1, heading2,heading1]);
const parent = React.createElement("div", {id:"parent"}, [child1,child2]);

root.render(parent);