import React from 'react'
import Navbar from '../components/Navbar';
import CariRelawan from '../components/CariRelawan'
import Footer from "../components/Footer";

const Dashboardrelawan = () => {
  return ( 
    <div className="overflow-hidden">
      <Navbar />
      <CariRelawan />
      <Footer />
    </div>
  )
}

export default Dashboardrelawan;