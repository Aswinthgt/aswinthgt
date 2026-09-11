import { ThemePallete } from "../../models/models";

/* Legacy theme gallery (Commented out, not deleted)
export const gallery: Array<ThemePallete> = [
    {
        value: "Primary",
        dark: "dark",
        light: "light"
    },
    {
        value: "Sapphire & Moonlit",
        dark: "Sapphire-Moonlit-dark",
        light: "Sapphire-Moonlit-light"
    },
    {
        value: "Emerald & Enchanted",
        dark: "Emerald-Enchanted-dark",
        light: "Emerald-Enchanted-light"
    },
    {
        value: "Rose & Midnight",
        dark: "Rose-Midnight-dark",
        light: "Rose-Midnight-light"
    },
    {
        value: "Amethyst & Velvet",
        dark: "Amethyst-Velvet-dark",
        light: "Amethyst-Velvet-light"
    },
    {
        value: "Golden & Twilight",
        dark: "Golden-Twilight-dark",
        light: "Golden-Twilight-light"
    }
]
*/

export const gallery: Array<ThemePallete> = [
    {
        value: "Mocha",
        dark: "mocha",
        light: "latte",
        previewColor: "#cba6f7",
        badge: "Dark"
    },
    {
        value: "Macchiato",
        dark: "macchiato",
        light: "latte",
        previewColor: "#c6a0f6",
        badge: "Mid"
    },
    {
        value: "Frappé",
        dark: "frappe",
        light: "latte",
        previewColor: "#ca9ee6",
        badge: "Muted"
    },
    {
        value: "Latte",
        dark: "mocha",
        light: "latte",
        previewColor: "#8839ef",
        badge: "Light"
    },
    {
        value: "Sapphire",
        dark: "catppuccin-sapphire-dark",
        light: "catppuccin-sapphire-light",
        previewColor: "#74c7ec",
        badge: "Accent"
    },
    {
        value: "Green",
        dark: "catppuccin-green-dark",
        light: "catppuccin-green-light",
        previewColor: "#a6e3a1",
        badge: "Accent"
    },
    {
        value: "Peach",
        dark: "catppuccin-peach-dark",
        light: "catppuccin-peach-light",
        previewColor: "#fab387",
        badge: "Accent"
    },
    {
        value: "Pink",
        dark: "catppuccin-pink-dark",
        light: "catppuccin-pink-light",
        previewColor: "#f5c2e7",
        badge: "Accent"
    },
    {
        value: "Lavender",
        dark: "catppuccin-lavender-dark",
        light: "catppuccin-lavender-light",
        previewColor: "#b4befe",
        badge: "Accent"
    }
];


export const SKILLS_CATEGOTIES = {
    mean: ["Mongo DB", "Express.js", "Angular", "Node.js"],
    mern: ["Mongo DB", "Express.js", "React", "Node.js"],
    "node.js": ["Express.js", "Node.js"]
}