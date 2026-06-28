export const inicializarNavbar = () => {
  const contenedor = document.getElementById('navbar-container');
  if (!contenedor) return;


  contenedor.innerHTML = `
    <div class="navbar-logo">
      <span class="logo-rayo">⚡</span> Copa Pistón SPA
    </div>
    <ul class="navbar-links">
      <li><a href="/home" data-link class="nav-item">Inicio</a></li>
      <li><a href="/chat" data-link class="nav-item">Chat de Pits</a></li>
      <li><a href="/about" data-link class="nav-item">Sobre el Rayo</a></li>
    </ul>
  `;
};