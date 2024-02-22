import FooterLink from "../../atoms/layout/footer/footer-link";
import Phone from "../../../assets/phone.webp";
import Skype from "../../../assets/skype.webp";
import Email from "../../../assets/email.webp";
import Location from "../../../assets/location.webp";
import LinkedIn from "../../../assets/linkedin.webp";
import Facebook from "../../../assets/facebook.webp";
import Twitter from "../../../assets/twitter.webp";
import Google from "../../../assets/google.webp";
import Youtube from "../../../assets/youtube.webp";

const Footer = () => {
  return (
    <footer>
      <div className="inner">
        <div className="category">
          <h5>Menu</h5>
          <div className="links">
            <FooterLink text="Shopping Cart" />
            <FooterLink text="Purchase History" />
            <FooterLink text="Information" />
            <FooterLink text="Help" />
          </div>
        </div>

        <div className="category">
          <h5>Contact Us</h5>
          <div className="links">
            <FooterLink text="+234 (0) 703 169 6993" icon={Phone} />
            <FooterLink text="turnaround_aba_ph" icon={Skype}/>
            <FooterLink text="info@turnaroundengineering.com" icon={Email} />
            <FooterLink text="16 Amodu Ojikutu Street, Victoria Island, Lagos" icon={Location} />
          </div>
        </div>

        <div className="category">
          <h5>Subscribe</h5>
          <div className="links">
            <FooterLink text="Be aware of news" />
            <form>
                <input type="text" alt="Your Email" />
                <button type="button">Send</button>
            </form>
            <div className="follow">
                <h5>Follow Us</h5>
                <div className="socials">
                    <FooterLink icon={LinkedIn} />
                    <FooterLink icon={Facebook} />
                    <FooterLink icon={Twitter} />
                    <FooterLink icon={Google} />
                    <FooterLink icon={Youtube} />
                </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
