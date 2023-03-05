import React from "react";
import Components from "./Components/Components.js";
import Parse from "parse/dist/parse.min.js";

Parse.serverURL = "https://parseapi.back4app.com"; // This is your Server URL
// Remember to inform BOTH the Back4App Application ID AND the JavaScript KEY
Parse.initialize(
  "vrfPWA2CJRy43YRUDX1zFqCoIr7yZ9Uk2rbP4oul", // This is your Application ID
  "ZFZkmbQjZJlJk68sjDlUKm9tKWBo2K01LjzFVE2Q" // This is your Javascript key
);

const App = () => {
  return <Components />;
};

export default App;
