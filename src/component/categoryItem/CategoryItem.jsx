import { Link } from "react-router-dom";

function CategoryItem({ItemName, filter=''}){
    const redirectProduct = `/products?category=${filter}`;
    return (
        <div>
             {/* <!-- List of items  --> */}
            <div className="category-item  d-flex justify-content-center align-item-center">
                 <Link to={redirectProduct}>{ItemName}</Link>
            </div>
        </div>
    )
}
export default CategoryItem;