"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export function HoverBorderGradient({
    children,
    containerClassName,
    className,
    as: Tag = "button",
    ...props
}: React.PropsWithChildren<
    {
        as?: React.ElementType;
        containerClassName?: string;
        className?: string;
    } & React.HTMLAttributes<HTMLElement>
>) {
    const [hovered, setHovered] = useState<boolean>(false);

    return (
        <Tag
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            className={cn(
                "relative flex rounded-full border border-transparent content-center bg-transparent items-center flex-col flex-nowrap h-min justify-center overflow-visible p-px w-fit group",
                containerClassName
            )}
            {...props}
        >
            {/* Inner content */}
            <div
                className={cn(
                    "w-auto text-black z-10 bg-white px-6 py-2.5 rounded-[inherit] font-medium text-sm transition-all duration-300 group-hover:bg-gray-50",
                    className
                )}
            >
                {children}
            </div>

            {/* Subtle border that appears on hover */}
            <motion.div
                className="absolute inset-0 rounded-[inherit] z-0"
                initial={{ opacity: 0 }}
                animate={{
                    opacity: hovered ? 1 : 0,
                }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                style={{
                    background: "linear-gradient(135deg, hsl(197, 62%, 72%) 0%, hsl(38, 45%, 91%) 50%, hsl(197, 62%, 72%) 100%)",
                    padding: "1px",
                    borderRadius: "inherit",
                }}
            />

            {/* Soft glow effect on hover */}
            <motion.div
                className="absolute inset-0 rounded-[inherit] z-[-1]"
                initial={{ opacity: 0, scale: 1 }}
                animate={{
                    opacity: hovered ? 0.4 : 0,
                    scale: hovered ? 1.05 : 1,
                }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                style={{
                    background: "radial-gradient(circle, hsl(197, 62%, 72%) 0%, transparent 70%)",
                    filter: "blur(12px)",
                }}
            />

            {/* White background to cover the gradient border inside */}
            <div className="bg-white absolute z-[1] inset-[1px] rounded-[inherit] group-hover:bg-gray-50 transition-colors duration-300" />
        </Tag>
    );
}
