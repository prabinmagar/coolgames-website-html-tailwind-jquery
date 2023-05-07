module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'dark': '#04020E',
        'violet-normal': '#0F0A3C',
        'violet-dark-hover': "#090624",
        'violet-dark-active': "#07051b",
        'violet-darker': "#050415",
        'violet-light': "#100E2B",
        "green-normal": "#009F9D",
        'pink-normal': "#B9198E", 
        'oxford-blue': "#0C0A24",
      },
      fontFamily: {
        'barlow': ['Barlow', 'sans-serif'],
        'poppins': ['Poppins', 'sans-serif'],
        'right': ['Righteous', 'cursive'],
      },
      screens: {
        'xs': '420px',
        'sm': '576px',
        'md': '768px',
        'lg': '992px',
        'xl': '1200px',
        'xxl': '1400px'
      },
      backgroundImage: {
        'banner-image': 'url("../assets/images/banner_image.png")',
        'join-image': 'url("../assets/images/join_image.png")',
      },
      boxShadow: {
        'nav': '0px 4px 4px rgba(0, 0, 0, 0.25)',
        'nav-collapse': 'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px',
        'category-item': '0px 49px 20px rgba(0, 0, 0, 0.01), 0px 28px 17px rgba(0, 0, 0, 0.05), 0px 12px 12px rgba(0, 0, 0, 0.09), 0px 3px 7px rgba(0, 0, 0, 0.1), 0px 0px 0px rgba(0, 0, 0, 0.1)',
        'input-focus': 'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px'
      },
      gridTemplateColumns: {
        'footer': '2fr 1fr 1fr 1fr'
      }
    },
  },
  plugins: [],
}