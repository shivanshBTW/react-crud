import React from 'react';
// import PropTypes from 'prop-types';

const ProductCount = props => {
    
    return (
        <div>            
            <p>The Total number of entries are :{props.displayData.length}</p>
        </div>
    );
};

export default ProductCount;