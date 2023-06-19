import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function CardPelicula({ icon, title, year,gender, description }) {
  return (
    <Card sx={{ mt: 2,maxWidth: 500,backgroundColor: 'secondary.main',borderRadius: 2 }}>
      <CardMedia
         component="img"
         alt={title}
         height="440"
         image={icon}
         sx={{mt:2, objectFit: "contain", justifyContent:'center',borderRadius: 2 }}
      />
      <CardContent >
        <Typography gutterBottom variant="h5" component="div">
        {title}
        </Typography>
        <Typography variant="subtitle1" color="text.secondary">
          Año: {year}
        </Typography>
        <Typography variant="body2" color="text.secondary" align="justify">
          {description}
        </Typography>
      </CardContent>
      <CardActions>
        <Typography  variant="subtitle1" color="text.secondary">
          Genero: {gender}
        </Typography>
      </CardActions>
    </Card>
  );
}