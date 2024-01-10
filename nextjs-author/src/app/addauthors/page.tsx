"use client"
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Theme, useTheme } from '@mui/material/styles';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import Button from '@mui/material/Button';
import { useState } from 'react';

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};
function getStyles(name: string, personName: string[], theme: Theme) {
    return {
      fontWeight:
        personName.indexOf(name) === -1
          ? theme.typography.fontWeightRegular
          : theme.typography.fontWeightMedium,
    };
  }
  const number = [
  "yes",
  "no",
  "is dead"
  ];
  const Gender = [
   "male",
   "female"
  ];
export default function BasicTextFields() {
    
<h1 style={{textAlign:"center"}}>Add Author</h1>
  const theme = useTheme();
  const [personName, setPersonName] = useState<string[]>([]);

  const handleChange = (event: SelectChangeEvent<typeof personName>) => {
    const {
      target: { value },
    } = event;
    setPersonName(
      // On autofill we get a stringified value.
      typeof value === 'string' ? value.split(',') : value,
    );
  };
    return (

        
        <div style={{width:"20%",margin:0}}>
            <h1 >Add Author</h1>
      <Box
        component="form"
        sx={{
          '& > :not(style)': { m: 1, width: '25ch' },
      margin:0  }}
        noValidate
        autoComplete="off"
      >
        <TextField id="standard-basic" label="Name" variant="standard" />
        <TextField id="standard-basic" label="Birth Year" variant="standard" />
        <TextField id="standard-basic" label="Genre" variant="standard" />
      </Box>
       <div>
      <FormControl sx={{ m: 1, width: 250 }}>
        <InputLabel id="demo-multiple-name-label">is Dead</InputLabel>
        <Select
          labelId="demo-multiple-name-label"
          id="demo-multiple-name"
          multiple
          value={personName}
          onChange={handleChange}
          input={<OutlinedInput label="is Dead" />}
          MenuProps={MenuProps}
        >
          {number.map((name) => (
            <MenuItem
              key={name}
              value={number}
              style={getStyles(name, personName, theme)}
            >
              {number}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
    <div>
      <FormControl sx={{ m: 1, width: 250 }}>
        <InputLabel id="demo-multiple-name-label">Gender</InputLabel>
        <Select
          labelId="demo-multiple-name-label"
          id="demo-multiple-name"
          multiple
          value={personName}
          onChange={handleChange}
          input={<OutlinedInput label="Gender" />}
          MenuProps={MenuProps}
        >
          {number.map((name) => (
            <MenuItem
              key={name}
              value={name}
              style={getStyles(name, personName, theme)}
            >
              {Gender}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
    <div>
    <TextField id="outlined-basic" label="Image Url" variant="outlined" />
    </div>
    <Button variant="outlined">Add</Button>
      </div>
    );
  }