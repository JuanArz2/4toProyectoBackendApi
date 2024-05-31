# 4toProyectoBackendApi

---

### 0. Comenzar estructura

Abrir el repositorio en VSCode
y crear carpeta _src_

### 1. Proyecto NOTE

Iniciar NPM: En la raíz abrir la terminal, y correr: _npm init --yes_

Crear archivo para ignorar en el GitHub en raíz _.gitignore_ (iniciar el npm crea carpeta "node_modules"; ignorarla en GitHub)

Crear archivo para guardar las variables de entorno en la raíz _.env_, ignorarlo en GitHub, y crear el archivo _.env.ejemplo_ para que los nombres de las variables sean publicos

### 2. Instalar dependencias

##### Vitales

• Dotenv: Para trabajar con las variables de entorno: _sudo npm i dotenv_

• Express, para crear y trabajar en un servidor: _sudo npm i express_

• Mongoose: ODM para trabajar con la Base de Datos: _sudo npm i mongoose_

##### De desarrollo

• Morgan: Para validar cada interacción del servidor (con Postman): _sudo npm i morgan -D_

• Nodemon: Para actualizar automaticamente el Note, sin tener que cortar y volver a subir el servidor: _sudo npm i nodemon -D_

### 3. Revisar archivo _package_json_

Comprobar | Agregar | Editar | Actualizar

• dependencies & devDependencies

• Bajo scripts, pero antes del test
_"start": "node ./src/index.js",_ activará el comando en terminal de start, para correr el node
_"dev": "nodemon ./src/index.js",_ activará el comando en terminal de dev, para correr el nodemon

• Si hay cambios ejecutar _sudo npm i_

### 4. Crear archivos de:

– Punto de entrada: en carpeta _src_, crear el archivo _index.js_

– Servidor: en carpeta src _server_. √ Probar en cliente (Postman) –> Ruta raíz

– Base de datos: en carpeta src _conectionDataBase_,

### 5. Crear carpetas base (> y archivos) de:

– Enrutamiento: _routes_ > _xnameRouter.js_. √ Probar en cliente (Postman) –> Todas las rutas creadas

– Control: _controlers_ > _xnameModel.js_

– Modelo json: _models_ > _xnameControler.js_

### 6. Comprobar DB (base de datos)

Comprobar acceso autorizado a la base de datos gracias a mongoose, corriendo el comando _npm run dev_

### Crear modelos

Ir al archivo xnameControler.js y establecer el modelo del json que deseamos usar en nuestra DB

### Crear controladores

x

### Comprobar persistencia de datos

Verificar si al usar nuestro cliente actualizamos, en Atlas (o lo que usemos), correctamente nuestra DB

# Actualizar documentación / GitHub

Verificar/actualizar el Readme. Subir al repositorio el código final
