import React from 'react'
import '../Style/Home.css'
import Product from './Product'
function Home() {
  return (
    <div className='home'>
        <div className="home__container">
          <img className='home__image' src='https://m.media-amazon.com/images/I/61jovjd+f9L._SX3000_.jpg'
           alt=''/>
           <div className="home__row">
            <Product 
              id="23213234"
              title='The lean startup'
              image="https://m.media-amazon.com/images/I/81SrwYY-6-L._AC_UY327_FMwebp_QL65_.jpg"
              price = {29.99}
              rating={3}
              />
            <Product
              id="23213235"
              title='The lean startup'
              image="https://m.media-amazon.com/images/I/81SrwYY-6-L._AC_UY327_FMwebp_QL65_.jpg"
              price = {29.99}
              rating={3}
              />
          </div>
          <div className="home__row">
            <Product 
              id="23213236"
              title='The lean startup'
              image="https://m.media-amazon.com/images/I/81SrwYY-6-L._AC_UY327_FMwebp_QL65_.jpg"
              price = {29.99}
              rating={3}
              />
            <Product
              id="23213237"
              title='The lean startup'
              image="https://m.media-amazon.com/images/I/81SrwYY-6-L._AC_UY327_FMwebp_QL65_.jpg"
              price = {29.99}
              rating={3}
              />
            <Product
              id="23213239"
              title='The lean startup'
              image="https://m.media-amazon.com/images/I/81SrwYY-6-L._AC_UY327_FMwebp_QL65_.jpg"
              price = {29.99}
              rating={3}
              />
          </div>
          <div className="home__row">
            
            <Product
              id="23213222"
              title='The lean startup'
              image="https://m.media-amazon.com/images/I/81SrwYY-6-L._AC_UY327_FMwebp_QL65_.jpg"
              price = {29.99}
              rating={2}
              />
          </div>
        </div>
      
      



      
    </div>
  )
}

export default Home
