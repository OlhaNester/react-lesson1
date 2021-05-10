import React from "react";
import ReactDOM from "react-dom";
// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

const link = React.createElement("a", { href: "reactjs.org" }, "Ссылочка");

console.log(link);

ReactDOM.render(link, document.getElementById("root"));
