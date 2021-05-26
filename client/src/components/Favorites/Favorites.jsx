import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Collapse from "@material-ui/core/Collapse";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import { red, cyan } from "@material-ui/core/colors";
// import FavoriteIcon from '@material-ui/icons/Favorite';
// import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
// import MoreVertIcon from '@material-ui/icons/MoreVert';
import DeleteIcon from "@material-ui/icons/Delete";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import DirectionsIcon from "@material-ui/icons/Directions";
// import { spacing } from '@material-ui/system';
import Grid from "@material-ui/core/Grid";
import EvStationIcon from "@material-ui/icons/EvStation";
// import TypeOneImage from '../../images/ev-charging-station.jpg';
import Link from "@material-ui/core/Link";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
    padding: "1 30px",
  },
  media: {
    height: 150,
    paddingTop: "56.25%", // 16:9
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: "rotate(180deg)",
  },
  avatar: {
    backgroundColor: cyan[400],
  },
}));

export default function Favorites(props) {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);
  const siteStation = props.favorite.stationSite;
  const address = props.favorite.address;

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  console.log(props);

  return (
    //Setting the container up with some spacing
    // Putting them in a row of
    <Grid
      container
      spacing={4}
      direction="row"
      // justify="center"
      alignItems="center"
    >
      <Grid item xs={12} >
        <Card className={classes.root}>
          <CardHeader
            avatar={
              <Avatar aria-label="heart-icon" className={classes.avatar}>
                {/* <FavoriteBorderIcon /> */}
                <EvStationIcon />
              </Avatar>
            }
            // action={
            //   <IconButton aria-label="settings">
            //     <MoreVertIcon />
            //   </IconButton>
            // }
            title={props.favorite.title}
            subheader={props.favorite.city}
          ></CardHeader>
          <CardMedia
            className={classes.media}
            image="https://www.usnews.com/dims4/USNEWS/8a3f41e/2147483647/thumbnail/640x420/quality/85/?url=http%3A%2F%2Fmedia.beam.usnews.com%2F6a%2Fd2%2Fbf12877b441b8dacc14c8b1337a1%2F210208-evcharger-stock.jpg"
            title="Connection Type"
          />
          <CardContent>
            <Typography
              variant="body2"
              color="textSecondary"
              component="p"
            ></Typography>
          </CardContent>
          <CardActions disableSpacing>
            {/* <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton> */}
            <IconButton aria-label="directions">
              <Link target="_blank"
              href={`https://www.google.com/maps/dir/Current+Location/${address}`}>
              <DirectionsIcon />
              </Link>
            </IconButton>
            <IconButton aria-label="station-provider-site">
              <Link target="_blank" href={siteStation}>
                <EvStationIcon />
              </Link>
            </IconButton>
            <IconButton
              className={clsx(classes.expand, {
                [classes.expandOpen]: expanded,
              })}
              onClick={handleExpandClick}
              aria-expanded={expanded}
              aria-label="show more"
            >
              <ExpandMoreIcon />
            </IconButton>
            <IconButton aria-label="delete">
              <DeleteIcon onClick={props.handleDelete} />
            </IconButton>
          </CardActions>
          <Collapse in={expanded} timeout="auto" unmountOnExit>
            <CardContent>
              <Typography paragraph className="text-center"><h2 className="text-dark">Information</h2></Typography>
              <Typography paragraph>
                <strong>Address:</strong> {props.favorite.address}
              </Typography>
              <Typography paragraph>
                <strong>Access:</strong> {props.favorite.access}
              </Typography>
              <Typography paragraph>
                <strong>Power KW:</strong> {props.favorite.power}
              </Typography>
              <Typography paragraph>
                <strong>Voltage:</strong> {props.favorite.voltage}Mw
              </Typography>
              <Typography paragraph>
                <strong>Connection Type:</strong> {props.favorite.connectionType}
              </Typography>
              <Typography paragraph>
                <strong>Station Site:</strong> {props.favorite.stationSite}
              </Typography>
            </CardContent>
          </Collapse>
        </Card>
      </Grid>
    </Grid>
  );
}
