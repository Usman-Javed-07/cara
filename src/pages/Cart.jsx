import { useEffect, useState } from "react";
import "../cart.css";
import { CiSquareRemove } from "react-icons/ci";

export const Cart = () => {
  const [data, setData] = useState([]);
  const [couponInput, setCouponInput] = useState("");
  const [couponMessage, setCouponMessage] = useState("");
  const [couponDiscount, setCouponDiscount] = useState(0);
  const [cartSubtotal, setCartSubtotal] = useState(0);
  const [grandTotal, setGrandTotal] = useState(0);

  // Load cart data from localStorage
  useEffect(() => {
    const storedData = localStorage.getItem("myData");
    if (storedData) {
      const parsedData = JSON.parse(storedData);
      setData(parsedData);

      
      const subtotal = parsedData.reduce(
        (acc, item) => acc + (item.productPrice * (item.quantity || 1) || 0), 
        0
      );
      setCartSubtotal(subtotal);
      setGrandTotal(subtotal); 
    }
  }, []);

  // Recalculate the subtotal and grand total whenever data or coupon changes
  useEffect(() => {
    const subtotal = data.reduce(
      (acc, item) => acc + (item.productPrice * (item.quantity || 1) || 0),
      0
    );
    setCartSubtotal(subtotal);
    setGrandTotal(subtotal * (1 - couponDiscount / 100)); 
  }, [data, couponDiscount]); 

  const handleQuantityChange = (e, id) => {
    const newQuantity = Math.max(parseInt(e.target.value, 10) || 1, 1); 
    const updatedData = data.map((item) =>
      item._id === id ? { ...item, quantity: newQuantity } : item
    );
    setData(updatedData);
    localStorage.setItem("myData", JSON.stringify(updatedData));
  };

  const handleRemove = (id) => {
    const updatedData = data.filter((item) => item._id !== id);
    setData(updatedData);
    localStorage.setItem("myData", JSON.stringify(updatedData));
  };

  const handleCouponCode = () => {
    if (couponInput === "usman123") {
      setCouponDiscount(10); 
      setCouponMessage("Coupon applied! You get a 10% discount.");
    } else {
      setCouponDiscount(0);
      setCouponMessage("Invalid Code");
    }
  };

  if (!data || data.length === 0) {
    return <p>Your cart is empty</p>;
  }
  // handle checkout
   const handleCheckout = () => {
    alert("ready for checkout")
   }

  return (
    <>
      <header>
        <div className="about-header">
          <div className="about-header-data">
            <h3># Lets Talk</h3>
            <p>Lorem ipsum dolor sit amet.</p>
          </div>
        </div>
      </header>

      <section id="cart" className="section-p1">
        <table width="100%">
          <thead>
            <tr>
              <th>Remove</th>
              <th>Image</th>
              <th>Product ID</th>
              <th>Product</th>
              <th>Unit Price</th>
              <th>Quantity</th>
              <th>Subtotal</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => (
              <tr key={index}>
                <td className="remove">
                  <button
                    className="remove-Btn"
                    onClick={() => handleRemove(item._id)}
                  >
                    <CiSquareRemove />
                  </button>
                </td>
                <td className="imgAddress">
                  <img src={item.productImage} alt={item.productName} />
                </td>
                <td className="ID">{item._id}</td>
                <td className="name">{item.productName}</td>
                <td className="price">${item.productPrice.toFixed(2)}</td>
                <td>
                  <input
                    type="number"
                    value={item.quantity || 1}
                    min="1"
                    className="quantity-input"
                    onChange={(e) => handleQuantityChange(e, item._id)}
                  />
                </td>
                <td className="subtotal">
                  ${Number(item.productPrice * (item.quantity || 1)).toFixed(2)}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>

      <section id="cart-add">
        <div id="coupon">
          <h3>Apply Coupon</h3>
          <p style={{ fontSize: "12px", color: "rgb(137, 134, 134)" }}>
            Coupon code is usman123
          </p>
          <div>
            <input
              type="text"
              id="couponCodeInput"
              placeholder="Enter Coupon Code"
              value={couponInput}
              onChange={(e) => setCouponInput(e.target.value)} // Update couponInput state
            />
            <button className="normal" onClick={handleCouponCode}>
              Apply
            </button>
          </div>
          <h4 style={{ color: couponMessage === "Invalid Code" ? "red" : "green" }}>
            {couponMessage}
          </h4>
        </div>

        <div id="subtotal">
          <h3>Cart Totals</h3>
          <table>
            <tfoot>
              <tr>
                <td>Cart Subtotal</td>
                <td className="sumSubTotals">${cartSubtotal.toFixed(2)}</td>
              </tr>
              <tr>
                <td>Shipping</td>
                <td className="shipping">Free</td>
              </tr>
              <tr>
                <td>
                  <strong>Total</strong>
                </td>
                <td className="grandTotal">
                  <strong>${grandTotal.toFixed(2) || 0.00}</strong>
                </td>
              </tr>
            </tfoot>
          </table>
          <button className="normal" onClick={handleCheckout}>Proceed To Checkout</button>
        </div>
      </section>
    </>
  );
};

export default Cart;
