# LibraryApp - Trabajo Práctico Final

## Instalación
* Clonar el ropositorio 
```
git clone https://github.com/cgavernet/Ejercicio-NodeJS-Cluster-1.git 
```
* Acceder a la carpta del proyecto y ejecutar el siguiente comando para instalar las ependencias del proyecto.
```
npm install
```
* Correr la aplicación en modo desarrollo
```
npm run start:dev
```
* Una vez en ejecución la aplicación se pueden realizar la interaccion a la Api con Insomnia o Postman apuntando a http://localhost:8090

* Ver [Documentacion API](#Documentacion-API) al final del documento.
## Tecnologías utilizadas:
* Node.js 
    - Es el entorno de ejecución de la aplicación. JavaScript del lado del servidor.
* Express
    - Framework para desarrollo de aplicaciones Web con NodeJs. utilizado en ésta aplicación para la creación de una API.
* Sequelize
    - Es un ORM para el manejo rapido y eficiente de Bases de Datos con JavaScript
* Jwt - Passport
    - Passwport es una libraria para autenticacion, en esta apliacación se usa con JWT (Jason Web Token) para segurizar rutas.
* SQLite 
    -  Motor de Base de Datos utilizado en el proyecto.
* Express-validator
    -  Es un Middleware para el manejo de validaciones a través de express.

## Pasos del desarrollo del proyecto
-------------------------------------
Esta es la descripción de los pasos que realizé para la resolución del ejercicio planteado.
### __Paso 1__
- Crear la estructura de carpetas
- Crear app.js y README.MD
- inicializar el proyecto node dentro de la carpeta de proyecto
```
npm init
```
- Instalar Express (en directoio raiz)
```
npm install express
```
- Instalar nodemon para uso en dev
```
npm install --save-dev nodemon
```
- Agregar los scripts start y start:dev a package.json
- Iniciar git en la raíz del proyecto
```
git init
```
- Agregar .gitignore para exluir la carpeta _node_modules_

### __Paso 2__
- Crear rutas
    - routes
        - index.js (indice de la carpeta, para acceder a los archivos de definicion de cada ruta)
        - user.js
        - book.js
        - library.js
- Crear controladores
    - controllers
        - index.js (indice de la carpeta, para acceder a los archivos de definicion de cada controlador)
        - user.controller.js
        - book.controller.js
        - library.controller.js

### __Paso 3__
- Instalar Sequelize
```
npm install --save sequelize
```
- Instalar SQLite3
```
npm install --save sqlite3
```
- Crear archivo _db-config.js_ para configuración de la BD en la carpeta _config_
- Crear los modelos de la entidades.
    - models
        - index.js (indice de la carpeta, para acceder a los archivos de definicion de cada modelo)
        - user.js
        - book.js
        - library.js
- Crear los controllers, services y los providers en las carpetas correspondientes.
    - controllers -> van a ser las vistas que interactuan con el usuario, en este caso lo que devuelve como _response_
    - Servicios -> control de lo que se hace
    - providers -> acceso a los modelos de la BD

### __Paso 4__
- Autenticación con passport y jwt
    - Instalar passport, passport-jwt y jsonwebtoken
```
npm install passport passport-jwt jsonwebtoken
```
- Creo el middleware para autentificación
    - incluye verificación de usuarios en la BD a través del controlador
    - agrego el _authMiddleware.authenticate_ en las rutas que necesitan auth de cada entidad: user, book y library.
    *Nota:* el middleware de autehnticación se crea dentro de la carpeta middleware junto con el archivo index.

### __Paso 5__
Validaciones
Para realizar las validaciones se utiliza el middleware Express-validator que nos permite validar las propiedades antes de que sean pasadas a los providers de las entidades.
En esta aplicación particular se validan las propiedades que se pasan a la entidades al crearlas y al actualizarlas.

- Instalar express-valiator
```
npm install --save express-vaildator
```
- creo el archivo validators.js dentro de la carpeta middleware y agrego authMiddleware al index para acceder a las validaciones.
- creo las validaciones para cada entidad
    * createUserValidator
    * updateUserValidator 
    * createBookValidator
    * updateBookValidator
    * createLibraryValidator
    * updateLibraryValidator
- agrego cada middleware de validacion a las rutas de user, book y library.
### __Paso 6__ 
Testeo de toda la aplicacion.

# Documentacion API
### Login
| Metodo  | Ruta  | Descripción  |
|---|---|---|
| POST  | /login  | Login de Usuario - Devuelve token | 
### User:
| Metodo  | Ruta  | Descripción  |
|---|---|---|
| POST  | /user  | Crear Usuario | 
| PUT  | /user/:userId  | Actualizar Usuario  | 
| GET  | /user  | Obtener todos los Usuarios  |
| GET  | /user/:userId | Obtener el Usuario por id |
| DELETE | /user/:userId | Borrar Usuario |
 
 ### Book:
| Metodo  | Ruta  | Descripción  |
|---|---|---|
| POST  | /book  | Crear Libro | 
| PUT  | /book/:bookId  | Actualizar Libro  | 
| GET  | /book  | Obtener todos los Libros - Incluye Libreria  |
| GET  | /book/:bookId | Obtener el Libro por id - Incluye Libreria |
| DELETE | /book/:bookId | Borrar Libro |

### Library:
| Metodo  | Ruta  | Descripción  |
|---|---|---|
| POST | /library  | Crear Librería |
| POST | /library/:libraryId/book| Crea un libro en la librería |
| PUT  | /library/:libraryId  | Actualizar Librería  | 
| GET  | /library  | Obtener todas las Librerías - Incluye los Libros  |
| GET  | /library/:libraryId | Obtener la Librería por id - Incluye los Libros |
| DELETE | /library/:libraryId | Borrar Librería |
