import Testimony from "../../atoms/home/testimony"
import Samuel from "../../../assets/samuel.webp"
import Mike from "../../../assets/mike.webp"

const Testimonies = () => {
    return (
        <div className="testimonies">
            <div className="inner">
                <h4>Testimonies</h4>
                <div className="testimonies-list">
                    <Testimony image={Samuel} name="Samuel Moses" desc="“Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna  consectetur adipisicing elit, aliqua.”" />
                    <Testimony image={Mike} name="Mike Johnson" desc="“Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna  consectetur adipisicing elit, aliqua.”" />
                </div>
            </div>
        </div>
    )
}

export default Testimonies