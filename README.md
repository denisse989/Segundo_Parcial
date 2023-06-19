# Aplicación de buscador de películas
## Requerimientos
Crea una aplicación utilizando ReactJS y aplicando los temas avanzados en clases. Utiliza Material-UI o Tailwind CSS para diseñar y estilizar la interfaz de usuario de la aplicación. Implementa la funcionalidad utilizando los hooks y librerías como lo vea conveniente dentro de su proyecto, se puede incluir:
* useState: Utiliza el estado para controlar el contenido del formulario de la página.
* useEffect: Utiliza el efecto para guardar los datos del formulario en el almacenamiento local (localStorage) cada vez que cambien.
* reduce y map: Utiliza estos métodos para renderizar una lista de características de la página de manera dinámica.
* localStorage: Utiliza el almacenamiento local para almacenar los datos del formulario de manera persistente.
* useMemo: Utiliza para recordar datos y calcularlos.
* memo: Utiliza para optimizar el rendimiento de los componentes y evitar renderizados innecesarios.
* react-router-dom: Utiliza para crear diferentes rutas en la aplicación, como la página principal y la página de configuración.
* react-hook-form: Utliza para crear un form que valide los campos de nombre, correo electrónico y contraseña.
* useContext: Utiliza para poder llamar la informacion en cualquier lugar de la App.

La página debe tiene la siguiente estructura:
* Un navBar con el título de la página y una menú lateral para navegar.
* Un formulario de busqueda con los siguientes campos: titulo, año de las peliculas,género.
* Una lista de características de la página que se renderice utilizando reduce y map.
* Context para el cambio de thema que permita al usuario cambiar entre un tema claro y oscuro.

La página debe cumplir con los siguientes requisitos:
* El estado del formulario debe actualizarse correctamente cuando los campos cambien.
* Los datos del formulario deben almacenarse en el almacenamiento local cada vez que cambien.
* La lista de características debe generarse dinámicamente a partir de un array de características.
* El envío del formulario debe mostrar una alerta en pantalla con los datos del formulario.
## Estructura
![image](https://github.com/denisse989/Primer_Parcial/assets/60879365/ab28dc48-6021-41e2-bd0a-2dde1c3d6aa4)

Dentro de components tenemos los siguientes comoponentes:
* FormPelicula: Crea el form de busqueda y recibe los datos de los inputs.
* Modal: Estructura del Modal y envia parametros a FormPelicula.
* NavBar: Encabezado con el título de la página y un botón para resetear los filtros.
* Pelicula: Estructura de Card de cada película.
* Peliculas: Recorre el array de peliculas para enviarlas a Pelicula.

![image](https://github.com/denisse989/Primer_Parcial/assets/60879365/8ffcfbe3-01f3-4a12-b282-767e378dbaa8)

Dentro de helpers tenemos Movies.js donde se crea el array de peliculas que se tiene por defecto en la página. Contiene 10 películas con sus respectivos datos.

![image](https://github.com/denisse989/Primer_Parcial/assets/60879365/e67d63ee-4a48-41f9-9e89-d38c17c850d4)

Finalmente se tiene la App.jsx que es la que se encarga de integrar los componentes y donde se usa la mayoria de funcionalidades como:
* useState: Donde utiliza el estado de las constantes para controlar el contenido del formulario de busqueda de la página y los envia a sus componentes para su uso.
* useEffect: Se utiliza el efecto para guardar los datos del array de películas obtenido luego de aplicar un filtro en el almacenamiento local cada vez que cambien por un filtro o por ser restaurado.
* map y filter: Utiliza estos métodos para renderizar el array de películas de la página de manera dinámica.
* localStorage: Utiliza el almacenamiento local para almacenar los datos del array de películas filtradas de manera persistente.
 
## Resultado
Con la estructura anterior y los estilos de Tailwind CSS se logro tener la siguiente pagína:

![image](https://github.com/denisse989/Primer_Parcial/assets/60879365/3a272ae2-7e67-4960-986d-38a9e3c5673b)


## Video Explicativo

https://drive.google.com/drive/folders/1-rnaP8CpodGCigmOnFdHknacn0AAXNrC?usp=sharing
