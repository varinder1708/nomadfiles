import Card from "@mui/material/Card";
import CardActionArea from "@mui/material/CardActionArea";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Button from "@mui/material/Button";


import Typography from "@mui/material/Typography";


const FCard = ({ theme }) => {
  //theme values->Stack,Grid passed from basicgrid and basicstack

  return (
    <Card variant={'plain'} sx={{ border: theme === "Grid" ? '1px solid #eeeeee' : '' }} >
      <CardActionArea>
        <CardMedia

          component="img"
          image={"https://material-ui.com/static/images/cards/contemplative-reptile.jpg"}
          title="Contemplative Reptile"
          //height={theme === "Grid" ? "200" : "400"}
          maxwidth="100%"

        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Lizard
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Lizards are a widespread group of squamate reptiles, with over
            6,000 species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Read More
        </Button>

      </CardActions>
    </Card >
  )
}
export default FCard;