
import React from "react";
import {Routes, Route} from 'react-router-dom'
import Home from './pages/Home';
// import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

const App =()=>{
  return(
    <div>
      <Navbar/>
      {/* <Hero/> */}
      <Routes>
      <Route path='/' element={<Home/>}/>
      </Routes>
      <Footer/>
      </div>
  )
}

export default App;