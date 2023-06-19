import { Button, Grid, TextField } from "@mui/material"
import { useForm, SubmitHandler } from "react-hook-form"
import { AuthLayout } from "../../auth/layout/AuthLayout"
import { useStore } from "../../context/ContextProvider";
import { useEffect, useState } from "react";
import CardPelicula from "./CardPelicula";

export default function Filter() {
    const { movies} = useStore();
    const { register, handleSubmit, setValue } = useForm()
    const [filtro, setFiltro] = useState( false);

    const [filtroMovies, setFiltroMovies] = useState((localStorage.getItem('filtroMovies')) ?
        JSON.parse(localStorage.getItem('filtroMovies')) : []);
    const searchMoviesFilterTitulo = (titulo,ye,gen) => {
        const filteredMovies = movies.filter((movie) => {
            const { title, year,gender } = movie;
            return (
                title.toLowerCase().includes(titulo.toLowerCase())&&
                year.toLowerCase().includes(ye.toLowerCase())&&
                gender.toLowerCase().includes(gen.toLowerCase())
            );
        });
        setFiltroMovies(filteredMovies);
    };
    
    useEffect(() => {
        localStorage.setItem("filtroMovies", JSON.stringify(filtroMovies));
    }, [filtroMovies]);
    
    const onSubmit = (data) => {
        console.log("buscando")
        searchMoviesFilterTitulo(data.title,data.year,data.gender)
        setFiltro(true)
    }


    return (
        <Grid>
        <AuthLayout title="Buscar una Pelicula">
            <form onSubmit={handleSubmit(onSubmit)}>

                <Grid container >
                    <Grid item xs={12} sx={{ mt: 2 }}>
                        <TextField fullWidth id="outlined-required" label="Título" {...register("title", { maxLength: 20 })} />
                    </Grid>
                    <Grid item xs={12} sx={{ mt: 2 }}>
                        <TextField fullWidth id="outlined-required" label="Género" {...register("gender", { maxLength: 20 })} />
                    </Grid>
                    <Grid item xs={12} sx={{ mt: 2 }}>
                        <TextField fullWidth id="outlined-required" label="Año"  {...register("year", { maxLength: 4 })} />
                    </Grid>

                    <Button variant="contained" sx={{ mt: 2 }} type="submit" >Buscar</Button>
                    <Button variant="contained" sx={{ mt: 2, ml:15 }} onClick={()=>{setFiltro(false); setFiltroMovies([])}} >Eliminar Filtro</Button>
                </Grid>
            </form>
        </AuthLayout>
        {filtro?(
        <Grid container spacing={4} sx={{ p: 5 }}>
        {filtroMovies.map((movie) => {
          
          return (<Grid item xs={3}>
              <CardPelicula {...movie} key={movie.id} />
              </Grid>)
          
        })}
      </Grid>):(<></>)}
        
      </Grid>

    )
}