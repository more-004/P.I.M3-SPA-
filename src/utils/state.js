const estado = {
  historialChat: [], 
  personaje: {
    nombre: "Rayo McQueen",
    numero: "95",
    frase: "¡Kachow!"
  }
};


export const obtenerHistorial = () => {
  return estado.historialChat;
};

export const agregarMensajeAlHistorial = (role, text) => {
  estado.historialChat.push({ role, text });
};

export const limpiarHistorial = () => {
  estado.historialChat = [];
};

export const obtenerDatosPersonaje = () => {
  return estado.personaje;
};