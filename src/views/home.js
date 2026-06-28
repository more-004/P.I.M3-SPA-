/**
 * @returns {HTMLElement}
 */
export function renderHome() {
  const contenedor = document.createElement('div');
  

  contenedor.className = 'home-container'; 

  contenedor.innerHTML = `
    <h2>Copa Pistón AI</h2>
    <p>
      ¡Bienvenido a los Pits de alta velocidad! Prepárate para conversar en tiempo real 
      con el legendario Rayo McQueen #95. Ajusta tus neumáticos, analiza la telemetría 
      y hazle cualquier pregunta sobre sus campeonatos en el circuito.
    </p>
    <a href="/chat" class="btn-racing">¡Entrar a los Pits y Chatear! ⚡</a>
  `;

  return contenedor;
}