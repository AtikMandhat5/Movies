import React from "react";
import { Routes,Route } from "react-router-dom";
import Movies from "./Movies";
import SingleMovie from "./SingleMovie";
import Home  from "./Home";
import Error from "./Error";
function App() {
  return (
<>
 
    <Routes>
    <Route path="/" element={<Home/>}/>
      {/* <Route path="/movies" element={<Movies/>}/> */}
      <Route path="/movies/:id" element={<SingleMovie/>}/>
      <Route path="*" element={<Error/>}/>

    </Routes>
  
</>
);
}

export default App;
