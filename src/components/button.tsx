import { ButtonHTMLAttributes } from "react";
export default function Button({ children,className,...props } : ButtonHTMLAttributes<HTMLButtonElement>){
    return (
        <button {...props} className={`${className}  text-white font-bold py-2 px-4 rounded inline-flex justify-center gap-2 items-center`}>
        {children}
        </button>
    );
}

export function ButtonGhost({ children, className,...props } : ButtonHTMLAttributes<HTMLButtonElement>){
    return (
        <button {...props} className={`${className} outline-none border-0 text-white hover:text-indigo-300 font-bold py-2 px-4 rounded inline-flex justify-center gap-2 items-center`}>
        {children}
        </button>
    );
}