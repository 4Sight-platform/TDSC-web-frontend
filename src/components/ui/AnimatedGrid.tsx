interface AnimatedGridProps {
    className?: string;
}

const AnimatedGrid = ({ className = '' }: AnimatedGridProps) => {
    return (
        <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
            <div
                className="absolute inset-0"
                style={{
                    backgroundImage: `
            linear-gradient(rgba(99, 102, 241, 0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(99, 102, 241, 0.03) 1px, transparent 1px)
          `,
                    backgroundSize: '60px 60px',
                    maskImage: 'radial-gradient(ellipse at center, black 20%, transparent 70%)',
                    WebkitMaskImage: 'radial-gradient(ellipse at center, black 20%, transparent 70%)',
                }}
            />
        </div>
    );
};

export default AnimatedGrid;
