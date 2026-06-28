export const inicializarFooter = () => {
  const contenedor = document.getElementById('footer-container');
  if (!contenedor) return;

  const añoActual = new Date().getFullYear();
  contenedor.innerHTML = `
    <div class="footer-contenido">
      <p>&copy; ${añoActual} - Proyecto SPA con Gemini AI.</p>
      <p>Desarrollado con fines educativos. ¡Kachow! 🏎️💨</p>
    </div>
  `;
};