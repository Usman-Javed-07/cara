 import "../contact.css"
 const Contact = () => {
    return (
        <>
  
  <header>
      <div className="abouts-header">
        <div className="abouts-header-data">
          <h3># Lets Talk</h3>
          <p>Lorem ipsum dolor sit amet.</p>
        </div>
      </div>
    </header>

    <section>
      <div className="caras-contact-main">
        <div className="caras-contact">
          <div className="caras-head-office">
            <p>GET IN TOUCH</p>
            <h3>Visit one of our agency locations or contact us today</h3>
            <h5>Head Office</h5>
          </div>
          <div className="contacts--icon">
            <i className="fa-solid fa-location-dot contact---uss"></i>
            <h4>56 Glassford Street Glasgow G1 New York</h4>
          </div>
          <div className="contacts--icon">
            <i className="fa-solid fa-envelope contact---uss"></i>
            <h4>cara@gmail.com</h4>
          </div>
          <div className="contacts--icon">
            <i className="fa-solid fa-phone contact---uss"></i>
            <h4>+81 45158155</h4>
          </div>
          <div className="contacts--icon">
            <i className="fa-regular fa-clock contact---uss"></i>
            <h4>Monday to Friday: 9:00am to 16:00pm</h4>
          </div>
        </div>
      

        <div className="locations-cara">
        <iframe
  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13303.68235852574!2d73.105430566416!3d33.5294502109774!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38dfed68dd86fca9%3A0x8d4a3cb707e87eba!2sPhase%207%20Bahria%20Town%2C%20Islamabad%2C%20Islamabad%20Capital%20Territory%2C%20Pakistan!5e0!3m2!1sen!2s!4v1727330509974!5m2!1sen!2s"
  width="600"
  height="450"
  style={{ border: 0 }}
  allowFullScreen=""
  loading="lazy"
  referrerPolicy="no-referrer-when-downgrade"
/>
       </div>
      </div>
    </section>
    <section className="contacts-padding">
      <div className="contacts-form">
        <div className="forms">
          <form>
            <p>LEAVE A MESSAGE</p>
            <h3>We Love To Hear From You</h3>
            <input
              className="contacts-input-form"
              type="text"
              name="name"
              placeholder="Your Name"
            />
            <input
              className="contacts-input-form"
              type="email"
              name="email"
              placeholder="Emial"
            />
            <input
              className="contacts-input-form"
              type="text"
              name="subject"
              placeholder="Subject"
            />
            <textarea
              name="text"
              id="text"
              cols="30"
              rows="10"
              placeholder="Your Message"
            ></textarea>
            <button className="contacts-button" type="submit">submit</button>
          </form>
        </div>
        
        <div className="managers-section">
          <div className="contacts-manager">
            <div className="managers--info">
              <div className="managers-img">
                <img src="images/1.png" alt="manager" />
              </div>

              <div className="contacts--para-graph">
                <h3>John Doe</h3>
                <p>Senior Marketing Manager</p>
                <p>Phone: +000 123 000 77 88</p>
                <p>Email: contact@emial.com</p>
              </div>
            </div>
          </div>
          
          <div className="contacts-manager">
            <div className="managers--info">
              <div className="managers-img">
                <img src="images/2.png" alt="manager" />
              </div>

              <div className="contacts--para-graph">
                <h3>William Smith</h3>
                <p>Senior Marketing Manager</p>
                <p>Phone: +000 123 000 77 88</p>
                <p>Email: contact@emial.com</p>
              </div>
            </div>
          </div>

          
          <div className="contacts-manager">
            <div className="manager--info">
              <div className="manager-img">
                <img src="images/3.png" alt="manager" />
              </div>

              <div className="contacts--para-graph">
                <h3>Emma Stone</h3>
                <p>Senior Marketing Manager</p>
                <p>Phone: +000 123 000 77 88</p>
                <p>Email: contact@emial.com</p>
              </div>
            </div>
          </div>
       
        </div>
      </div>
    </section>
    <section className="signs-up">
      <div className="signups">
        <div className="infos">
          <h4>Sign Up For The News Letter</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur, elit.
            <span className="specials-one">special offer</span>
          </p>
        </div>
        <div className="signups-form">
          <input type="email" name="emial" placeholder="Your Email Address" />
          <a className="signups-btn" href="#">SignUp</a>
        </div>
      </div>
    </section>
        </>
    )
}
export default Contact