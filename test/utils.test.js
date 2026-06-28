import { describe, it, expect, beforeEach } from 'vitest';
import { obtenerHistorial, agregarMensajeAlHistorial, limpiarHistorial, obtenerDatosPersonaje } from '../src/utils/state.js';

describe('Pruebas Unitarias del Estado Global', () => {
  
  beforeEach(() => {
    limpiarHistorial();
  });


  it('Debe inicializar con un historial de conversación vacío', () => {
    const historial = obtenerHistorial();
    expect(historial).toBeInstanceOf(Array);
    expect(historial.length).toBe(0);
  });


  it('Debe agregar correctamente mensajes al historial guardando el rol y el texto', () => {
    agregarMensajeAlHistorial('user', '¡Hola Rayo!');
    agregarMensajeAlHistorial('character', '¡Kachow!');
    
    const historial = obtenerHistorial();
    
    expect(historial.length).toBe(2);
    expect(historial[0]).toEqual({ role: 'user', text: '¡Hola Rayo!' });
    expect(historial[1]).toEqual({ role: 'character', text: '¡Kachow!' });
  });


  it('Debe retornar los datos estáticos del personaje correctamente', () => {
    const personaje = obtenerDatosPersonaje();
    expect(personaje.nombre).toBe('Rayo McQueen');
    expect(personaje.numero).toBe('95');
  });
});