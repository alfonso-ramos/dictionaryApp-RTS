import { createContext, useContext, useState, useEffect } from "react";

type ThemeContextType = {
    theme: boolean;
    font: string;
    changeTheme: () => void;
    changeFont: (font: string) => void;
};

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const useTheme = () => {
    const context = useContext(ThemeContext);
    if (!context) {
        throw new Error("useTheme must be used within a ThemeProvider");
    }
    return context;
};

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
    const [theme, setTheme] = useState(true);
    const [font, setFont] = useState("font-sans");

    const changeTheme = () => {
        setTheme(!theme);
    };

    const changeFont = (font: string) => {
        setFont(font);
    };

    useEffect(() => {
        document.querySelector("html")?.classList.toggle("dark", !theme);
    }, [theme]);

    return (
        <ThemeContext.Provider value={{ theme, font, changeTheme, changeFont }}>
        <div className={font}>{children}</div>
        </ThemeContext.Provider>
    );
};
