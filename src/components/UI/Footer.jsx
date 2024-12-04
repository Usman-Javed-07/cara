
import { IoLogoFacebook } from "react-icons/io5";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaPinterest } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";

export const Footer = () => {
    return (
        <>
        <footer>
        <div className="footer-main">
          <div className="footer-contact">
            <img src="images/logo (2).png" alt="logo image" />
            <h5>Contact</h5>
            <p>
              <strong>Address: </strong>657 Wellington Road, Street 32, san
              Francisco
            </p>
            <p><strong>Phone: </strong>+01 151151353 / (+92) 012155845</p>
            <p><strong>Hours: </strong>10:00 - 18:00 MOn to Sat</p>
            <h6>Follow Us</h6>
            <div className="footer-icon">
            <IoLogoFacebook/>
            <FaXTwitter />
            <FaInstagram />
            <FaPinterest />
            <FaYoutube />
            </div>
          </div>
         
          <div className="footer-about footer-list">
            <h5>About</h5>
            <ul>
              <li><a href="#">About Us</a></li>
              <li><a href="#">Delivery Information</a></li>
              <li><a href="#">Privacy Policy</a></li>
              <li><a href="#">Trems & Conditions</a></li>
              <li><a href="#">Contact Us</a></li>
            </ul>
          </div>
      
          <div className="footer-account footer-list">
            <h5>My Account</h5>
            <ul>
              <li><a href="#">Sign In</a></li>
              <li><a href="#">View Cart</a></li>
              <li><a href="#">My Wishlist</a></li>
              <li><a href="#">Track My Order</a></li>
              <li><a href="#">Help</a></li>
            </ul>
          </div>
    
          <div className="footer-apps">
            <h5>Install App</h5>
            <p>From the App Store or Google Play</p>
            <div className="app-and-play-store">
              <img src="images/app.jpg" alt="app store" />
              <img src="images/play.jpg" alt="play store" />
            </div>
            <p>Secure Payment Gateway</p>
            <img className="payment-img" src="images/pay.png" alt="payment method" />
          </div>
        </div>
        <p className="copyright-to">&copy; 2024 by Usman Javed</p>
      </footer>
      </>
    )
}