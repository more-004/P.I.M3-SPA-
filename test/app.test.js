import { describe, it, expect } from 'vitest';
import { renderAbout } from '../src/views/about.js';
import { renderNotFound } from '../src/views/notFound.js';

describe('Pruebas Unitarias de Renderizado de Vistas', () => {


  it('Debe renderizar la vista About devolviendo un elemento HTML estructurado', () => {
    const elementoHTML = renderAbout();
    

    expect(elementoHTML.tagName).toBe('SECTION');
    expect(elementoHTML.className).toBe('vista-about');
    

    expect(elementoHTML.innerHTML).toContain('Sobre el Proyecto');
  });


  it('Debe renderizar la vista de error 404 con el botón de retorno al inicio', () => {
    const elementoHTML = renderNotFound();
    
    expect(elementoHTML.className).toBe('vista-error');
    expect(elementoHTML.innerHTML).toContain('404');
    
    const boton = elementoHTML.querySelector('#btn-volver-inicio');
    expect(boton).not.toBeNull();
  });
});