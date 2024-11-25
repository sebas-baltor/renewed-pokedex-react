export default function Badge({ children, className, ...props } : React.HTMLAttributes<HTMLSpanElement>){
    return (
        <span {...props} className={`${className} bg-indigo-600 text-white font-bold text-xs px-2 py-1 rounded-full`}>
        {children}
        </span>
    );
}