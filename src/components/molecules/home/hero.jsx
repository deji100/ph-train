import HeroImg from "../../../assets/hero-img.webp";

const Hero = () => {
  return (
    <div className="hero">
      <img src={HeroImg} alt="Hero" />
      <div className="inner">
        <div className="content">
          <h2>WELCOME TO PORT-HACOURT/ABA TRAIN BOOKING</h2>
          <p>
            We save your time both while purchasing, the check-in and during
            travel...
          </p>
        </div>
        <div className="form">
          <form>
            <fieldset>
              <label>Travelling Route</label>
              <div className="fieldset">
                <div className="input-field">
                  <input type="text" placeholder="From" />
                  <span className="material-symbols-outlined">location_on</span>
                </div>
                <div className="rotate">
                  <span className="material-symbols-outlined">sync</span>
                </div>
                <div className="input-field">
                  <input type="text" placeholder="To" />
                  <span className="material-symbols-outlined">location_on</span>
                </div>
              </div>
            </fieldset>

            <fieldset>
              <label>Travelling Date</label>
              <div className="fieldset">
                <div className="input-field long">
                  <input type="text" placeholder="MM/DD/YY" />
                  <span className="material-symbols-outlined">
                    calendar_month
                  </span>
                </div>
                <div className="input-field long">
                  <input type="text" placeholder="One Way" />
                  <span className="material-symbols-outlined">
                    calendar_month
                  </span>
                </div>
              </div>
            </fieldset>

            <fieldset>
              <label>Travelling Persons</label>
              <div className="fieldset">
                <div className="input-field long">
                  <input type="text" placeholder="1 Adult" />
                  <span className="material-symbols-outlined">
                    arrow_drop_down
                  </span>
                </div>
                <div className="input-field long">
                  <input type="text" placeholder="0 Kids" />
                  <span className="material-symbols-outlined">
                    arrow_drop_down
                  </span>
                </div>
              </div>
            </fieldset>

            <fieldset>
              <label>Classes</label>
              <div className="fieldset">
                <div className="input-field long">
                  <input type="text" placeholder="VIP" />
                  <span className="material-symbols-outlined">hotel_class</span>
                </div>
                <button type="button">SEARCH TICKETS</button>
              </div>
            </fieldset>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Hero;
