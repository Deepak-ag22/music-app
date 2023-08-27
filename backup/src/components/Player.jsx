import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import SkipNextIcon from '@mui/icons-material/SkipNext';


export default function Player({song, fun}) {
    const back=()=>{
        fun(false, null);
    }
    const theme = useTheme();
  
    return (
        <>
        <button onClick={back} className="btn btn-outline-warning">Back to Songs</button>
      <Card sx={{ display: 'flex' }}>
        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
          <CardContent sx={{ flex: '1 0 auto' }}>
            <Typography component="div" variant="h5">
            {song?.trackName}
            </Typography>
            <Typography variant="subtitle1" color="text.secondary" component="div">
            {song?.artistName}
            </Typography>
          </CardContent>
          <Box sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1 }}>
            <IconButton aria-label="previous">
              {theme.direction === 'rtl' ? <SkipNextIcon /> : <SkipPreviousIcon />}
            </IconButton>
            <IconButton aria-label="play/pause">
              <PlayArrowIcon sx={{ height: 38, width: 38 }} />
            </IconButton>
            <IconButton aria-label="next">
              {theme.direction === 'rtl' ? <SkipPreviousIcon /> : <SkipNextIcon />}
            </IconButton>
          </Box>
        </Box>
        <CardMedia
          component="img"
          sx={{ width: 151 }}
          image={song.artworkUrl100}
          alt="Live from space album cover"
          />
      </Card>
      <audio controls>
            <source src={song?.previewUrl} type='audio/mp4'/>
        Your browser does not support the audio element.
        </audio>
          </>
    );
  }



export const Playr=({song, fun})=>{
    const back=()=>{
        fun(false, null);
    }
    return (
        <div>
            <button onClick={back} className="btn btn-outline-warning">Back to Songs</button>
            <p>
            <img src={song.artworkUrl100} alt='song'/>
            <br />
            {song?.artistName} {song?.trackName}
            </p>
            <br />
            <br />
        <audio controls>
            <source src={song?.previewUrl} type='audio/mp4'/>
        Your browser does not support the audio element.
        </audio>
        </div>
    )
}