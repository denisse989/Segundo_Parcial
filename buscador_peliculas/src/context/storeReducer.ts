import cartel1 from "../assets/1.jpg"
import cartel2 from "../assets/2.jpg"
import cartel3 from "../assets/3.jpg"
import cartel4 from "../assets/4.jpg"
import cartel5 from "../assets/5.jpg"
import cartel6 from "../assets/6.jpg"
import cartel7 from "../assets/7.jpg"
import cartel8 from "../assets/8.jpg"
import cartel9 from "../assets/9.jpg"
import cartel10 from "../assets/10.jpg"
import { ligthTheme,darkTheme } from "../theme/theme";
const types = {
  login: "login User",
  logout: "log out User",
  dark:"Dark",
  ligth:"ligth"
};

const initialValues = {
  auth: (localStorage.getItem('auth') ? JSON.parse(localStorage.getItem('auth')):false),
  theme:{ligthTheme},
  movies : [
    {
      id: 1,
      icon: cartel1,
      title: "Inception",
      year:"2010",
      gender:"Misterio",
      description: "Dom Cobb es un experto en el arte de apropiarse, durante el sueño, de los secretos del subconsciente ajeno. La extraña habilidad de Cobb le ha convertido en un hombre muy cotizado en el mundo del espionaje, pero también lo ha condenado a ser un fugitivo y, por consiguiente, a renunciar a llevar una vida normal. Su única oportunidad para cambiar de vida será hacer exactamente lo contrario de lo que ha hecho siempre: la incepción, que consiste en implantar una idea en el subconsciente en lugar de sustraerla. Sin embargo, su plan se complica debido a la intervención de alguien que parece predecir cada uno de sus movimientos, alguien a quien sólo Cobb podrá descubrir. ",
    },
    {
        id: 2,
        icon: cartel2,
        title: "Joker",
        year:"2019",
        gender:"Drama",
        description: "Arthur Fleck (Phoenix) vive en Gotham con su madre, y su única motivación en la vida es hacer reír a la gente. Actúa haciendo de payaso en pequeños trabajos, pero tiene problemas mentales que hacen que la gente le vea como un bicho raro. Su gran sueño es actuar como cómico delante del público, pero una serie de trágicos acontecimientos le hará ir incrementando su ira contra una sociedad que le ignora.",
      },
      {
        id: 3,
        icon: cartel3,
        title: "Cisne negro",
        year:"2010",
        gender:"Drama",
        description: "Nina (Natalie Portman), una brillante bailarina que forma parte de una compañía de ballet de Nueva York, vive completamente absorbida por la danza. La presión de su controladora madre (Barbara Hershey), la rivalidad con su compañera Lily (Mila Kunis) y las exigencias del severo director (Vincent Cassel) se irán incrementando a medida que se acerca el día del estreno. Esta tensión provoca en Nina un agotamiento nervioso y una confusión mental que la incapacitan para distinguir entre realidad y ficción.",
      },
      {
        id: 4,
        icon: cartel4,
        title: "La La Land",
        year:"2016",
        gender:"Musical",
        description: "Mia (Emma Stone), una joven aspirante a actriz que trabaja como camarera mientras acude a castings, y Sebastian (Ryan Gosling), un pianista de jazz que se gana la vida tocando en sórdidos tugurios, se enamoran, pero su gran ambición por llegar a la cima en sus carreras artísticas amenaza con separarlos.",
      },
      {
        id: 5,
        icon: cartel5,
        title: "Toy Story",
        year:"1995",
        gender:"Animada",
        description: "Los juguetes de Andy, un niño de 6 años, temen que haya llegado su hora y que un nuevo regalo de cumpleaños les sustituya en el corazón de su dueño. Woody, un vaquero que ha sido hasta ahora el juguete favorito de Andy, trata de tranquilizarlos hasta que aparece Buzz Lightyear, un héroe espacial dotado de todo tipo de avances tecnológicos. Woody es relegado a un segundo plano. Su constante rivalidad se transformará en una gran amistad cuando ambos se pierden en la ciudad sin saber cómo volver a casa.",
      },
      {
        id: 6,
        icon: cartel6,
        title: "Toy Story 2",
        year:"1999",
        gender:"Animada",
        description: "Cuando Andy se va de campamento dejando solos a los juguetes, Al McWhiggin, un compulsivo coleccionista de juguetes valiosos, secuestra a Woody. Buzz Lightyear y los demás juguetes tendrán que actuar con rapidez si quieren rescatarlo. Durante la operación de rescate no sólo tendrán que afrontar múltiples peligros, sino que también vivirán divertidas situaciones.",
      },
      {
        id: 7,
        icon: cartel7,
        title: "Toy Story 3",
        year:"2010",
        gender:"Animada",
        description: "Cuando su dueño Andy se prepara para ir a la universidad, el vaquero Woody, el astronauta Buzz y el resto de sus amigos juguetes comienzan a preocuparse por su incierto futuro. Efectivamente todos acaban en una guardería, donde por ejemplo la muñeca Barbie conocerá al guapo Ken. Esta reunión de nuestros amigos con otros nuevos juguetes no será sino el principio de una serie de trepidantes y divertidas aventuras.",
      },
      {
        id: 8,
        icon: cartel8,
        title: "El laberinto del fauno",
        year:"2006",
        gender:"Fantasia",
        description: "Año 1944, posguerra española. Ofelia y su madre Carmen, que está embarazada, se trasladan a un pequeño pueblo al que ha sido destinado el nuevo marido de Carmen, un cruel capitán del ejército franquista por el que la niña no siente ningún afecto. En la zona viven Mercedes, el ama de llaves, y el médico que se hace cargo del delicado estado de salud de Carmen. Una noche, Ofelia descubre las ruinas de un laberinto, y allí se encuentra con un fauno (Doug Jones), una extraña criatura que le hace una sorprendente revelación: ella es en realidad una princesa, la última de su estirpe, y los suyos la esperan desde hace mucho tiempo. Para poder regresar a su mágico reino, la niña deberá enfrentarse a tres pruebas.",
      },
      {
        id: 9,
        icon: cartel9,
        title: "300",
        year:"2006",
        gender:"Accion",
        description: "Adaptación del cómic de Frank Miller (autor del cómic 'Sin City') sobre la famosa batalla de las Termópilas (480 a.C.). El objetivo de Jerjes, emperador de Persia, era la conquista de Grecia, lo que desencadenó las Guerras Médicas. Dada la gravedad de la situación, el rey Leónidas de Esparta (Gerard Butler) y 300 espartanos se enfrentaron a un ejército persa que era inmensamente superior.",
      },
      {
        id: 10,
        icon: cartel10,
        title: "Parásitos",
        year:"2019",
        gender:"terror",
        description: "Tanto Gi Taek (Song Kang-ho) como su familia están sin trabajo. Cuando su hijo mayor, Gi Woo (Choi Woo-sik), empieza a dar clases particulares en casa de Park (Lee Seon-gyun), las dos familias, que tienen mucho en común pese a pertenecer a dos mundos totalmente distintos, comienzan una interrelación de resultados imprevisibles.",
      },
  ]
};

const storeReducer = (state, action) => {
  switch (action.type) {
    case types.login:
      return {
        ...state,
        auth: true,
      };
    case types.logout:
      return {
        ...state,
        auth: false,
      };
      case types.dark:
      return {
        ...state,
        theme: {darkTheme},
      };
      case types.ligth:
      return {
        ...state,
        theme: {ligthTheme},
      };
    default:
      return state;
  }
};

export { initialValues, types };

export default storeReducer;
