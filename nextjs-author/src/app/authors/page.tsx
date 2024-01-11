"use client"

import { useState,useEffect } from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Link from 'next/link';
import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import ListSubheader from '@mui/material/ListSubheader';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import axios from 'axios';

const options = [""];

interface Authors{
 
  fullname:String,
  birthdate:String,
  Genre:String,
  Gender:String

}

export default function ControllableStates() {
  const [data, setData] = useState<{  
    fullname:String,
    birthdate:String,
    Genre:String,
    Gender:String }[]>([])
  const [inputValue, setInputValue] = useState('');
useEffect(()=>{
  axios("http://localhost:3003/Users").then((res)=>{
   console.log('test: ',res.data);
   setData(res.data)
  })
},[])
  return (
<>
    <Box sx={{ flexGrow: 1 ,}}>
    <AppBar position="static" style={{backgroundColor:"black"}}>
      <Toolbar>
        
        <Typography variant="h4" component="div" sx={{ flexGrow: 1 }}>
          Authors
        </Typography>
        <Button color="inherit"><Link href="/home">Home</Link> </Button>
        <Button color="inherit"><Link href={"/authors"}>Authors</Link></Button>
        <Button color="inherit"><Link href={"/addauthors"}>Add Authors</Link></Button>
      </Toolbar>
    </AppBar>
  </Box>
  <br />
  <br />
    <div>
    <div>
      <FormControl sx={{ m: 1, minWidth: 120 }}>
        <InputLabel htmlFor="grouped-native-select">Grouping</InputLabel>
        <Select native defaultValue="" id="grouped-native-select" label="Grouping">
          <option aria-label="None" value="" />
          <optgroup label="Category 1">
            <option value={1}>Option 1</option>
            <option value={2}>Option 2</option>
          </optgroup>
          <optgroup label="Category 2">
            <option value={3}>Option 3</option>
            <option value={4}>Option 4</option>
          </optgroup>
        </Select>
      </FormControl>
      <FormControl sx={{ m: 1, minWidth: 120 }}>
        <InputLabel htmlFor="grouped-select">Grouping</InputLabel>
        <Select defaultValue="" id="grouped-select" label="Grouping">
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <ListSubheader>Category 1</ListSubheader>
          <MenuItem value={1}>Option 1</MenuItem>
          <MenuItem value={2}>Option 2</MenuItem>
          <ListSubheader>Category 2</ListSubheader>
          <MenuItem value={3}>Option 3</MenuItem>
          <MenuItem value={4}>Option 4</MenuItem>
        </Select>
      </FormControl>
    </div>
  

<div>

  <>

  {data && data.map((elem, i) => {
 return <Card key={i} sx={{ maxWidth: 345 }}>
    <CardMedia
      component="img"
      height="140"
      image=""
    />
    <CardContent>
      <Typography gutterBottom variant="h5" component="div">
        {elem.fullname}
      </Typography>
      <Typography variant="body2" color="text.secondary">
        BirthDate: {elem.birthdate}
      </Typography>
      <Typography variant="body2" color="text.secondary">
        Genre: {elem.Genre}
      </Typography>
      <Typography variant="body2" color="text.secondary">
        Gender: {elem.Gender}
      </Typography>
    </CardContent>
    <CardActions>
      <Link href='/detail'><Button size="small">Detail</Button></Link>
    </CardActions>
  </Card>
})}

</>
</div>
     </div>
  
    </>
  );
}