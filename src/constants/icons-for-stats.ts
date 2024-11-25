import { Footprints, HeartPulse, Shield, ShieldQuestion, Sparkles, Sword } from "lucide-react";

export const iconsForStats = [
    {
        // hp
        icon: HeartPulse,
        bgColor: "bg-red-500",
        color: "text-red-500",
    },
    {
        // attack
        icon: Sword,
        bgColor: "bg-orange-500",
        color: "text-orange-500",

    },
    {
        // defense
        icon: Shield,
        bgColor: "bg-slate-300",
        color: "text-slate-300",

    },
    {
        // special attack
        icon: Sparkles,
        bgColor: "bg-yellow-300",
        color: "text-yellow-300",

    },
    {
        // special defense
        icon: ShieldQuestion,
        bgColor: "bg-fuchsia-500",
        color: "text-fuchsia-500",

    },
    {
        // speed
        icon: Footprints,
        bgColor: "bg-cyan-500",
        color: "text-cyan-500",

    },
];