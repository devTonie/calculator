import React from 'react';
import clsx from 'clsx';

interface IProps {
    className?: string;
    isHistory?: boolean;
    children: React.ReactNode;
}
const CustomWrapper: React.FC<IProps> = ({
    children,
    className,
    isHistory,
}) => {
    return <div className={clsx('w-full h-fit bg-gray-200/40 rounded-md p-6', { 'flex justify-between': !isHistory, }, className)}>
        {children}
    </div>
};

export default CustomWrapper;