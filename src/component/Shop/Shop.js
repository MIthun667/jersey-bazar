import React, { useState } from 'react'
import './Shop.css';
import fakeData from '../fakeData';
import Product from '../Product/Product';
import Cart from '../Cart/Cart';
function Shop() {
    const first10 = fakeData.slice(0, 20);
    const [products]= useState(first10);
    const [cart, setCart] = useState([]);

    const handleAddProduct = (product)=>{
        console.log("Product added", product);
        const newCart = [...cart, product];
        setCart(newCart);
    }
        return (
        <div className = "shop-container">
            <div className="products-container">     
                 {
                    products.map(pd =>
                        <Product 
                        handleAddProduct ={handleAddProduct}
                        product={pd}>
                        </Product>)
                 }
            </div>
            <div className="cart-container">
              <Cart cart={cart}></Cart>
            </div>
            
        </div>
    );
}

export default Shop;
