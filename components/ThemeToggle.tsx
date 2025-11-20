"use client"

//Stores
import { useThemeStore } from "@/stores/theme.store";

//Icons
import { Moon, Sun } from "lucide-react";

export const ThemeToggle = () => {
    const { theme, setTheme } = useThemeStore();

    const toggle = () => setTheme(theme === "dark" ? "light" : "dark");

    return (
        <button onClick={toggle} className="cursor-pointer">
            {theme === "dark" ? <Sun className="size-4" /> : <Moon className="size-4" />}
        </button>
    );
};
