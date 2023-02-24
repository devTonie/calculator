import React from 'react';
import './wrapper.css';

interface IProps {
    className?: string
    children: React.ReactNode;
}
const AnimatedWrapper: React.FC<IProps> = ({
    className,
    children,
}) => {
    return <div className='grid grid-col-1'>
        <div className="area" >
            <ul className="circles">
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
            </ul>
        </div>
        <div className={className}>
            {children}
        </div>
    </div>
};

export default AnimatedWrapper;