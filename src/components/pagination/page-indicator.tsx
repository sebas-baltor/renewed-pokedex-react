import {HTMLAttributes} from 'react';

export default function PageIndicator({className,page,isActive, ...props}:HTMLAttributes<HTMLSpanElement> & {page:number,isActive:boolean}) {
    return (
        <span {...props} className={`${className} h-10 w-10 rounded-lg border flex justify-center items-center bg-opacity-20 col-start-2 font-bold ${isActive? "border-white/50 bg-white text-white " : "border-indigo-600 text-indigo-500"}`}>{page}</span>
    )
}