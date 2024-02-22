import Destination from "../../atoms/home/destination";
import Loc1 from "../../../assets/loc1.webp";
import Loc2 from "../../../assets/loc2.webp";
import Loc3 from "../../../assets/loc3.webp";
import Loc4 from "../../../assets/loc4.webp";
import Loc5 from "../../../assets/loc5.webp";
import Loc6 from "../../../assets/loc6.webp";

const Destinations = () => {
  return (
    <div className="destinations">
      <div className="inner">
        <div className="heading-btn">
          <h4>TRAIN DESTINATIONS</h4>
          <button type="button">Browse All</button>
        </div>
        <div className="destination-list">
          <Destination
            image={Loc1}
            loc1a={"Aba"}
            loc1b={"Konkon"}
            loc2a={"aba station"}
            loc2b={"konkon train station"}
            occur={"Week end"}
            price={"75,500"}
          />

          <Destination
            image={Loc2}
            loc1a={"Okrika"}
            loc1b={"Konkon"}
            loc2a={"okrika station"}
            loc2b={"konkon train station"}
            occur={"Week end"}
            price={"40,500"}
          />

          <Destination
            image={Loc3}
            loc1a={"Aba"}
            loc1b={"Obio Akpor"}
            loc2a={"aba station"}
            loc2b={"Obio train station"}
            occur={"Week end"}
            price={"36,500"}
          />

          <Destination
            image={Loc4}
            loc1a={"Aba"}
            loc1b={"Konkon"}
            loc2a={"aba station"}
            loc2b={"konkon train station"}
            occur={"Week end"}
            price={"75,500"}
          />

          <Destination
            image={Loc5}
            loc1a={"Okrika"}
            loc1b={"Konkon"}
            loc2a={"okrika station"}
            loc2b={"konkon train station"}
            occur={"Week end"}
            price={"40,500"}
          />

          <Destination
            image={Loc6}
            loc1a={"Aba"}
            loc1b={"Obio Akpor"}
            loc2a={"aba station"}
            loc2b={"Obio train station"}
            occur={"Week end"}
            price={"36,500"}
          />
        </div>
        <div className="pagination">
            <div className="indicators">
                <div className="active">1</div>
                <div>2</div>
                <div>3</div>
            </div>
            <div className="prev-next">
                <div>
                    <span className="material-symbols-outlined">west</span>
                    Prev
                </div>
                <div>
                    Next
                    <span className="material-symbols-outlined">east</span>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Destinations;
