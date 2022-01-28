// import './Styles.css'
// imports
import React from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom";

// components
import Home from './Home'

// cloudinary
export const getCloudinaryImagePath = (fileName) => "https://res.cloudinary.com/resource-network/image/upload/v1639786610/resource-protocol/" + fileName

function App() {
  return (
      <BrowserRouter>
          <Routes>
              <Route path={"/"} element={<Home />} />
          </Routes>
      </BrowserRouter>
  );
}

export default App;
