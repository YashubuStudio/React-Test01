import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Grid, Card, CardContent, CardMedia, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const fallbackStores = [
  {
    id: 1,
    name: '仮の店舗名1',
    address: '住所: hoge huga 1',
    image: 'https://via.placeholder.com/100'
  },
  {
    id: 2,
    name: '仮の店舗名2',
    address: '住所: hoge huga 2',
    image: 'https://via.placeholder.com/100'
  },
  {
    id: 3,
    name: '仮の店舗名3',
    address: '住所: hoge huga 3',
    image: 'https://via.placeholder.com/100'
  }
];

const StoreList = () => {
  const [stores, setStores] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchStores = async () => {
      try {
        const response = await axios.get('https://example.com/api/stores'); // 実際のAPIエンドポイントに変更してください
        if (response.data.length === 0) {
          setStores(fallbackStores);
        } else {
          setStores(response.data);
        }
      } catch (error) {
        console.error('Error fetching store data:', error);
        setStores(fallbackStores);
      }
    };

    fetchStores();
  }, []);

  const handleCardClick = (storeId) => {
    navigate(`/React-Test01/store-entry/qr-code/${storeId}`);
  };

  return (
    <Grid container spacing={2}>
      {stores.map(store => (
        <Grid item xs={12} key={store.id}>
          <Card sx={{ display: 'flex', alignItems: 'center' }} onClick={() => handleCardClick(store.id)}>
            <CardMedia
              component="img"
              sx={{ width: 100, height: 100 }}
              image={store.image || 'https://via.placeholder.com/100'}
              alt={store.name}
            />
            <CardContent>
              <Typography variant="h6">{store.name}</Typography>
              <Typography variant="body2" color="textSecondary">
                {store.address}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default StoreList;
