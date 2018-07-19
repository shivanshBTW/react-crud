import React from 'react';
import ProductCount from './ProductCount/ProductCount';
import ProductList from './ProductList/ProductList';
export const OutputComponent = (props)=>{
    return (
        <div className="col-lg-6 col-md-6 col-sm-6 col-6 " >
            <div className="container" style={{border:'1px solid grey'}}>
                <ProductCount displayData={props.displayData}/>
                <ProductList displayData={props.displayData}/>
            </div>
        </div>
    )
}