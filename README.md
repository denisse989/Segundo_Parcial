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
![image](https://github.com/denisse989/Segundo_Parcial/assets/60879365/2cc2ea50-7317-4c97-963c-826be8c9f781)

Dentro de App tenemos los siguientes comoponentes:
* CardPelicula: Estructura de Card de cada película.
* ListPeliculas: Recorre el array de peliculas para enviarlas a Pelicula.
* Filter: Donde se realiza el form de busqueda de peliculas.

Dentro de App tenemos los siguientes layouts:
* NavBar: Encabezado con el título de la página y un botón para hacer logout.
* AppLayout: Llama a NavBar e implementa un menú lateral.

Dentro de App tenemos los siguientes pages:
* MoviePage: Donde se llama el component ListPeliculas y appLayout.
* SearchPage: Donde se llama el component Filter y appLayout.
* SettingsPage: Donde se llama dos botones para cambiar el thema y appLayout.


Finalmente se tiene la App.tsx que es la que se encarga de redirigir las routas e implementar el context en toda la aplicacion. Para eso se tiene las routas de la authenticacion y de la app.

Dentro de Auth tenemos las paginas login y register para poder ingresar a la aplicacion en el cual se usa react-hook-form para evitar que los campos esten vacios.
 
## Resultado
Con la estructura anterior y los estilos de Material-UI se logro tener la siguiente pagína:

![image](https://github.com/denisse989/Segundo_Parcial/assets/60879365/514c5fcd-6d77-46ff-b618-716b7952d95e)

![image](https://github.com/denisse989/Segundo_Parcial/assets/60879365/1ab59dc1-a160-46fc-8ed0-965017a1f5c8)

![image](https://github.com/denisse989/Segundo_Parcial/assets/60879365/0d3f7b1e-edfd-4748-b1f9-606ce7189e0e)



## Video Explicativo

https://drive.google.com/drive/folders/1_z43cfyxPurIjCMR5oShBTd-QJkf9xLA?usp=sharing 
