import Nav from "../components/Nav"
import Banner from "../components/Banner"
import React from 'react'

export default function Home() {
  return (
    <div>
      <Nav />
      <div className="lg:ml-[270px] sm:ml-[90px] ml-0">
        <Banner />
      </div>
    </div>
  )
}


