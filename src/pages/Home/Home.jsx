import { useEffect, useState } from 'react';
import CategoryItem from '../../component/categoryItem/CategoryItem'
import './Home.css'
import axios from 'axios';
import { getALLCategories } from '../../apis/fakeStoreProductApis';

function Home(){
    const[categeries, setCategeries] = useState(null)
 
    async function downloadCategeries(){
        const response = await axios.get(getALLCategories());
        setCategeries(response.data)
    }

    useEffect(() =>{
        downloadCategeries();
    }, [])

    return(
        <div>
        {/* // <!-- main text  --> */}
        <div className="container div-wrapper">
           <div className="row ">
               <h2 className="home-tittle text-center">Welcome to shop Cart</h2>
               <div className="category-list  d-flex flex-row justify-content-between align-item-center" id="categoryList">
                  <CategoryItem ItemName="All Products"/>
                  {categeries && categeries.map(category =>  <CategoryItem ItemName={category} kdy={category}/>)}
                    
               </div>
               <div className="category-tittle text-center">
                   select a category to start shoping
               </div>
           </div>
        </div>
    </div>
    )
}
export default Home;