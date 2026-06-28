# Copa Pistón AI - Single Page Application

Esta aplicación es una Single Page Application (SPA) responsiva desarrollada en JavaScript Vanilla para un proyecto con fines educativos. Permite a los usuarios interactuar mediante una interfaz de chat fluida con el icónico personaje **Rayo McQueen**, impulsado de forma segura mediante la API de Google Gemini AI a través de Vercel Functions.


## Descripción del personaje elegido
Para el desarrollo de este proyecto se seleccionó al icónico personaje de la franquicia Cars de Disney-Pixar, Rayo McQueen. El asistente virtual está configurado bajo esta identidad competitiva, lo que significa que interactúa con los usuarios utilizando su característico entusiasmo, expresiones clásicas de las películas como su enérgico ¡Kachow! y una constante analogía hacia el automovilismo de alta velocidad. El chat simula una conversación directa en los boxes de la Copa Pistón, adaptando tecnicismos sobre motores, neumáticos, estrategias de carrera y combustible para guiar las respuestas del modelo de Inteligencia Artificial.

---

## Requisitos y pasos para ejecutar en entorno local

El primer paso consiste en abrir la terminal dentro del directorio del proyecto y ejecutar el comando "npm install". Esto descargará y preparará todos los módulos necesarios de Vite para el correcto despliegue y desarrollo de la arquitectura SPA.

El segundo paso requiere configurar las variables de entorno para que el chat se conecte con los servicios de Google. En la raíz del proyecto se encuentra una plantilla guía llamada .env.example. El archivo original .env se encuentra protegido en el archivo de ignorados de Git para resguardar la privacidad de las claves en la nube.

El tercer paso consta de iniciar el servidor de desarrollo integrado de manera local. Para lograrlo, puse el comando "vercel dev" en la terminal del editor. Esto levanta las funciones asíncronas y el empaquetador del diseño dinámico, indicando una dirección web en la consola.

---

## Cómo ejecutar tests
La plataforma incluye un conjunto de pruebas unitarias automatizadas para verificar de manera estructurada el correcto renderizado de las vistas y el aislamiento de las funciones de enrutamiento. Para poner a prueba el código del proyecto y validar que los componentes cumplan con los requerimientos establecidos, con ejecutar en la terminal local el comando "npm test". El sistema procesará las pruebas del directorio de pruebas y devolverá un balance del estado de la app en la consola de comandos.

---

## Link a la aplicación desplegada
La aplicación se encuentra en producción, optimizada y ejecutándose de forma pública en la nube para su evaluación. Puedes acceder al sistema interactivo a través del siguiente enlace oficial del despliegue en Vercel:

https://p-i-m3-spa.vercel.app

---

## Registro del uso de AI en el proyecto
Se declara el uso regulado de herramientas de Inteligencia Artificial Generativa aplicándose principalmente bajo criterios de asistencia técnica en la optimización y depuración del proyecto. La participación de la IA se centró en la resolución de la importación circular presente entre los disparadores de navegación y el enrutador principal de la app. Asimismo, se utilizó soporte inteligente para rediseñar la hoja de estilos mediante selectores rígidos y herencias en bloques de media query con el fin de corregir los errores de desbordamiento en el botón de envío en dispositivos pequeños.