 const Home = () => {

  
    return (
        <>
         <header>
      <div className="header-mian">
        <div className="header-data">
          <p>Treade-in-Offer</p>
          <h1>Super Value Deals</h1>
          <h2>On al Products</h2>
          <h3>Lorem ipsum dolor sit amet.</h3>

          <div className="header-button">
            <a className="header-btn" href="#">Shop Now</a>
          </div>
        </div>
      </div>
    </header>
 

    <section>
      <div className="order-section">
        <div className="order-data">
          <div className="order-image">
            <img src="images/f1.png" alt="free shipping" />
          </div>
          <div className="order-button">
            <a className="order-btn" href="#">Free Shipping</a>
          </div>
        </div>
       
        <div className="order-data f2">
          <div className="order-image">
            <img src="images/f2.png" alt="free shipping" />
          </div>
          <div className="order-button">
            <a className="order-btn" href="#">Online Order</a>
          </div>
        </div>
      
        <div className="order-data f3">
          <div className="order-image">
            <img src="images/f3.png" alt="free shipping" />
          </div>
          <div className="order-button">
            <a className="order-btn" href="#">Save Money</a>
          </div>
        </div>

        <div className="order-data f4">
          <div className="order-image">
            <img src="images/f4.png" alt="free shipping" />
          </div>
          <div className="order-button">
            <a className="order-btn" href="#">Promotions</a>
          </div>
        </div>
     
        <div className="order-data f5">
          <div className="order-image">
            <img src="images/f5.png" alt="free shipping" />
          </div>
          <div className="order-button">
            <a className="order-btn" href="#">Happy Sell</a>
          </div>
        </div>
       
        <div className="order-data f6">
          <div className="order-image">
            <img src="images/f6.png" alt="free shipping" />
          </div>
          <div className="order-button">
            <a className="order-btn" href="#">24/7 Support</a>
          </div>
        </div>
       
      </div>
    </section>


   
    <div className="features">
      <h3>Featured Products</h3>
      <p>Lorem ipsum dolor sit amet</p>
    </div>
   

    <section>
      <div className="card-section"></div>
    </section>

    <section>
      <div className="explore-more">
        <div className="explore-us">
          <p>Repair Services</p>
          <h3>
            upto <span className="discount">70% Off</span>-All t-shirts &
            Accessories
          </h3>
          <a className="explore-btn" href="#">Explore More</a>
        </div>
      </div>
    </section>
  
    <section>
      <div className="arrivals">
        <div className="arrival-heading">
          <h3>New Arrivals</h3>
          <p>Lorem ipsum dolor sit amet.</p>
        </div>
    
        <div className="main-sale">
          <div className="arrivales-sale-one sale">
            <p>Crazy deals</p>
            <h3>Buy 1 get 1 free</h3>
            <p>Lorem ipsum dolor sit amet, consectetur</p>
            <a href="#">learn More</a>
          </div>
          <div className="arrivals-sale-two sale">
            <p>spring/ summer</p>
            <h3>Upcoming season</h3>
            <p>Lorem ipsum dolor sit amet.</p>
            <a href="#">Learn More</a>
          </div>
        </div>
    

        <div className="winter-sale">
          <div className="winter-sale-one winter">
            <h3>seasonal sale</h3>
            <h4>Winter Callection -50% OFF</h4>
          </div>
          <div className="winter-sale-two winter">
            <h3>New footwear collection</h3>
            <h4>spring/summer 2024</h4>
          </div>
          <div className="winter-sale-three winter">
            <h3>T -shirts</h3>
            <h4>New Trendy Prints</h4>
          </div>
        </div>
      </div>
    </section>
   
    <section className="sign-up">
      <div className="signup">
        <div className="info">
          <h4>Sign Up For The News Letter</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur, elit.
            <span className="special-one">special offer</span>
          </p>
        </div>
        <div className="signup-form">
          <input type="email" name="emial" placeholder="Your Email Address" />
          <a className="signup-btn" href="#">SignUp</a>
        </div>
      </div>
    </section>
        </>
    )
    
}
export default Home