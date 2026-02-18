import { Link } from 'react-router-dom'
import './ProductBox.css'

function ProductBox({productImage, name, price}){
    return (
        <div>
             <Link  
             to='/products/2'
             href="product-detail.html" 
             target="_blank" 
             className="product-item text-decoration-none d-inline-block">
                    <div className="product-image">
                        <img src={productImage} alt="" />
                    </div>
                <div className="product-name text-center">{name}</div>
                <div className="product-price text-center">{price}</div>
             </Link> 
        </div>
    )
}
export default ProductBox