import React from "react"
import BlogProduct from "./compontents/blogProduct";
import './App.css';
function App() {
  

  return (
    <>
      <div className="home">
      <h1 style={{padding:20 ,textAlign:"center"}}>User Directory App</h1>
      <BlogProduct/>
      </div>
    </>
  )
}

export default App
