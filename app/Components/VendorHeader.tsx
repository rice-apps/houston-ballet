import React from "react";

function VendorHeader(props: { vendorName: string; tags: string[] }) {
  return (
    <div className="flex flex-col">
      {/* Back button */}
      <div className="pt-5 pl-10 pb-5">
        <button className="inline-flex items-center mt-7 h-10 px-5 text-white transition-colors duration-150 bg-slate-700 rounded-lg focus:shadow-outline hover:bg-slate-800">
          <svg
            className="w-4 h-4 mr-3 fill-current"
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M4.17294 8.91666L9.30627 14.05L8.00002 15.3333L0.666687 8L8.00002 0.666664L9.30627 1.95L4.17294 7.08333H15.3334V8.91666H4.17294Z"
              fill="#F1F1F1"
            />
          </svg>
          <span>Back</span>
        </button>
      </div>
      {/*Vendor Name*/}
      <div className="flex flex-row">
        <h1 className="ml-10 text-4xl mt-8 tracking-widest font-extrabold text-gray-900">
          {props.vendorName}
        </h1>
        <svg
          className="stroke-current ml-6 mt-8 text-slate-950"
          width="49"
          height="36"
          viewBox="0 0 49 47"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M24.5 2L31.1756 16.4695L47 18.347L35.3005 29.1647L38.406 44.7956L24.5 37.0124L10.594 44.7977L13.6995 29.1669L2 18.3449L17.8266 16.4674L24.5 2Z"
            stroke-width="3.22596"
            stroke-linejoin="round"
          />
        </svg>
      </div>
      {/*Buttons*/}
      <div className="flex flex-row pt-5 pl-10 gap-x-3">
        {/*Tags*/}
        {props.tags?.map((i) => (
          <button
            className="h-10 px-5 text-gray-600 transition-colors duration-150 border border-gray-600 rounded-lg focus:shadow-outline hover:bg-gray-600 hover:text-indigo-100"
            key={i}
          >
            {i}
          </button>
        ))}
      </div>
    </div>
  );
}

export default VendorHeader;