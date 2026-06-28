/**
 * @param {string} etiqueta - Tipo de elemento ('div', 'button', 'p').
 * @param {string} [clase] - Clase CSS para el diseño.
 * @param {string} [contenido] - Contenido de texto interno.
 * @returns {HTMLElement} El elemento HTML creado.
 */
export function crearElemento(etiqueta, clase = '', contenido = '') {
  const elemento = document.createElement(etiqueta);
  if (clase) {
    elemento.className = clase;
  }
  if (contenido) {
    elemento.textContent = contenido;
  }
  return elemento;
}

/**
 * @param {HTMLElement} contenedor 
 * @param {HTMLElement} nuevoElemento 
 */
export function renderizarEnContenedor(contenedor, nuevoElemento) {
  if (contenedor && nuevoElemento) {
    contenedor.innerHTML = '';
    contenedor.appendChild(nuevoElemento);
  } else {
    console.warn("Falta el contenedor o el elemento a renderizar en dom.js");
  }
}