/**
 * @returns {HTMLElement}
 */
export function renderAbout() {
  const contenedor = document.createElement('div');
  

  contenedor.className = 'about-container'; 

  contenedor.innerHTML = `
    <div class="about-card">
      <h2>Ficha de Escudería: Rayo McQueen</h2>
      <p>
        El Rayo McQueen es una leyenda viviente del automovilismo de la Copa Pistón. 
        Conocido por su icónico número 95 y su temperamento competitivo, pasó de ser 
        un novato solitario a un verdadero campeón que entiende el valor del trabajo en equipo.
      </p>
      
      <table class="specs-table">
        <tr>
          <td class="td-label">Número de Competencia</td>
          <td>#95</td>
        </tr>
        <tr>
          <td class="td-label">Patrocinador Oficial</td>
          <td>Rust-eze (Medicina para parachoques)</td>
        </tr>
        <tr>
          <td class="td-label">Títulos Ganados</td>
          <td>7 Copas Pistón 🏆</td>
        </tr>
        <tr>
          <td class="td-label">Mejor Amigo</td>
          <td>Mate (La grúa de Radiador Springs)</td>
        </tr>
        <tr>
          <td class="td-label">Frase Célebre</td>
          <td>¡Kachow! 🏎️💨</td>
        </tr>
      </table>
    </div>
  `;

  return contenedor;
}