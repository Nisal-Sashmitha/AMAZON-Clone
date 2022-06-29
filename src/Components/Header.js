import React from 'react';
import '../Style/Header.css';
import SearchIcon from '@mui/icons-material/Search';
import { cyan } from '@mui/material/colors';


function Header() {
  return (
    <div class="Header">
        <div className='Header__logoContainer'>
        <img className='Header__logo' src = "http://pngimg.com/uploads/amazon/amazon_PNG11.png"/>
        </div>
        
        <div className="Header_Search">
            <input type="text" className='Header__SearchInput'/>
            <SearchIcon  className="Header__SearchIcon" fontSize="large" sx={{ color: cyan[500] }}/>

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
            <div className='header_options'></div>
        </div>      
    </div>
  )
}

export default Header
