import { useEffect, useState } from "react"
import "../shop.css"
import { GiShoppingCart } from "react-icons/gi";
import { CiSearch } from "react-icons/ci";
import { GoStarFill } from "react-icons/go";


const Shop = () => {
  const URL = "http://localhost:5000/api/products";
  const [data, setData] = useState(null); // State to store the fetched data

  // const [inputValue , setInputValue] = useState('')
  // const [storedValue , setStoredValue] = useState('')

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await fetch(URL);
        const json = await result.json();
        console.log('Fetched data:', json); // Log the entire response

        // Set the data directly since it is not inside a 'data' property
        if (json && Array.isArray(json)) {
          setData(json); // Store the fetched data in the state
        } else {
          console.log('Unexpected data format:', json); // Log if the format is unexpected
        }
      } catch (error) {
        console.log("Error fetching data:", error); // Handle any fetch errors
      }
    };

    fetchData();
  }, []);


  // const saveTolocalStorage = (product) => {

  //   if (product) {
  //     localStorage.setItem("myData", JSON.stringify(product)); // Convert to JSON
  //     alert("Data saved to localStorage!");
  //   } else {
  //     alert("No data to save!");
  //   }
  // };

  // // Retrieve data from localStorage on mount
  // useEffect(() => {
  //   const storedData = localStorage.getItem("myData");
  //   if (storedData) {
  //     setData(JSON.parse(storedData)); // Parse JSON back to JavaScript
  //   }
  // }, []);

  const saveTolocalStorage = (product) => {
    if (product) {
      // Step 1: Retrieve Existing Data
      const existingData = JSON.parse(localStorage.getItem("myData")) || [];
      console.log("Existing LocalStorage Data:", existingData);
      console.log("Product to Add:", product);
  
      // Step 2: Optional Duplicate Check
      const isAlreadyInStorage = existingData.some(
        (item) => item._id === product._id // Update this key if necessary
      );
  
      if (!isAlreadyInStorage) {
        // Step 3: Add Product and Update LocalStorage
        const updatedData = [...existingData, product];
        localStorage.setItem("myData", JSON.stringify(updatedData));
        console.log("Updated LocalStorage Data:", updatedData);
        alert("Product added to Cart!");
      } else {
        alert("Product already exists in Cart!");
      }
    } else {
      alert("No product to save!");
    }
  };
  
  


  const cardStyle = {
    display: "flex",
    flexDirection: "row", 
    overflowX: "scroll",
    gap: "20px",
  }
  const star = {
    color: "#f3b519",
  }
  const cartbtn = {
    color: "red",
    // border: "1px solid #8e8b8b",
    padding: "1px 60px"
  }
  if(!data) return <h1>Loading</h1>
    return (
        <>
  
        {/*  */}
            <div className="shop-items">
      <div className="shop-item-data">
        <h3># Stay Home</h3>
        <p>Lorem ipsum dolor sit amet.</p>
      </div>
    </div>
    <section>
      <div className="shop-categories">
   
        <div className="page-items">
          <h3>Items Per Page</h3>
          <select name="items" id="page-item">
            <option value="4">4</option>
            <option value="8">8</option>
            <option value="16">16</option>
            <option value="40">40</option>
          </select>
        </div>
        <div className="search-shop-item">
        <CiSearch />
          <input
            className="shop-input"
            type="search"
            name="product"
            placeholder="Search Product"
          />
        </div>
        <div className="category">
          <h3>Categories:</h3>
          <input type="radio" name="men" id="shirts" />
          <label htmlFor="shirts" className="label-inline">Men</label>
          <input type="radio" name="men" id="shirts" />
          <label htmlFor="shirts" className="label-inline">Women</label>
          <input type="radio" name="men" id="shirts" />
          <label htmlFor="shirts" className="label-inline">Shirts</label>
          <input type="radio" name="men" id="shirts" />
          <label htmlFor="shirts" className="label-inline">Pants</label>
        </div>
      </div>
    </section>
    <section>
      <div className="card-section">
         
      </div>
    </section>
  {/*  */}

  <div className="main-card" style={cardStyle}>
      {data ? (
        data?.map((product) => (
          <div className="card" key={product._id}>
            <div className="card-image">
              <img src={product.productImage} alt="card image" />
            </div>
            <div className="card-data">
              <p>{product.productBrand}</p>
              <h3>{product.productName}</h3>
              <div className="star" style={star}>
              <GoStarFill />
              <GoStarFill />
              <GoStarFill />
              <GoStarFill />
             

              </div>
              <h3 className="price">${product.productPrice}</h3>
              <p className="product-id">Product ID: {product._id}</p>
              <div className="card-shopping">
                {/* Add to cart button */}
                <button className="cart-btn" style={cartbtn}  onClick={() => saveTolocalStorage(product)}>
                <GiShoppingCart />
                </button>
              </div>
            </div>
          </div>
        ))
      ) : (
        <p>Loading...</p>
      )}
    </div>

  {/*  */}
    <section className="sign-up">
      <div className="signup">
        <div className="info">
          <h4>Sign Up htmlFor The News Letter</h4>
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


export default Shop