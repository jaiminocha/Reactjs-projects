import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

export default function ActionAreaCard({quote, author}) {
  return (
    <Card className='card' sx={{ maxWidth: 345 }}>
        <CardActionArea>
            <CardContent>
            <Typography gutterBottom variant="h5" component="div">
                {quote}
            </Typography>
            <Typography variant="body2" color="text.secondary">
                -{author}
            </Typography>
            </CardContent>
        </CardActionArea>
    </Card>
  );
}