/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: {
    enabled: true,
  content: [
    // "./descargas.html",
    // "./experiencia_entel.html",
    // "./home.html",
    // "./inspiracion.html",
    // "./projects.html",
    // "./resume.html",
    // "./posts/experiencia-entel.html",
    // "./posts/proyecto-alcohol-&-multiplayer.html",
    // "./posts/proyecto-sitio-web-personal.html",
    // "./posts/proyecto-tocata-con-los-cabros.html",
    // "./posts/sitio-web-personal.html",
    // "./posts/sitio-web-personal copy.html",
    // "./*.html",
    "./navbar.html",
    

  ],
},
  theme: {
    extend: {
      screens: {
        '3xl': '1920px',
      },
    },
  },
  plugins: [],
}


