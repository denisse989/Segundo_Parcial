import CardPelicula from "./CardPelicula"
import { useDispatch, useStore } from "../../context/ContextProvider";
import Grid from '@mui/material/Grid';


const ListPeliculas = () => {
    const { movies } = useStore();
    return (
      <section>
        <Grid container spacing={4} sx={{ m: 10 }}>
          {movies.map((movie) => {
            
            return (<Grid item xs={6}>
                <CardPelicula {...movie} key={movie.id} />
                </Grid>)
            
          })}
        </Grid>
      </section>
    )
  }
  export default ListPeliculas
  