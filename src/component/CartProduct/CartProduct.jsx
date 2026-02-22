export default function CartProduct({productImage, data, price}){

    const Option = [1,2,3,4,5,6,7,8,9,10];
    

    return(
        <div>
             <div className="order-deatil-product d-flex flex-row ps-5">
              <div className="order-detail-product-Image d-flex m-2">
                <img src={productImage} alt="phone" /> 
              </div>
              <div className="order-detail-product-data d-flex flex-column justify-content-center">
                <div>{data}</div>
                <div>{price}</div>
              </div>
              <div className="order-detail-product-action d-flex flex-column">
                <div className="order-detail-product-quality">
                  <div className="fw-bold">Quantity</div>
                  <div className="form-group">
                    <select className='form-select'>
                    {Option.map(optionValue => 
                    <option key={optionValue} value={optionValue}>{optionValue}</option>)}
                    </select>
                  </div>
                </div>
                <button className='order-detail-product-remove btn btn-danger'>remove</button>
              </div>
           </div>
        </div>
    )
}