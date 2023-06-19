import { Grid, TextField, Button } from "@mui/material";
import { AuthLayout } from "../layout/AuthLayout";
import { Link as RouterLink, useNavigate } from "react-router-dom";
import { useForm, SubmitHandler } from "react-hook-form"

export const RegisterPage = () => {
  const navigate = useNavigate();
  const { register, handleSubmit, setValue } = useForm()
  const onSubmit = (data) => {   
    console.log(data)
    navigate("/");
  };
  return (
    <AuthLayout title="Registrarse a Souvenir">
      <form onSubmit={handleSubmit(onSubmit)}>
        <Grid container>
          <Grid item xs={12} sx={{ mt: 2 }}>
            <TextField
            required
              label="Email"
              type="email"
              placeholder="email@gmail.com"
              fullWidth
              {...register("email", {  maxLength: 50 })}
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
          <Grid item xs={12} sx={{ mt: 2 }}>
            <TextField
            required
              label="Verificar Password"
              type="password"
              placeholder="Verificar Password"
              fullWidth
              {...register("passV", { maxLength: 10 })}
            />
          </Grid>
          <Grid container spacing={2} sx={{ mb: 2, mt: 1 }}>
            <Grid item xs={12} sm={12}>
              <Button variant="contained" type="submit" fullWidth>
                Registrar
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </form>
    </AuthLayout>
  );
};
