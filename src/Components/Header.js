import React from 'react';
import '../Style/Header.css';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import { Link } from 'react-router-dom';



function Header() {
  return (
    <div class="Header">
        <div className='Header__logoContainer'>
            <Link to="/Home">
                <img className='Header__logo' src = "http://pngimg.com/uploads/amazon/amazon_PNG11.png"/>
            </Link>
            
        </div>
        
        <div className="Header_Search">
            <input type="text" className='Header__SearchInput'/>
            <SearchIcon  className="Header__SearchIcon" fontSize="large"/>

        </div>  
        <div className='header__nav'>    
            <div className='header_options'>
                <span className='header__lineOne'>
                    Hello Guest
                </span>
                <span className='header__lineTwo'>
                    Sign In
                </span>
            </div>
            <div className='header_options'>
                <span className='header__lineOne'>
                    Return
                </span>
                <span className='header__lineTwo'>
                    & Orders
                </span>
            </div>
            <div className='header_options'>
                <span className='header__lineOne'>
                    Your
                </span>
                <span className='header__lineTwo'>
                    Prime
                </span>
            </div>
            <Link to="/Checkout">
                <div className='header_optionBasket'>
                    

                    <ShoppingBasketIcon className='Header__optionBasketIcon'/>
                    
                    
                    <span className='header__lineTwo head__basketCount'>0</span>
                </div>
            </Link>
            
        </div>      
    </div>
  )
}

export default Header
