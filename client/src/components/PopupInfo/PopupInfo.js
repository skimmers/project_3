// import { Icon } from '@iconify/react'
// import outlineEvStation from '@iconify-icons/ic/outline-ev-station';

// // Pass in some props below
// const GeoMarker = () => {
//     return (
//         <div className="location-marker" >
//             <Icon icon={outlineEvStation} className="location-icon" />
//         </div>
//     )
// }

// export default GeoMarker;

import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import popupInfo from "./popupInfo.css";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
  },
}));

export default function StationInfo(props) {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  console.log(props)

  return (
    <div className="popupBody">
      <p className="popupInfo">Title: {props.location.AddressInfo.Title}</p>
      <p className="popupInfo">Town: {props.location.AddressInfo.Town}</p>
      <p className="popupInfo">Power/KW: {props.location.Connections[0].PowerKW}</p>
      <p className="popupInfo">Address: {props.location.AddressInfo.AddressLine1}</p>
      <p className="popupInfo">Longitude: {props.location.AddressInfo.Longitude}</p>
      <p className="popupInfo">Latitude: {props.location.AddressInfo.Latitude}</p>
      {/* <button  type="submit" className="login-btn btn-primary btn-block">Fav</button> */}
    </div> 
  );
}



















// export default FavoritePage;