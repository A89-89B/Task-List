1- header
2- button
3- tasks
4- mock de tareas y el interface de las mismas
5- tasks item
6- instalacion de paquete version 6 de angular font awesome: https://www.npmjs.com/package/@fortawesome/angular-fontawesome  con este: ng add @fortawesome/angular-fontawesome@
  No usamos npm lo hacemos a traves de él, del gestor de ng le estamos diciendo que nos traiga un paquete. Le pedimos directamente a Angular que sea el que nos traiga el paquete. 
  En el package.json revisamos que se haya instalado el paquete. 
  Como usamos el ng add, el componente del FontAwesomeModule ya esta importado, como usamos el CLI automaticamente ya nos importa los modulos. Todo porque usamos el ng.
7-service/task service
  Instalación de JSON Server: https://www.npmjs.com/package/json-server  con este: npm install json-server
  Emulador de una Base de Datos, nos va permitir actualizar, editar, guardar nuestro archivo json
  En el package.json revisamos qeu se haya instalado.
  IMPORTANTE-Inicializamos(en el package.json) creamos un nuevo scripts que se llama "server": "json-server --watch db.json --port 5000" para llamar al metodo o paquete json-server, por el puerto 5000. Este es el archivo donde vamos a estar guadando los datos de nuestra Base de Datos. 
  Debemos crear nuestro archivo db.json con ese nombre porque asi lo definimos en el package.json
  CON npm run server -PARA CORRER EL SERVIDOR DATE BASE.