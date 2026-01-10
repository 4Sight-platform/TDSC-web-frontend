"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface GlowCardProps {
    children: React.ReactNode;
    className?: string;
    containerClassName?: string;
    glowColor?: string;
    hoverScale?: number;
}

export const GlowCard: React.FC<GlowCardProps> = ({
    children,
    className,
    containerClassName,
    glowColor = "hsl(197, 62%, 72%)",
    hoverScale = 1.02,
}) => {
    const [isHovered, setIsHovered] = useState(false);
    const [mousePosition, setMousePosition] = useState({ x: 50, y: 50 });

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const x = ((e.clientX - rect.left) / rect.width) * 100;
        const y = ((e.clientY - rect.top) / rect.height) * 100;
        setMousePosition({ x, y });
    };

    return (
        <motion.div
            className={cn("relative group", containerClassName)}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            onMouseMove={handleMouseMove}
            animate={{ scale: isHovered ? hoverScale : 1 }}
            transition={{ type: "spring", stiffness: 400, damping: 25 }}
        >
            {/* Animated glow border */}
            <motion.div
                className="absolute -inset-[1px] rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                animate={{
                    background: isHovered
                        ? `radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, ${glowColor} 0%, transparent 60%)`
                        : "transparent",
                }}
                style={{
                    filter: "blur(8px)",
                }}
            />

            {/* Border gradient */}
            <motion.div
                className="absolute -inset-[1px] rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{
                    background: `linear-gradient(135deg, ${glowColor} 0%, transparent 50%, ${glowColor} 100%)`,
                    backgroundSize: "200% 200%",
                }}
                animate={{
                    backgroundPosition: isHovered ? ["0% 0%", "100% 100%"] : "0% 0%",
                }}
                transition={{
                    duration: 2,
                    repeat: Infinity,
                    repeatType: "reverse",
                }}
            />

            {/* Card content */}
            <div
                className={cn(
                    "relative rounded-2xl bg-white/90 dark:bg-zinc-900/90 backdrop-blur-sm overflow-hidden",
                    className
                )}
            >
                {children}

                {/* Shimmer effect */}
                <motion.div
                    className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100"
                    animate={{
                        background: isHovered
                            ? `linear-gradient(105deg, transparent 40%, rgba(255,255,255,0.2) 50%, transparent 60%)`
                            : "transparent",
                        backgroundPosition: isHovered ? ["200% 0", "-200% 0"] : "200% 0",
                    }}
                    transition={{
                        backgroundPosition: {
                            duration: 1.5,
                            repeat: Infinity,
                            ease: "linear",
                        },
                    }}
                    style={{ backgroundSize: "200% 100%" }}
                />
            </div>
        </motion.div>
    );
};

export default GlowCard;
