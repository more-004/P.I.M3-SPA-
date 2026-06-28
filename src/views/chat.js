import { obtenerHistorial, agregarMensajeAlHistorial } from '../utils/state.js';


/**
 * @returns {HTMLElement} El contenedor de la vista del chat.
 */

export function renderChat() {
    const contenedor = document.createElement('div');
    contenedor.className = 'chat-container';

    contenedor.innerHTML = `
        <div class="chat-window">
            <div class="chat-messages" id="chat-messages">
                </div>
            <form class="chat-form" id="chat-form">
                <input 
                    type="text" 
                    id="chat-input" 
                    placeholder="Escribe tu mensaje para el Rayo..." 
                    autocomplete="off"
                />
                <button type="submit" id="btn-enviar">Enviar 🏁</button>
            </form>
        </div>
    `;


    setTimeout(() => {
        const form = document.getElementById('chat-form');
        const input = document.getElementById('chat-input');
        const contenedorMensajes = document.getElementById('chat-messages');


        const historialGlobal = obtenerHistorial();
        
        if (historialGlobal.length === 0) {

            agregarMensajeUI(contenedorMensajes, 'Rayo McQueen', '¡Kachow! ¿Listo para correr? ¡Hazme cualquier pregunta, amigo de las pistas! ⚡');
        } else {

            historialGlobal.forEach(msg => {
                const remitente = msg.role === 'usuario' ? 'Usuario' : 'Rayo McQueen';
                agregarMensajeUI(contenedorMensajes, remitente, msg.text);
            });
        }


        form.addEventListener('submit', async (e) => {
            e.preventDefault();
            
            const mensajeTexto = input.value.trim();
            if (!mensajeTexto) return;


            intercambiarEstadoCarga(form, input, true);
            agregarMensajeUI(contenedorMensajes, 'Usuario', mensajeTexto);
            

            agregarMensajeAlHistorial('usuario', mensajeTexto);

            input.value = '';
            

            const indicadorCarga = agregarIndicadorCargaUI(contenedorMensajes);

            try {

                const urlAPI = `${window.location.origin}/api/functions`;

                const respuesta = await fetch(urlAPI, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },

                    body: JSON.stringify({ history: obtenerHistorial() })
                });

                if (!respuesta.ok) {
                    throw new Error(`Error del servidor en los Pits: ${respuesta.status}`);
                }

                const datos = await respuesta.json();
                

                indicadorCarga.remove();

                const respuestaIA = datos.reply || "¡Vaya, me salí de la pista! Inténtalo de nuevo. 🏁";
                

                agregarMensajeUI(contenedorMensajes, 'Rayo McQueen', respuestaIA);
                agregarMensajeAlHistorial('rayo', respuestaIA);

            } catch (error) {
                console.error("Error al conectar con la API de Copa Pistón:", error);
                if (indicadorCarga) indicadorCarga.remove();
                agregarMensajeUI(contenedorMensajes, 'Sistema', "Error de conexión en los Pits. Revisa tu internet o la configuración del servidor.");
            } finally {

                intercambiarEstadoCarga(form, input, false);
                contenedorMensajes.scrollTop = contenedorMensajes.scrollHeight;
            }
        });
    }, 0);

    return contenedor;
}

function agregarMensajeUI(contenedor, remitente, texto) {
    const div = document.createElement('div');
    const claseRemitente = remitente === 'Usuario' ? 'user' : remitente === 'Sistema' ? 'sistema' : 'ia';
    
    div.className = `message ${claseRemitente}`;
    div.innerHTML = `<p><strong>${remitente}:</strong> ${texto}</p>`;
    
    contenedor.appendChild(div);
    contenedor.scrollTop = contenedor.scrollHeight;
}


function agregarIndicadorCargaUI(contenedor) {
    const div = document.createElement('div');
    div.className = 'message ia cargando';
    div.innerHTML = `<p><em>Rayo McQueen está acelerando... 🏎️💨</em></p>`;
    contenedor.appendChild(div);
    contenedor.scrollTop = contenedor.scrollHeight;
    return div;
}


function intercambiarEstadoCarga(formulario, input, estaCargando) {
    const boton = formulario.querySelector('button');
    input.disabled = estaCargando;
    boton.disabled = estaCargando;
    if (estaCargando) {
        boton.innerText = "Pensando...";
    } else {
        boton.innerText = "Enviar 🏁";
        input.focus();
    }
}