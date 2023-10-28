import React from 'react';

function VendorHeader(HeaderProps:{height: number;}) {
    return (
        <div className='bg-white h-40'>
            <div className='flex flex-row'>
                <div className='flex flex-col'>
                    <h1 className='ml-10 mt-6 font-bold text-gray-900 text-5xl tracking-widest '>SELECTED VENDOR</h1>
                    <div className='ml-10 mt-8 flex flex-row'>
                        <button className="h-10 px-5 mr-5 text-gray-400 transition-colors duration-150 border border-gray-400 rounded-lg focus:shadow-outline hover:bg-gray-500 hover:text-white">Category</button>
                        <button className="h-10 px-5 mr-5 text-gray-400 transition-colors duration-150 border border-gray-400 rounded-lg focus:shadow-outline hover:bg-gray-500 hover:text-white">Category</button>
                        <button className="h-10 px-5 mr-5 text-gray-400 transition-colors duration-150 border border-gray-400 rounded-lg focus:shadow-outline hover:bg-gray-500 hover:text-white">Category</button>
                    </div>
                </div>
                <div className='ml-96 mt-6 flex flex-col'>
                    <button className="inline-flex items-center mb-4 outline outline-1 h-10 px-5 text-gray-900 font-bold transition-colors duration-150 bg-gray-200 rounded-lg focus:shadow-outline hover:bg-gray-300">
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 mr-3 fill-current" height="24" viewBox="0 -960 960 960" width="24"><path d="m354-247 126-76 126 77-33-144 111-96-146-13-58-136-58 135-146 13 111 97-33 143ZM233-80l65-281L80-550l288-25 112-265 112 265 288 25-218 189 65 281-247-149L233-80Zm247-350Z"/></svg>
                        <span>Star Venue</span>
                    </button>
                    <button className="inline-flex items-center outline outline-1 h-10 px-5 text-gray-900 font-bold transition-colors duration-150 bg-gray-200 rounded-lg focus:shadow-outline hover:bg-gray-300">
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 mr-3 fill-current" height="24" viewBox="0 -960 960 960" width="24"><path d="m600-120-240-84-186 72q-20 8-37-4.5T120-170v-560q0-13 7.5-23t20.5-15l212-72 240 84 186-72q20-8 37 4.5t17 33.5v560q0 13-7.5 23T812-192l-212 72Zm-40-98v-468l-160-56v468l160 56Zm80 0 120-40v-474l-120 46v468Zm-440-10 120-46v-468l-120 40v474Zm440-458v468-468Zm-320-56v468-468Z"/></svg>
                        <span>Open Map</span>
                    </button>
                </div>
            </div>
        </div>
    ); 
};

export default VendorHeader;