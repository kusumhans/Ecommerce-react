import { Link } from 'react-router-dom'
import './Cart.css'

export default function Cart(){
    return( 
        <div>
            <div className="container">
      <div className="row ">
        <h2 className="Cart-title text-center ">Your Cart</h2>
        <div className="cart-wrapper d-flex flex-row" id="cart-wrapper">
          <div className="order-detail d-flex flex-column" id="orderDetail">
            {/* <!-- todo   --> */}
            <div className="order-detail-tittle fw-bold">order Detail</div>
           <div className="order-deatil-product d-flex flex-row ps-5">
              <div className="order-detail-product-Image d-flex m-2">
                <img src="/src/assets/-original-imahfjsfgu7vjkvw.webp" alt="" />
              </div>
              <div className="order-detail-product-data d-flex flex-column justify-content-center">
                <div>Google Pixel 9A (Obsidian, 256 GB)(8 GB RAM ) no.1 backup good to use </div>
                <div> $39,999</div>
              </div>
              <div className="order-detail-product-action d-flex flex-column">
                <div className="order-detail-product-quality">
                  <div className="fw-bold">Quality</div>
                  <div className="form-group">
                    <select className='form-select'>
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                      <option value="4">4</option>
                      <option value="5">5</option>
                      <option value="6">6</option>
                      <option value="7">7</option>
                      <option value="8">8</option>
                      <option value="9">9</option>
                      <option value="10">10</option>
                    </select>
                  </div>
                </div>
                <button className='order-detail-product-remove btn btn-danger'>remove</button>
              </div>
           </div>
           <hr />
           <div className="order-deatil-product d-flex flex-row ps-5">
              <div className="order-detail-product-Image d-flex m-2">
                <img src="/src/assets/-original-imahfjsfgu7vjkvw.webp" alt="" />
              </div>
              <div className="order-detail-product-data d-flex flex-column justify-content-center">
                <div>Google Pixel 9A (Obsidian, 256 GB)(8 GB RAM ) no.1 backup good to use </div>
                <div> $39,999</div>
              </div>
              <div className="order-detail-product-action d-flex flex-column">
                <div className="order-detail-product-quality">
                  <div className="fw-bold">Quality</div>
                  <div className="form-group">
                    <select className='form-select'>
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                      <option value="4">4</option>
                      <option value="5">5</option>
                      <option value="6">6</option>
                      <option value="7">7</option>
                      <option value="8">8</option>
                      <option value="9">9</option>
                      <option value="10">10</option>
                    </select>
                  </div>
                </div>
                <button className='order-detail-product-remove btn btn-danger'>remove</button>
              </div>
           </div>
           <hr />
           <div className="order-deatil-product d-flex flex-row ps-5">
              <div className="order-detail-product-Image d-flex m-2">
                <img src="/src/assets/-original-imahfjsfgu7vjkvw.webp" alt="" />
              </div>
              <div className="order-detail-product-data d-flex flex-column justify-content-center">
                <div>Google Pixel 9A (Obsidian, 256 GB)(8 GB RAM ) no.1 backup good to use </div>
                <div> $39,999</div>
              </div>
              <div className="order-detail-product-action d-flex flex-column">
                <div className="order-detail-product-quality">
                  <div className="fw-bold">Quality</div>
                  <div className="form-group">
                    <select className='form-select'>
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                      <option value="4">4</option>
                      <option value="5">5</option>
                      <option value="6">6</option>
                      <option value="7">7</option>
                      <option value="8">8</option>
                      <option value="9">9</option>
                      <option value="10">10</option>
                    </select>
                  </div>
                </div>
                <button className='order-detail-product-remove btn btn-danger'>remove</button>
              </div>
           </div>
        
          </div>
          <div className="price-detail d-flex flex-column" id="price-detail">
            <div className="price-detail-box">
              {/* <!-- todo   --> */}
              <div className="price-detail-tittle fw-bold">Price detail</div>
              <div className="price-detail-data">
                <div
                  className="price-detail-data-item d-flex flex-row justify-content-between"
                >
                  <div>price</div>
                  <div id="total-price"></div>
                </div>
                <div
                  className="price-detail-data-item d-flex flex-row justify-content-between"
                >
                  <div>Discount</div>
                  <div>&#8377; 10</div>
                </div>
                <div
                  className="price-detail-data-item d-flex flex-row justify-content-between"
                >
                  <div>Delivery charges</div>
                  <div>free</div>
                </div>
                <hr/>
                <div
                  className="price-detail-data-item d-flex flex-row justify-content-between"
                >
                
                  <div>Total</div>
                  <div id="net-price"></div>
                </div>
              </div>
            </div>
            <div className="continue-shoping-btn">
              <a
                href="product-list.html"
                className="continue-shopping btn btn-info text-decoration-none" >
                  Continue shopping
              </a>
              <Link
                to="/Checkout"
                className="Checkout-btn btn btn-primary text-decoration-none">
                 CheckOut
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
        </div>
    )
}