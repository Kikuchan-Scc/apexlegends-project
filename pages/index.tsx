import Nav from "../components/Nav"
import Banner from "../components/Banner"
import Map from "../components/Map"
import Crafting from "../components/Crafting"
import News from "../components/News"

export default function Home() {

  return (
    <div>
      <Nav />
      <div className="lg:ml-[270px] sm:ml-[90px] ml-0 bg-slate-700">
        <Banner />
        <Map />
        <div className="lg:flex mt-5">
          <Crafting />
          <News />
        </div>
      </div>
    </div>
  )
}


