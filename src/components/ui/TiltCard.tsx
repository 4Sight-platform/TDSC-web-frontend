"use client";
import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface TiltCardProps {
    children: React.ReactNode;
    className?: string;
    containerClassName?: string;
    tiltAmount?: number;
    glowColor?: string;
}

export const TiltCard: React.FC<TiltCardProps> = ({
    children,
    className,
    containerClassName,
    tiltAmount = 10,
    glowColor = "rgba(142, 202, 230, 0.4)",
}) => {
    const cardRef = useRef<HTMLDivElement>(null);
    const [rotateX, setRotateX] = useState(0);
    const [rotateY, setRotateY] = useState(0);
    const [isHovered, setIsHovered] = useState(false);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!cardRef.current) return;
        const rect = cardRef.current.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        const mouseX = e.clientX - centerX;
        const mouseY = e.clientY - centerY;

        const rotateXValue = (mouseY / (rect.height / 2)) * -tiltAmount;
        const rotateYValue = (mouseX / (rect.width / 2)) * tiltAmount;

        setRotateX(rotateXValue);
        setRotateY(rotateYValue);
    };

    const handleMouseLeave = () => {
        setRotateX(0);
        setRotateY(0);
        setIsHovered(false);
    };

    return (
        <div className={cn("perspective-1000", containerClassName)}>
            <motion.div
                ref={cardRef}
                onMouseMove={handleMouseMove}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={handleMouseLeave}
                animate={{
                    rotateX,
                    rotateY,
                    scale: isHovered ? 1.02 : 1,
                }}
                transition={{
                    type: "spring",
                    stiffness: 300,
                    damping: 20,
                }}
                style={{
                    transformStyle: "preserve-3d",
                    boxShadow: isHovered
                        ? `0 25px 50px -12px ${glowColor}, 0 0 30px ${glowColor}`
                        : "0 10px 40px -15px rgba(0,0,0,0.1)",
                }}
                className={cn(
                    "relative rounded-2xl transition-shadow duration-300",
                    className
                )}
            >
                {children}
                {/* Shine effect overlay */}
                <motion.div
                    className="absolute inset-0 rounded-2xl pointer-events-none"
                    animate={{
                        background: isHovered
                            ? `linear-gradient(${105 + rotateY * 2}deg, transparent 40%, rgba(255,255,255,0.15) 50%, transparent 60%)`
                            : "transparent",
                    }}
                    transition={{ duration: 0.3 }}
                />
            </motion.div>
        </div>
    );
};

export default TiltCard;
