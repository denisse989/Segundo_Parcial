import { Link as RouterLink, useNavigate } from "react-router-dom";
import { Grid, TextField, Button, Typography, Link } from "@mui/material";
import { Google } from "@mui/icons-material";
import { AuthLayout } from "../layout/AuthLayout";
import { useDispatch } from "../../context/ContextProvider";
import { types } from "../../context/storeReducer";
import { useForm } from "react-hook-form";
export const LoginPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { register, handleSubmit, setValue } = useForm()
  const login = () => {
    dispatch({ type: types.login });    
    navigate("/");
  };
  
  return (
    <AuthLayout title="Ingresar al Buscador">
      <form onSubmit={handleSubmit(login)}>
        <Grid container>
          <Grid item xs={12} sx={{ mt: 2 }}>
            <TextField
            required
              label="Email"
              type="email"
              placeholder="email@gmail.com"
              fullWidth
              {...register("pass", { maxLength: 10 })}
            />
          </Grid>
          <Grid item xs={12} sx={{ mt: 2 }}>
            <TextField
            required
              label="Password"
              type="password"
              placeholder="Contraseña"
              fullWidth
              {...register("pass", { maxLength: 10 })}
            />
          </Grid>
          <Grid container spacing={2} sx={{ mb: 2, mt: 1 }}>
            <Grid item xs={12} sm={6}>
              <Button variant="contained" fullWidth type="submit">
                Login
              </Button>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Button variant="contained" fullWidth>
                <Google />
                <Typography sx={{ ml: 1 }}>Google</Typography>
              </Button>
            </Grid>
          </Grid>

          <Grid container direction="row" justifyContent="end">
            <Link component={RouterLink} color="inherit" to="/auth/register">
              Crear una cuenta
            </Link>
          </Grid>
        </Grid>
      </form>
    </AuthLayout>
  );
};
