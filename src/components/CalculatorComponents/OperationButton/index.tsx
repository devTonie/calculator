import React from 'react';

interface IProps {
    children: React.ReactNode;
    onClick: (event: any) => void;
}
const OperationButton: React.FC<IProps> = ({
    children,
    onClick,
}) => {
    return <button
     className='bg-purple-400 text-gray-800 w-26 h-16 rounded-md hover:opacity-80 text-xl'
     onClick={(event) => onClick(event)}
    >
        {children}
    </button>
}

export default OperationButton;