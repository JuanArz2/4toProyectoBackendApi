# 4toProyectoBackendApi

---

### 0. Comenzar estructura

Crear repositorio en GitHub y copiarlo en local

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

• Bajo "scripts", pero antes del "test":

_"start": "node ./src/index.js",_ activará el comando en terminal de start, para correr el node
_"dev": "nodemon ./src/index.js",_ activará el comando en terminal de dev, para correr el nodemon

• Antes de las dependencias:

_"type": "module",_

• Si hay cambios en _package_json_, ejecutar _sudo npm i_

### 4. Crear archivos de:

– Punto de entrada: en carpeta _src_, crear el archivo _index.js_

– Servidor: en carpeta src _server_. √ Probar en cliente (Postman) –> Ruta raíz

<!-- import express from "express";
import membersRouter from "./routes/membersRouter.js";
import morgan from "morgan";

const server = express(); //llamamos el server que nos aporta express

server.use(morgan("dev"));
server.use(express.json());
server.use("/xmembers", xMembersRouter);

server.get("/", (req, res) => {
  //res.send("Success, server working"); //para provar el server al principio ; "sms" en cliente
  res.redirect(301, "/xmembers");
});

export default server; -->

– Base de datos: en carpeta src _conectionDataBase_,

### 5. Crear carpetas base (> y archivos) de:

– Enrutamiento: _routes_ > _xnameRouter.js_. √ Probar en cliente (Postman) –> Todas las rutas creadas

– Control: _controlers_ > _xnameModel.js_

– Modelo json: _models_ > _xnameControler.js_

### 6. Importaciones

En _index.js_:

_import "dotenv/config";_
_import "./conectionDataBase.js";_
_import server from "./server.js";_

<!-- // Servidor y su portal -->
<!-- server.listen(2999);
console.log("Server Port: 2999"); -->

### 7. Comprobar DB (base de datos)

<!-- import mongoose from "mongoose";

mongoose
  .connect(process.env.MONGODB_ATLAS_URI)
  .then((data) => {
    console.log("Database is conected");
  })
  .catch((error) => {
    console.log("Error, Database isn't conected");
  }); -->

De _conectionDataBase_ comprobar acceso autorizado a la base de datos gracias a mongoose, corriendo el comando _npm run dev_

### 8. Crear modelos

Ir al archivo xnameModel.js y establecer el modelo del json que deseamos usar en nuestra DB

Importando: _import { Schema, model } from "mongoose";_, declarando nuestro nuevo modelo: _const xNameSchema = new Schema({ elEsquema })_

y exportandolo: _export default model("member", xNameSchema);_

### 9. Crear controladores

Importando: _import memberModel from "../models/memberModel.js";_, declarando la variable de los controladores: _const membersController = { losControladores };_

y exportandolo: _export default membersController;_

<!-- Ejemplo:
createMember: async (req, res) => { // nombre de la acción en el modelo
try {
      if (req.body.firstName === "") throw new Error("Empty first name"); // Todas las validaciones
      const newMember = new memberModel(req.body);
      const creatingMember = await newMember.save(); // Lógica de programación

      if (creatingMember._id) {
        res.json({
          state: "Successful",
          message: "Member created",
          id: creatingMember._id,
        }); // En el cliente
      }

    } catch (error) {
      console.log("Error creating: ", error); // En consola de VSCode
      res.json({ error: true, message: "Error creating member" }); // En el cliente
    }

}
-->

### 10. Comprobar persistencia de datos

Verificar, en Atlas (o lo que usemos), si al usar nuestro cliente generamos datos correctamente en nuestra DB

### 11. Actualizar documentación / GitHub

Verificar/actualizar el Readme. Subir al repositorio el código final
