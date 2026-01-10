import { motion } from 'framer-motion';

interface FloatingOrbsProps {
    className?: string;
}

const FloatingOrbs = ({ className = '' }: FloatingOrbsProps) => {
    return (
        <div className={`absolute inset-0 pointer-events-none overflow-hidden ${className}`}>
            {/* Primary large orb - top left */}
            <motion.div
                className="absolute top-[10%] left-[15%] w-[300px] h-[300px] md:w-[400px] md:h-[400px] rounded-full"
                style={{
                    background: 'rgba(99, 102, 241, 0.4)',
                    filter: 'blur(80px)',
                }}
                animate={{
                    y: [0, -20, 0],
                    x: [0, 10, 0],
                }}
                transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: 'easeInOut',
                }}
            />

            {/* Secondary orb - bottom right */}
            <motion.div
                className="absolute top-[60%] right-[10%] w-[200px] h-[200px] md:w-[300px] md:h-[300px] rounded-full"
                style={{
                    background: 'rgba(139, 92, 246, 0.35)',
                    filter: 'blur(80px)',
                }}
                animate={{
                    y: [0, 30, 0],
                    x: [0, -15, 0],
                }}
                transition={{
                    duration: 7,
                    repeat: Infinity,
                    ease: 'easeInOut',
                }}
            />

            {/* Tertiary orb - bottom center */}
            <motion.div
                className="absolute bottom-[10%] left-[40%] w-[250px] h-[250px] md:w-[350px] md:h-[350px] rounded-full"
                style={{
                    background: 'rgba(168, 85, 247, 0.22)',
                    filter: 'blur(80px)',
                }}
                animate={{
                    y: [0, -25, 0],
                    x: [0, 20, 0],
                }}
                transition={{
                    duration: 6,
                    repeat: Infinity,
                    ease: 'easeInOut',
                }}
            />
        </div>
    );
};

export default FloatingOrbs;
