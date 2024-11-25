import { ReactNode } from "react";

export interface StatLineProps extends React.HTMLAttributes<HTMLDivElement> {
    icon: ReactNode;
    bgColor: string;
    color: string;
    stat:any
}

export default function StatLine({ icon,bgColor,color,stat }:StatLineProps) {
    return (
        <div className={`w-full flex gap-2 flex-nowrap items-center`}>
            <span className={`${color} drop-shadow-sm`}>{icon}</span>
            <div className="h-5 w-full bg-white bg-opacity-20 overflow-hidden rounded-lg">
                <div className={`${bgColor} h-full rounded-lg relative`} style={{ width: `${stat.base_stat / 2}%` }}>
                <span className="text-xs md:text-sm absolute top-1/2 right-5 text-white font-bold -translate-y-1/2">{stat.base_stat} %</span>
                </div>
            </div>
        </div>
    )
}