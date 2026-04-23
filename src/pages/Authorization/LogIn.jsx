// import css
import { useRef } from 'react';
import Auth from '../../component/Auth/Auth'
import './Auth.css';
import Cookies from 'js-cookie';
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios';
import { signin } from '../../apis/fakeStoreProductApis';
import { useCookies } from 'react-cookie';
import { jwtDecode } from "jwt-decode";



export default function LogIn(){

    const authRef = useRef(null);
    const navigate = useNavigate();
    const [token, setToken] = useCookies(['jwt-token'])

    async function onAuthFormSubmit(formDetails) {
        try{
            const response = await axios.post(signin(),{
                username : formDetails.username,
                email : formDetails.email,
                password : formDetails.password 
            })
            // console.log(response)
            const tokenDecode = jwt_decode(response.data.token);
            console.log(tokenDecode);
            setToken('jwt-token', response.data.token)
            console.log(token);
            navigate('/');
        }
        catch(error){
            authRef.current.resetFormData();
            console.log(error);
        }
    }



    return(
        <div className="container">
             <div className="row">
                <h2 className="home-tittle text-center">
                WELCOME TO CART
                </h2>
            </div>
            <div className="container-info">
            <div className="Loginwrapper" id="LoginForm">
            <h2 className='Login text-center'>Login</h2>
                <Auth onSubmit={onAuthFormSubmit} ref={authRef}/>    
            <div className="signup-btn text-center text-info" id="showSignupBtn" >Don't have an Account? Sign up</div>
            <div className="signup text-center">
                <Link to='/signup'>Logout</Link>
            </div>
        </div>
    </div>
</div>
    )
}