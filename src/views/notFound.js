import { irA } from '../router.js';

export const renderNotFound = () => {
  const seccion = document.createElement('section');
  seccion.className = 'vista-error';

  seccion.innerHTML = `
    <div class="error-contenedor">
      <h1 class="error-codigo">404</h1>
      <h2>¡Te saliste de la pista!</h2>
      <p>La ruta que intentas buscar no se encuentra en el mapa de la carrera.</p>
      <button id="btn-volver-inicio" class="btn-secundario">Volver al Inicio</button>
    </div>
  `;

  const botonInicio = seccion.querySelector('#btn-volver-inicio');
  if (botonInicio) {
    botonInicio.addEventListener('click', () => {
      irA('/home');
    });
  }

  return seccion;
};