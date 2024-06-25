import React, { useState, useEffect } from 'react';
import axios from 'axios';
import NewsCard from './NewsCard';
import { Grid } from '@mui/material';

const News = () => {
  const [news, setNews] = useState([]);

  useEffect(() => {
    axios.get('https://hirosequality.com/wp-json/wp/v2/posts')
      .then(response => {
        setNews(response.data);
      })
      .catch(error => {
        console.error('There was an error fetching the news!', error);
      });
  }, []);

  return (
    <div>
      <h1>News</h1>
      <Grid container spacing={3}>
        {news.slice(0, 3).map((item) => (
          <Grid item key={item.id} xs={12} sm={6} md={4}>
            <NewsCard
              title={item.title.rendered}
              excerpt={item.excerpt.rendered}
              image={item.featured_media ? `https://hirosequality.com/wp-json/wp/v2/media/${item.featured_media}` : 'https://via.placeholder.com/150'}
              url={item.link} // 外部リンクURLを渡す
            />
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default News;
