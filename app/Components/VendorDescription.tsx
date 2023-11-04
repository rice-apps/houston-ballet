import React from 'react'

function VendorDescription(DesciptionProps: {height: number;}) {
    return (
        <div className={`flex flex-col bg-white h-${DesciptionProps.height}`}>
            <h1 className='ml-10 tracking-widest font-bold text-gray-900'>DESCRIPTION</h1>
            <h1 className='ml-10 mt-6 tracking-widest font-bold text-gray-600'>Example Text Here</h1> 
            <div className='flex flex-row'>
                <svg className="w-40 h-40" xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h560q33 0 56.5 23.5T840-760v560q0 33-23.5 56.5T760-120H200Zm0-80h560v-560H200v560Z"/></svg>
            </div>
        </div>
    );
};

export default VendorDescription;