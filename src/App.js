import React from "react";
import Navigation from "./Navigation";
import { fetchData } from "./data";

const App = () => {
  const data = fetchData();
  return <Navigation data={data} />;
};

export default App;
