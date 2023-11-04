import React from 'react';
function VendorProducts(ProductProps:{height: number;}){
    return(
        <div className={`flex flex-col bg-white h-${ProductProps.height}`}>
            <h1 className='ml-10 tracking-widest font-bold text-gray-900'>PRODUCT HIGHLIGHTS</h1>
        </div>
    );
};

export default VendorProducts;