import React from 'react' 
import Cart from './Cart/Cart';
export const Headertop = ()=>{ 
    return (
    <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <a className="navbar-brand" href="#">
            React CRUD
        </a>       
        <div>
            <Cart/>
        </div> 
    </nav>
    </div>
    );
}