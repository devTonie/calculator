import React from 'react';

interface IProps {
    onClick: () => void;
    children: React.ReactNode;
}
const NavigationButton: React.FC<IProps> = ({
    onClick,
    children,
}) => {
    return <button className='w-full my-2 bg-white/10 p-7 text-left font-Lobster text-2xl font-semibold tracking-widest text-indigo-800 hover:bg-gray-200/40 outline-none' onClick={onClick}>
        {children}
    </button>
};

export default NavigationButton;