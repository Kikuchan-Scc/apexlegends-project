import Banner from "../components/Banner"
import Footer from "../components/Footer"
import React from 'react'

export default function Home() {
  return (
    <div>
      <div className="lg:ml-[270px] sm:ml-[90px] ml-0 sm:pb-0 pb-[65px]">
        <Banner />
        <Footer />
      </div>
    </div>
  )
}


