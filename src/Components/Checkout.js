import React from 'react';
import "../Style/Checkout.css";
import Subtotal from  './Subtotal';


function Checkout() {
  return (
    <div className='checkout'>
        <div className="checout__left">
            <div>
                <h2 className="checkout__title">
                    Your Shopping Basket
                </h2>
                {/*BasketItem */}
                {/*BasketItem */}
                {/*BasketItem */}
                {/*BasketItem */}
            </div>
        </div>     
        <div className="checout__Right">
            <Subtotal/>
              
                
            
        </div>  
        
    </div>
  )
}

export default Checkout
