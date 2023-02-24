import React from 'react';

interface IProps {
    children: React.ReactNode;
    onClick: (event: any) => void;
}
const NumericButton: React.FC<IProps> = ({
    children,
    onClick,
}) => {
    return <button 
        className='bg-blue-300 text-gray-800 w-26 h-16 rounded-md hover:opacity-80'
        onClick={(event) => onClick(event)}
    >
        {children}
    </button>
}

export default NumericButton;