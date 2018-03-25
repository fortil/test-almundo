# Almundo Test
Prueba para [almundo](https://almundo.com.co/) en **ReactJS**

**En este repositorio está incluido el servidor y el cliente**

## Características
* La aplicación web, tiene persistencia de datos y de archivos a través de `localStorage` y `Service Workers` respectivamente. Para el caso del `Service Workers` solo para producción y dominios SSL.
* Filtra por nombre o por número de estrellas los hoteles
* Componentes creados con clases `es6` y creados como funciones
* El servidor. Si no tiene la configuración inicial para una base de datos o falla la conexión se usa el archivo _data.json_ del directorio raíz
* Para usar la base de datos es necesario tener una tabla llamada `hotels` con iguales parámetros que en el archivo _data.json_

## Instalación y ejecución
### En ambiente de desarrollo
* `git clone https://github.com/fortil/test-almundo`
* `cd test-almundo`
* `yarn` o `npm i`
* `yarn start` o `npm start`
El client (aplicación web) correrá en el puerto `3000` y el servidor (en _express_) correrá en el puerto `8080`

### En ambiente de producción
* `git clone https://github.com/fortil/test-almundo`
* `cd test-almundo`
* `yarn` o `npm i`
* `yarn run build` o `npm run build`

Se generará una carpeta `build` en la cual están los archivos requeridos para subir a un servidor estático.
Se pueden probar estos archivos instalando `serve` de manera global y corriendo la carpeta `build`, de esta manera:
* `yarn add serve global` o `npm i -g serve`
* `serve -s build`
Hay que recordar que si se crea el ambiente de producción se debe de tener en cuenta el levantamiento del servidor en la configuración específica del archivo de configuración (`src/config.js`).

## Dependencias
### Del lado del cliente
A parte de las dependencias principales de **react** como **redux**, **redux-thunks**, **react-redux**, entre otras que su uso es de conocimiento general al trabajar con **react**. Se utiliza **material-ui** para obtener componentes de diseño de _material design_. También se utiliza **free-style** la cual es una librería para crear estilos pero con archivos _.js_, esta posee varias ventajas sobre las hojas de estilo como lo evidencia [esta presentación de Christopher Chedeau](https://speakerdeck.com/vjeux/react-css-in-js)

### Del lado del servidor
Del lado del servidor tenemos como dependencia **body-parser** y **express**, para generar el API Rest

## Estructura
```
├───package.json
├───README.md
├───yarn.lock
├───server.js
├───connect.js
├───data.json
├───database.json
│   
├───public
├───assets
└───src
    ├───index.js
    ├───store.js
    ├───config.js
    ├───actions
    ├───assets
    │   └───icons
    ├───components
    ├───containers
    ├───lib
    ├───reducers 
    └───styles
```
* El archivo `server.js` es el archivo que levanta el servidor de la API
* El archivo `server.js` contiene toda la lógica de proceso y obtención de datos, conexión a la fuente de datos, etc.
* La carpeta `assets/` contiene las imágenes que el servidor provee al cliente
* El archivo `index.js` es el archivo principal que inicia la aplicación
* El archivo `store.js` es quien inicia **redux** y lo necesario para la comunicación de los componentes
* El archivo `config.js` contiene la configuración necesaria, como el _host_ de la API para poder conectar el cliente con axiost
* En la carpeta `src/actions` se encuentran todas las acciones usadas
* En la carpeta `src/assets` se encuentran los iconos en _.svg_ y un script hecho para poder sacar todos los _"paths"_ de cada icono y poderlos usar como componentes
* En la carpeta `src/components` se encuantran los componentes utilizados
* En la carpeta `src/containers` se encuentran los contenedores que mapean el estado y los dispachers para cada componente
* En la carpeta `src/lib` se encuentra la función utilizada para obtener los hoteles del servidor y la instancia hacia **axios**
* En la carpeta `src/reducers` están los reducers para el estado de **redux**
* En la carpeta `src/styles` están los estilos en el formato que los usa **react-free-style** que es una adaptación de **free-style**, librería para usar estilos en `JavaScript`