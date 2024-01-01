# Namaste_React
# Parcel 
- Dev Build.
- Local Server.
- HMR = Hot Module Replacement (Live changes) - It uses file watching algorithm written in C++ to do this functionality.
- Caching - Faster Builds.
- Image Optimization.
- Minification while building production build.
- Bundling.
- Compressing (remove white spaces while uploading in production).
- Consistent Hashing.
- Code Splitting.
- Differential bundling. (Takes care of all the browsers so our app works perfectly in all browsers).
- Diagnostics (beautifull errors).
- Tree Shaking (remove unused code for you).
- Different dev ad prod bundles.

# Two types of routing-
- Client Side Routing. (React JS)
- Server side Routing. (Plane html css js)

# Life cycle method of child based component or parent child cycle (relationship) of class based component
- Q - Let say we have a class bases component COMPONENT1 and inside it we have a constructor(), render() and componentDidMount() method.
Inside the render() method an another child component COMPONENT2 which is getting called after rendering a <h1>Hi</h1>. In the child component also same 3 methods are getting called i.e constructor(), render() and componentDidMount(). Now the question here is what will be the life cycle of these components if we are calling COMPONENT1 from our main component App.jsx?
- A - When our App.jsx will call COMPONENT1, constructor method will be called first and then our render method will be called. Inside render method as we know there is a H1 it will be rendered in our UI and then our render method will see that there is a child component to render so it will make instance of child component COMPONENT2 and inside it first constructor, then render and then componentDidMount() method will be called. Once the rendering of this all will be completed our parent component COMPONENT1 will at last call it's componentDidMount() method.
