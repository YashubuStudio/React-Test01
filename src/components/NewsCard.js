import React from 'react';
import { Card, CardContent, CardMedia, Typography, Link } from '@mui/material';

const NewsCard = ({ title, excerpt, image, url }) => {
  return (
    <Card style={{ maxWidth: 345, margin: '20px' }}>
      <Link href={url} target="_blank" rel="noopener" underline="none">
        <CardMedia
          component="img"
          height="140"
          image={image}
          alt={title}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="div">
            <span dangerouslySetInnerHTML={{ __html: excerpt }} />
          </Typography>
        </CardContent>
      </Link>
    </Card>
  );
};

export default NewsCard;
