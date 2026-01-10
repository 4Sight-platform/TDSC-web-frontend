import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export function ThemeToggle() {
    const { theme, setTheme, resolvedTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    // Avoid hydration mismatch
    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) {
        return (
            <button className="w-9 h-9 rounded-lg bg-muted/50 flex items-center justify-center">
                <Sun className="w-4 h-4 text-foreground/50" />
            </button>
        );
    }

    const isDark = resolvedTheme === "dark";

    return (
        <button
            onClick={() => setTheme(isDark ? "light" : "dark")}
            className="relative w-9 h-9 rounded-lg bg-muted/50 hover:bg-muted flex items-center justify-center transition-all duration-300 group overflow-hidden"
            aria-label={`Switch to ${isDark ? "light" : "dark"} mode`}
        >
            <Sun
                className={`w-4 h-4 absolute transition-all duration-300 ${isDark
                        ? "rotate-90 scale-0 opacity-0"
                        : "rotate-0 scale-100 opacity-100 text-amber-500"
                    }`}
            />
            <Moon
                className={`w-4 h-4 absolute transition-all duration-300 ${isDark
                        ? "rotate-0 scale-100 opacity-100 text-indigo-400"
                        : "-rotate-90 scale-0 opacity-0"
                    }`}
            />
        </button>
    );
}

export default ThemeToggle;
