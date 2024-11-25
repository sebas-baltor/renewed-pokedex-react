import React from 'react';

interface TitleProps extends React.HTMLAttributes<HTMLHeadingElement> {
    text: string;
}

const Title: React.FC<TitleProps> = ({ text,className,...props }) => {
    return (
        <h1 {...props} className={`${className} uppercase w-full text-center text-4xl font-bold text-white/80`}>
             {text}
        </h1>
    );
};

export default Title;