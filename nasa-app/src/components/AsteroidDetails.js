import { Card, CardContent, Typography,CardActionArea } from '@mui/material'
import { textAlign } from '@mui/system'
import React from 'react'
import { useLocation } from 'react-router-dom'


const AsteroidDetails = () => {
  const location=useLocation()
  console.log(location.state)

    return (
        <div style={{marginTop:"120px", marginLeft:"20%"}}>
           

     <Card sx={{ maxWidth: 800 }}>
      <CardActionArea>
       
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
          {location.state.name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
         {` nasa_jpl_url: ${location.state.nasa_jpl_url}`}
        
          </Typography>
          <Typography variant="body2" color="text.secondary">
        
         {` is_potentially_hazardous_asteroid:${(location.state.is_potentially_hazardous_asteroid?"YES":"NO")}`}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
        </div>
    )
}

export default AsteroidDetails
