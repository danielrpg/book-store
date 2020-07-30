# PROJECT NAME

Book Store

## AUTHOR

```
Name: Daniel Fernandez

Email: daniel.fernandezgp@gmail.com
```

## STEPS FOR START PROJECT
1.- Please change all .back files to correct names:

```
docker-compose.yml.back ==> docker-compose.yml 

docker.env.back ==> docker.env 

.env.back ==> .env 

``` 


2.- First excecute this command in a terminal

`docker-compose up`

this will start dabate postgres in a docker container with pg admin inside

3.- Then you should execute following command in terminal

`npm run start:dev` --> dev mode 
`npm run start` --> pre prod mode

4.- Then you should go to the following link inside a postman

`http://localhost:3000/author/`

`http://localhost:3000/book/`

`http://localhost:3000/cart/`


5.- If you like there is a postman collection file you can execute this 
`book-store.postman_collection.json`

## PROJECT DESCRIPTION

Book Store API

Una Tienda de libros quiere incrementar sus ventas, para ello la administración dispuso que
necesita un sistema para registrar los libros que venden, los libros se registran utilizando su
título, una descripción, el autor y su precio de venta, también es necesario registrar el autor del
libro.
Los clientes pueden ingresar al sistema y agregar el libro que deseen a un carrito de compras
donde el usuario puede registrar su nit y su nombre.
Crear una API REST usando node.js que se conecte a una base de datos para registrar todo el
proceso de ventas de la tienda de libros, para ello debe considerar los siguientes puntos:
- Agregue la configuración para inicializar el proyecto
- Almacene las constantes como accesos de la base de datos utilizando variables de entorno
- Configure una base de datos, puede utilizar sql o nosql.
- Cree el archivo de conexión a la base de datos
- Cree los modelos para generar la base de datos.
- Cree los archivos de ruta para los servicios rest.
- Debe poder listar los libros de forma paginada.
- Debe poder agregar, modificar, eliminar mostrar, un libro.
- Debe poder agregar eliminar, libros al carrito de compras
- Debe poder agregar informacion del autor
La siguiente es una base de datos que podría usar como modelo base para su proyecto, pero
no está limitado a ello, usted podría modificar el modelo según a las necesidades de su
modelo, o podría implementar una estructura similar en nosql.
