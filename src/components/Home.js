import React from "react";

function Home() {
  return (
    <div>
      <div className="add-to-cart">
        <img src="/images/cart.png" style={{width:"30px", height:"30px", float:"right"}}/>
      </div>
      <h1>Home Component</h1>
      <div className="cart-wrapper">
        <div className="img-wrapper item">
          <img
            src="https://support.trianglemls.com/hc/article_attachments/4404717591443/1.png"
            style={{ width: "100px", height: "100px" }}
          />
        </div>
        <div className="text-wrapper item">
          <span>I-Phone</span>
          <br />
          <span>Price: $1000.00</span>
        </div>

        <div className="btn-wrapper item">
          <button className="button"><span>Add to cart</span></button>
        </div>
      </div>
    </div>
  );
}

export default Home;
