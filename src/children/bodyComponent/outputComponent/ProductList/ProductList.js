import React from 'react';
import './ProductList.css'
// import PropTypes from 'prop-types';

const ProductList = props => {
    return (
        <div>
            <table className="table table-bordered">
                <thead>
                    <tr>
                        <td>Product ID</td>
                        <td>Name</td>
                        <td>Price</td>
                        <td>Image</td>
                        <td>Add to Cart</td>
                    </tr>
                </thead>
                <tbody id="itemTable" className="table-stdiped">
                    {props.displayData.map(mobile=>{
                        return <tr key={mobile.id}>
                                    <td>{mobile.id}</td>
                                    <td>{mobile.name}</td>
                                    <td>{mobile.price}</td>
                                    <td><img className="productImage" src={mobile.url} alt={mobile.name}/></td>
                                    <td><button  className="fas fa-cart-plus btn btn-light" pid={mobile.id}></button></td>
                                </tr>
                    })}
                </tbody>
            </table>
        </div>
    );
};

export default ProductList;