import React from "react";
function VendorProducts(ProductProps: { height: number }) {
    return (
        <section
            className={`flex flex-col bg-white h-${ProductProps.height}`}
            aria-labelledby="product-highlights-title"
        >
            <h1
                id="product-highlights-title"
                className="ml-10 font-bold tracking-widest text-gray-900"
            >
                PRODUCT HIGHLIGHTS
            </h1>
        </section>
    );
}

export default VendorProducts;
