import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function CustomizedCard(props) {
  return (
    <Card sx={{ height:"220", width:"300px", margin:"16px", borderStyle:"solid", borderColor:" #e4e4e4"  }}>
      <CardMedia
        component="img"
        height="220"
        image={props.urls.small}
        alt="green iguana"
      />
      <CardContent sx={{height:"50px"}}>
        <Typography variant="body2" color="text.secondary">
          {props.alt_description}
        </Typography>
      </CardContent>
      <CardActions>
      <Button size="small" onClick={()=>window.open(props.urls.full)} sx={{bgcolor:"black", color:"#939393", fontWeight:"500px"}}>Full Resolution</Button>
      </CardActions>
    </Card>
  );
}

// #caa9a9
