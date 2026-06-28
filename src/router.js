import { renderizarEnContenedor } from './utils/dom.js';
import { configurarNavegacion } from './navigation.js';

import { renderHome } from './views/home.js';
import { renderAbout } from './views/about.js';
import { renderChat } from './views/chat.js';
import { renderNotFound } from './views/notFound.js';

const rutas = {
  '/': renderHome,
  '/home': renderHome,
  '/about': renderAbout,
  '/chat': renderChat
};

export function enrutar() {
  try {
    const rutaActual = window.location.pathname;
    const obtenerVista = rutas[rutaActual] || renderNotFound;
    
    const nodoVista = obtenerVista();

    const contenedorRaiz = document.getElementById('root');

    renderizarEnContenedor(contenedorRaiz, nodoVista);

    configurarNavegacion();
  } catch (error) {
    console.error("Error en el enrutador de la Copa Pistón:", error);
  }
}

/**
 * @param {string} ruta
 */
export function irA(ruta) {
  window.history.pushState({ ruta }, '', ruta);
  enrutar();
}

window.addEventListener('popstate', enrutar);