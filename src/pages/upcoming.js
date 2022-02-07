import React, { useState, useEffect} from "react";
import { Link } from "react-router-dom";
import "../App.css";
import card from "../components/launchItem/launchItem.js";

import AdapterDateFns from '@mui/lab/AdapterDateFns';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import DatePicker from '@mui/lab/DatePicker';
import FavoriteIcon from '@mui/icons-material/Favorite';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import TextField from '@mui/material/TextField';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';

export default function Upcoming() {

    const [launches, setLaunches] = useState([]);
    const [alignment, setAlignment] = React.useState('all');
    const [filtered, setFiltered] = useState([]);
    const [fav, setFav] = useState([]);
    const [date, setDate] = useState(null);
  
    const handleChange = (event, newAlignment) => {
      if (newAlignment === 'success')
        setFiltered(launches.filter((launch)=> launch.launch_success))
      if (newAlignment === 'failed')
        setFiltered(launches.filter((launch)=> !launch.launch_success))
      if (newAlignment === 'all')
        setFiltered(launches)
      if (newAlignment === 'fav')
        setFiltered(fav)
      if (date)
        setFiltered(filtered.filter((launch)=> new Date(launch.launch_date_utc) - new Date(date) > 0))
      
      setAlignment(newAlignment);
    };
  
    const handleFav = l => {
      setFav(fav => [...fav, l]);
    }
  
    useEffect(() => {
      fetch("https://api.spacexdata.com/v3/launches/upcoming")
        .then(res => res.json())
        .then(
          (result) => {
            setLaunches(result);
            setFiltered(result);
          },
          (error) => {
            setLaunches([])
          }
        )
    }, [])
    
    return (
      <>
        <main>
          <h2>Upcoming launches</h2>
          <p>{filtered.length} launches</p>
        </main>
        <nav>
          <Link to="/">Past launches</Link>
        </nav>
        <ToggleButtonGroup
          color="primary"
          value={alignment}
          exclusive
          onChange={handleChange}
          className="filter"
        >
          <ToggleButton value="success">Succes</ToggleButton>
          <ToggleButton value="failed">Failed</ToggleButton>
          <ToggleButton value="all">All</ToggleButton>
          <ToggleButton value="fav"><FavoriteIcon/></ToggleButton>
        </ToggleButtonGroup>
        <div className="datePicker">
          <LocalizationProvider dateAdapter={AdapterDateFns}>
            <DatePicker
              label="Date picker"
              value={date}
              onChange={(newValue) => {
                setDate(newValue);
                setFiltered(filtered.filter((launch)=> new Date(launch.launch_date_utc) - new Date(newValue) > 0))
              }}
              renderInput={(params) => <TextField {...params} />}
            />
          </LocalizationProvider>
        </div>
        {filtered.map((launch)=>
              <Box sx={{ minWidth: 275 }} className='launchCard'>
                <Card variant="outlined">{card(launch, handleFav)}</Card>
              </Box>
          )}
      </>
    );
  }
  
  
  