
import "../about.css"
const About = () => {
    return (
        <>
        <header>
      <div className="abouts-headers">
        <div className="abouts-headers-dataas">
          <h3>Knows Us</h3>
          <p>Lorem ipsum dolor sit amet.</p>
        </div>
      </div>
    </header>
  
    <section>
      <div className="abouts-us-sections">
        <div className="abouts--imgs">
          <img src="images/a6.jpg" alt="image" />
        </div>
        <div className="abouts--infos">
          <h3>Who We Are ?</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo neque,
            nihil sit incidunt beatae consectetur <br />
            vero consequatur iste rem minus corporis dolores quam modi soluta
            id, amet itaque quisquam, excepturi<br />
            esse reprehenderit fuga repellendus voluptatum officiis laboriosam?
            Enim quasi veritatis xsgscfav ftndnh <br />repellendus voluptas
            aperiam impedit sapiente rerum modi officiis, recusandae
            voluptatibus explicabo cua <br />et? Illo enim incidunt modi beatae
            labore molestias fuga ut quae iusto pariatur cumque animi voluptate
            odio
            <br />
            aperiam at, minima eum ad quaerat provident cupiditate.
            Consequuntur, ipsum?
          </p>
          <p className="abouts-ps">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum
            corporis ipsam, consequatur ea delectus consequuntur!
          </p>
        </div>
      </div>
    </section>

    <section>
      <div className="orders-sections">
        <div className="orders-data">
          <div className="orders-images">
            <img src="images/f1.png" alt="free shipping" />
          </div>
          <div className="orders-buttons">
            <a className="orders-btns" href="#">Free Shipping</a>
          </div>
        </div>
    
        <div className="orders-data f2s">
          <div className="orders-images">
            <img src="images/f2.png" alt="free shipping" />
          </div>
          <div className="orders-buttons">
            <a className="orders-btns" href="#">Online Order</a>
          </div>
        </div>
   
        <div className="orders-data f3s">
          <div className="orders-images">
            <img src="images/f3.png" alt="free shipping" />
          </div>
          <div className="orders-buttons">
            <a className="orders-btns" href="#">Save Money</a>
          </div>
        </div>
  
        <div className="orders-data f4s">
          <div className="orders-images">
            <img src="images/f4.png" alt="free shipping" />
          </div>
          <div className="orders-buttons">
            <a className="orders-btns" href="#">Promotions</a>
          </div>
        </div>
        
        <div className="orders-data f5s">
          <div className="orders-images">
            <img src="images/f5.png" alt="free shipping" />
          </div>
          <div className="orders-buttons">
            <a className="orders-btns" href="#">Happy Sell</a>
          </div>
        </div>
      
        <div className="orders-data f6s">
          <div className="orders-images">
            <img src="images/f6.png" alt="free shipping" />
          </div>
          <div className="orders-buttons">
            <a className="orders-btns" href="#">24/7 Support</a>
          </div>
        </div>
        
      </div>
    </section>
 
    <section className="sign-ups">
      <div className="signups">
        <div className="infos">
          <h4>Sign Up For The News Letter</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur, elit.
            <span className="specials-ones">special offer</span>
          </p>
        </div>
        <div className="signups-forms">
          <input type="email" name="emial" placeholder="Your Email Address" />
          <a className="signups-btns" href="#">SignUp</a>
        </div>
      </div>
    </section>
        
        </>
    )
}
export default About