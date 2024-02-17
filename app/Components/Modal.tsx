import React from 'react';

type propTypes = {
    open: boolean;
    onClose: () => void;
    children: React.ReactNode;
}

const Modal: React.FC<propTypes> = ({ open, onClose, children }) => {

    if (!open) return null;

    const stopPropagation = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        event.stopPropagation();
    };

    return (
        <div onClick={onClose} className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <div onClick={stopPropagation} className="bg-white p-4 rounded-lg">
                {children}
            </div>
        </div>
    );
};

export default Modal;
