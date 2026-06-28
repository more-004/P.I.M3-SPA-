import { irA } from './router.js';

export const configurarNavegacion = () => {

  const enlaces = document.querySelectorAll('header nav a, .navbar a, [href^="/"]');

  enlaces.forEach(enlace => {

    if (enlace._clickListener) {
      enlace.removeEventListener('click', enlace._clickListener);
    }


    enlace._clickListener = (evento) => {
      const ruta = enlace.getAttribute('href');
      
      if (ruta && ruta.startsWith('/')) {
        evento.preventDefault();
        irA(ruta);
      }
    };

    enlace.addEventListener('click', enlace._clickListener);
  });
};