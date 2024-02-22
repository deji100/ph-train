import Hero from "../../molecules/home/hero"
import Destinations from "../../molecules/home/destinations"
import Advantages from "../../molecules/home/advantages"
import Testimonies from "../../molecules/home/testimonies"

const Home = () => {
    return (
        <div className="home">
            <Hero />
            <Destinations />
            <Advantages />
            <Testimonies />
        </div>
    )
}

export default Home