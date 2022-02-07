import React from "react";

import Box from '@mui/material/Box';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import FavoriteIcon from '@mui/icons-material/Favorite';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';

const bull = (
    <Box
      component="span"
      sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
    >
      •
    </Box>
  );
  
const card = (launch, handleFav) => (
    <React.Fragment>
       
      <CardContent>
      <CardMedia
                component="img"
                image={launch.links.mission_patch_small}
                width='128'
                className="cardImage"
              />
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          {launch.flight_number}
        </Typography>
        <Typography variant="h5" component="div">
          {launch.mission_name} {bull} {launch.launch_year}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          {launch.rocket.rocket_name}
        </Typography>
        <Typography variant="body2">
          {launch.launch_success ? 'Mission succeded!' : 'Mission failed!'}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
          <IconButton aria-label="add to favorites">
            <FavoriteIcon onClick={() => handleFav(launch)} />
          </IconButton>
        </CardActions>
    </React.Fragment>
  );

export default card;