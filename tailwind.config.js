module.exports = {
    content: ["./src/**/*.{astro,html,js,jsx,ts,tsx}"],
    theme: {
        extend: {
            colors: {
                brand: {
                    white: "#ffffff",
                    red: "#E63946", // aerospace accent red
                },
                background: "#0a0a0f", // deep navy/black background
                surface: "#1a1a22", // card background
            },
            fontFamily: {
                sans: ["Orbitron", "sans-serif"],
            },
            boxShadow: {
                glow: "0 0 20px rgba(230, 57, 70, 0.5)",
            },
            keyframes: {
                fadeIn: {
                    '0%': { opacity: 0 },
                    '100%': { opacity: 1 },
                },
                slideUp: {
                    '0%': { opacity: 0, transform: 'translateY(40px)' },
                    '100%': { opacity: 1, transform: 'translateY(0)' },
                }
            },
            animation: {
                'fade-in': 'fadeIn 1.5s ease forwards',
                'slide-up': 'slideUp 1.5s ease forwards',
            },
        },
    },
    plugins: [],
};