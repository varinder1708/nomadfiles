import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardActionArea from '@mui/material/CardActionArea';
import CardActions from '@mui/material/CardActions';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';

const BasicGrid3Cols = () => {
    return (<Container maxWidth="lg" sx={{ paddingTop: 3, paddingBottom: 3}}>
        <Typography variant="h4" sx={{ fontWeight: 800, paddingBottom: 3 }}>
            Articles
        </Typography>
        <Grid container spacing={3}>

            <Grid item xs={12} sm={6} md={4}>
                <Card sx={{ maxWidth: "100%" }}>
                    <CardActionArea>
                        <CardMedia
                            sx={{ height: 240 }}
                            image="https://images.pexels.com/photos/2004161/pexels-photo-2004161.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                            title="Contemplative Reptile"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="h2">
                                React useContext
                            </Typography>
                            <Typography variant="body2" color="textSecondary" component="p">
                                Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                                across all continents except Antarctica
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                    <CardActions sx={{
                        display: "flex",
                        margin: "0 10px",
                        justifyContent: "space-between"
                    }}>
                        <Box sx={{ display: "flex" }}>
                            <Avatar src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" />
                            <Box ml={2}>
                                <Typography variant="subtitle2" component="p">
                                    Guy Clemons
                                </Typography>
                                <Typography variant="subtitle2" color="textSecondary" component="p">
                                    May 14, 2020
                                </Typography>
                            </Box>
                        </Box>
                        <Box>
                            {/* <BookmarkBorderIcon /> */}
                        </Box>
                    </CardActions>
                </Card>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
                <Card sx={{ maxWidth: "100%" }}>
                    <CardActionArea>
                        <CardMedia
                            sx={{ height: 240 }}
                            image="https://images.pexels.com/photos/2004161/pexels-photo-2004161.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                            title="Contemplative Reptile"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="h2">
                                React useContext
                            </Typography>
                            <Typography variant="body2" color="textSecondary" component="p">
                                Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                                across all continents except Antarctica
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                    <CardActions sx={{
                        display: "flex",
                        margin: "0 10px",
                        justifyContent: "space-between"
                    }}>
                        <Box sx={{ display: "flex" }}>
                            <Avatar src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" />
                            <Box ml={2}>
                                <Typography variant="subtitle2" component="p">
                                    Guy Clemons
                                </Typography>
                                <Typography variant="subtitle2" color="textSecondary" component="p">
                                    May 14, 2020
                                </Typography>
                            </Box>
                        </Box>
                        <Box>
                            {/* <BookmarkBorderIcon /> */}
                        </Box>
                    </CardActions>
                </Card>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
                <Card sx={{ maxWidth: "100%" }}>
                    <CardActionArea>
                        <CardMedia
                            sx={{ height: 240 }}
                            image="https://images.pexels.com/photos/2004161/pexels-photo-2004161.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                            title="Contemplative Reptile"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="h2">
                                React useContext
                            </Typography>
                            <Typography variant="body2" color="textSecondary" component="p">
                                Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                                across all continents except Antarctica
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                    <CardActions sx={{
                        display: "flex",
                        margin: "0 10px",
                        justifyContent: "space-between"
                    }}>
                        <Box sx={{ display: "flex" }}>
                            <Avatar src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" />
                            <Box ml={2}>
                                <Typography variant="subtitle2" component="p">
                                    Guy Clemons
                                </Typography>
                                <Typography variant="subtitle2" color="textSecondary" component="p">
                                    May 14, 2020
                                </Typography>
                            </Box>
                        </Box>
                        <Box>
                            {/* <BookmarkBorderIcon /> */}
                        </Box>
                    </CardActions>
                </Card>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
                <Card sx={{ maxWidth: "100%" }}>
                    <CardActionArea>
                        <CardMedia
                            sx={{ height: 240 }}
                            image="https://images.pexels.com/photos/2004161/pexels-photo-2004161.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                            title="Contemplative Reptile"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="h2">
                                React useContext
                            </Typography>
                            <Typography variant="body2" color="textSecondary" component="p">
                                Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                                across all continents except Antarctica
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                    <CardActions sx={{
                        display: "flex",
                        margin: "0 10px",
                        justifyContent: "space-between"
                    }}>
                        <Box sx={{ display: "flex" }}>
                            <Avatar src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" />
                            <Box ml={2}>
                                <Typography variant="subtitle2" component="p">
                                    Guy Clemons
                                </Typography>
                                <Typography variant="subtitle2" color="textSecondary" component="p">
                                    May 14, 2020
                                </Typography>
                            </Box>
                        </Box>
                        <Box>
                            {/* <BookmarkBorderIcon /> */}
                        </Box>
                    </CardActions>
                </Card>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
                <Card sx={{ maxWidth: "100%" }}>
                    <CardActionArea>
                        <CardMedia
                            sx={{ height: 240 }}
                            image="https://images.pexels.com/photos/2004161/pexels-photo-2004161.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                            title="Contemplative Reptile"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="h2">
                                React useContext
                            </Typography>
                            <Typography variant="body2" color="textSecondary" component="p">
                                Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                                across all continents except Antarctica
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                    <CardActions sx={{
                        display: "flex",
                        margin: "0 10px",
                        justifyContent: "space-between"
                    }}>
                        <Box sx={{ display: "flex" }}>
                            <Avatar src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" />
                            <Box ml={2}>
                                <Typography variant="subtitle2" component="p">
                                    Guy Clemons
                                </Typography>
                                <Typography variant="subtitle2" color="textSecondary" component="p">
                                    May 14, 2020
                                </Typography>
                            </Box>
                        </Box>
                        <Box>
                            {/* <BookmarkBorderIcon /> */}
                        </Box>
                    </CardActions>
                </Card>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
                <Card sx={{ maxWidth: "100%" }}>
                    <CardActionArea>
                        <CardMedia
                            sx={{ height: 240 }}
                            image="https://images.pexels.com/photos/2004161/pexels-photo-2004161.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                            title="Contemplative Reptile"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="h2">
                                React useContext
                            </Typography>
                            <Typography variant="body2" color="textSecondary" component="p">
                                Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                                across all continents except Antarctica
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                    <CardActions sx={{
                        display: "flex",
                        margin: "0 10px",
                        justifyContent: "space-between"
                    }}>
                        <Box sx={{ display: "flex" }}>
                            <Avatar src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" />
                            <Box ml={2}>
                                <Typography variant="subtitle2" component="p">
                                    Guy Clemons
                                </Typography>
                                <Typography variant="subtitle2" color="textSecondary" component="p">
                                    May 14, 2020
                                </Typography>
                            </Box>
                        </Box>
                        <Box>
                            {/* <BookmarkBorderIcon /> */}
                        </Box>
                    </CardActions>
                </Card>
            </Grid>

        </Grid>
        {/* <Box my={4} className={classes.paginationContainer}>
          <Pagination count={10} />
        </Box> */}
    </Container>)
}
export default BasicGrid3Cols;