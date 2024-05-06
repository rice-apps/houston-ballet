import React from 'react'
function VendorDescription(props : {description : string}) {
    return (
        <div className="relative flex flex-col text-gray-700 bg-gray-100 shadow-lg w-96 rounded-xl bg-clip-border font-Figtree min-h-[240px] border border-gray-200" aria-labelledby="vendor-description-title">
            <div className="p-6">
                <h5 id="vendor-description-title" className="block mb-2 text-xl antialiased font-bold leading-snug tracking-wider text-slate-900">
                DESCRIPTION
                </h5>
                <p className="block font-sans text-base antialiased font-light leading-relaxed text-inherit">
                    {props.description}
                </p>
            </div>
        </div>
      );
};

export default VendorDescription;