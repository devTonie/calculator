import React from 'react';

interface IProps {
    children: React.ReactNode;
    onClick: (event: any) => void;
}
const EqualButton: React.FC<IProps> = ({
    children,
    onClick,
}) => {
    return <button 
        className='bg-yellow-500 text-gray-800 w-26 h-16 rounded-md hover:opacity-80'
        onClick={(event) => onClick(event)}
    >
        {children}
    </button>
}

export default EqualButton;