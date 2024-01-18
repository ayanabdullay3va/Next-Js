import  React,{useEffect, useState} from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import axios from "axios"
import "././../cards/card.scss"
export default function MediaCard() {
    const [data,setData]=useState("")
    useEffect(()=>{
        axios.get("http://localhost:3003/product").then((res)=>{
setData(res.data)
    })
    },[])
    console.log(data);
  return (
    <div className='cards-contain'>
        <div className='card-text'>
        <p>POPULAR PRODUCTS
</p>
<h1>Our Products</h1>
<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. <br /> Repudiandae nostrum natus excepturi fuga ullam accusantium vel ut eveniet aut consequatur laboriosam ipsam.</p>
        </div>
 
        
 <div style={{ display:"grid" , width:"70%" , margin:"0 auto" , gridTemplateColumns:"1fr 1fr 1fr" , gap:"20px"}}>
    {data && data.map( elem => <Card sx={{ maxWidth: 345 }}>
        <CardMedia
        sx={{ height: 140 }}
        image="/static/images/cards/contemplative-reptile.jpg"
        title="green iguana"
       />
       <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {elem.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
       </CardContent>
       <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
       </CardActions>
          </Card>)}
 </div>
 
 
 
    

    </div>
  );
}