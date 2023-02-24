import React from 'react';
import { ArrowsRightLeftIcon } from '@heroicons/react/24/outline';

interface IProps {
    onClick: () => void;
}
const FlipButton: React.FC<IProps> = ({
    onClick,
}) => {
    return <div onClick={onClick}>
        <ArrowsRightLeftIcon className='w-12 h-12 mt-12 hover:bg-gray-200 hover:cursor-pointer rounded-full p-2'/>
    </div>
};

export default FlipButton;