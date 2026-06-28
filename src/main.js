
import { enrutar } from './router.js';
import { configurarNavegacion } from './navigation.js';
import { inicializarNavbar } from './components/navbar.js';
import { inicializarFooter } from './components/footer.js';

function arrancarAplicacion() {
  inicializarNavbar();
  inicializarFooter();

  if (!window.history.state) {
    window.history.replaceState({ ruta: window.location.pathname }, '', window.location.pathname);
  }

  enrutar();

  configurarNavegacion();
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', arrancarAplicacion);
} else {
  arrancarAplicacion();
}

