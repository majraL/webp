require("./assets/stylesheets/styles.scss");
import React from "react";
import ReactDOM from "react-dom";
import App from "../src/app/App";

const cl = console.log;

ReactDOM.render(<App />, document.getElementById("root"));

// document.write("disi");
// document.write(" ajde daj");

// const napisi = (txt) => {
//   cl(txt)
// }
// napisi("je li");

// class Auto {

//   proizvodac(x) {
//     cl(x);
//   }
// }

// const bmv = new Auto();
// bmv.proizvodac("bmw");
