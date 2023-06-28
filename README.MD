# LibraryApp - Trabajo Práctico Final
## Node.js - Express - Sequelize - Jwt - Passport - SQLite

### Pasos del desarrollo del proyecto
### Paso 1
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

### Paso 2
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

### Paso 3
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
    - controllers -> van a ser las vistas que interactuan con el usuario
    - Servicios -> control de lo que se hace
    - providers -> acceso a los modelos de la BD

### Paso 4
- Autenticación con passport y jwt
    - Instalar passport, passport-jwt y jsonwebtoken
```
npm install passport passport-jwt jsonwebtoken
```
- Creo el middleware para autentificación
    - incluye verificación de usuarios en la BD a través del controlador