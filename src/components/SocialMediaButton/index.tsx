import React from 'react';

interface IProps {
    href: string;
    children?: React.ReactNode; 
}
const SocialMediaButton: React.FC<IProps> = ({
    children,
    href,
}) => {
    return <a href={href} className="" target="_blank" rel="noreferrer">
        {children}
    </a>
};

export default SocialMediaButton;