# HSBC Intranet Lite

HSBC Intranet Lite es una aplicación construida con NEXT.js versión 14.2.5, utilizando React Router DOM y MUI para los estilos. Este proyecto tiene como objetivo proporcionar una intranet ligera y eficiente.

## Requisitos Previos

Antes de comenzar, asegúrate de tener instalados los siguientes requisitos:

1. **Node.js**: Asegúrate de tener instalada la versión 16.20.1 de Node.js o superior.
2. **npm**: Necesitarás la versión 10.7.0 de npm para instalar las dependencias del proyecto.

## Instalación

Sigue estos pasos para clonar e instalar el proyecto en tu máquina local:

1. **Descomprime la carpeta**:

   Descarga y descomprime la carpeta zip o rar que contiene el proyecto.

2. **Instala las dependencias**:
   ```bash
   npm install
   ```

## Construcción del Build

Para crear el build de la aplicación que será desplegado en el hosting, ejecuta:
`bash
    npm run build
    `

## Despliegue

Sigue estos pasos para desplegar el build en tu servidor de hosting:

1. **Sube el build al servidor**:
   Una vez generado el build, encontrarás una carpeta llamada `.next` en la raíz del proyecto. Sube esta carpeta al servidor de hosting junto con el resto de archivos del proyecto.

2. **Instala las dependencias en el servidor**:
   En el servidor de hosting, asegúrate de tener instaladas las dependencias necesarias. Ejecuta:

   ```bash
   npm install
   ```

3. **Configura el servidor**:
   Asegúrate de que tu servidor esté configurado para servir una aplicación NEXT.js. Dependiendo del servidor que estés utilizando, podrías necesitar configurar Nginx, Apache, o cualquier otro servidor web para servir la aplicación.

4. **Inicia la aplicación**:
   En el servidor, inicia la aplicación utilizando el siguiente comando:
   ```bash
   npm start
   ```

## Uso

Accede a la URL del servidor donde has desplegado la aplicación para ver HSBC Intranet Lite en acción.

## Dependencias

Estas son algunas de las principales dependencias utilizadas en el proyecto:

- `@emotion/react`: ^11.13.0
- `@emotion/styled`: ^11.13.0
- `@mui/material`: ^5.16.5
- `next`: 14.2.5
- `react`: ^18
- `react-dom`: ^18

## DevDependencies

Estas son algunas de las principales dependencias de desarrollo utilizadas en el proyecto:

- `eslint`: ^8
- `eslint-config-next`: 14.2.5

## Scripts

Estos son los scripts disponibles en el proyecto:

- **dev**: Inicia el servidor de desarrollo.

  ```bash
  npm run dev
  ```

- **build**: Construye la aplicación para producción.

  ```bash
  npm run build
  ```

- **start**: Inicia la aplicación en modo producción.

  ```bash
  npm run start
  ```

- **lint**: Ejecuta el linter para verificar la calidad del código.
  ```bash
  npm run lint
  ```
