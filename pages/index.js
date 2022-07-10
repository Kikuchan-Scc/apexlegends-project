import Nav from "../components/Nav"
import Banner from "../components/Banner"
import Footer from "../components/Footer"
import React from 'react'

export default function Home() {
  return (
    <div>
      <Nav />
      <div className="lg:ml-[270px] sm:ml-[90px] ml-0">
        <Banner />
      </div>
      <Footer />
    </div>
  )
}


