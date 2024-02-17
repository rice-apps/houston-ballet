'use client';

import React, {useState} from "react";
import Modal from "./Modal";
import VendorImages from './VendorImages';

export default function ImageGrid() {

    const sideLength: number = 36;
    const [open, setOpen] = useState<boolean>(false);

    return (
        <div className="grid grid-cols-3 gap-4">
            <div>
                <img className={`object-cover h-${sideLength} w-${sideLength} rounded-lg`} src="/alaska_fur.png" alt=""/>
            </div>
            <div>
                <img className={`object-cover h-${sideLength} w-${sideLength} rounded-lg`} src="/art_by_amy.png" alt=""/>
            </div>
            <div>
                <img className={`object-cover h-${sideLength} w-${sideLength} rounded-lg`} src="/bear_creek.png" alt=""/>
            </div>
            <div>
                <img className={`object-cover h-${sideLength} w-${sideLength} rounded-lg`} src="/akfurgallery4.png" alt=""/>
            </div>
            <div>
                <img className={`object-cover h-${sideLength} w-${sideLength} rounded-lg`} src="/boutique.jpg" alt=""/>
            </div>
            <div className='relative'>
                <img className={`object-cover h-${sideLength} w-${sideLength} rounded-lg`} src="/china_baroque.png"
                     alt=""/>
                <div className='absolute inset-0 bg-black opacity-50 rounded-lg'></div>
                <div className='absolute inset-0 flex items-center justify-center text-white text-lg font-semibold' onClick={() => setOpen(true)}>SEE<br></br>MORE...</div>
            </div>
            <Modal open={open} onClose={() => setOpen(false)}>
                <VendorImages />
            </Modal>
        </div>
    );
};