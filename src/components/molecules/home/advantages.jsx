import Merit1 from "../../../assets/merit1.webp"
import Merit2 from "../../../assets/merit2.webp"
import Merit3 from "../../../assets/merit3.webp"
import Advantage from "../../atoms/home/advantage"

const Advantages = () => {
    return (
        <div className="advantages">
            <div className="inner">
                <h4>E-Tickets Advantages</h4>
                <div className="advantages-list">
                    <Advantage image={Merit1} desc="It’s very easy to order a train ticket online. E-ticket cannot be lost or forgotten at home." />
                    <Advantage image={Merit2} desc="It’s very easy to order a train ticket online. E-ticket cannot be lost or forgotten at home." />
                    <Advantage image={Merit3} desc="There’s no need to go to the ticket office additionally before your trip. Save your money and nerves." />
                </div>
            </div>
        </div>
    )
  };
  
  export default Advantages;
  