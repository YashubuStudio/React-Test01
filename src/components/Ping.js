import React, { useState } from 'react';
import api from '../api';  // 正しいパスを指定
import { Box, Button, Typography } from '@mui/material';

const Ping = () => {
  const [message, setMessage] = useState('');

  const handlePing = () => {
    api.get('/api/ping')
      .then(response => {
        setMessage(response.data.message);
      })
      .catch(error => {
        console.error('Error fetching ping:', error);
        setMessage('Error connecting to server');
      });
  };

  return (
    <Box sx={{ p: 2 }}>
      <Button variant="contained" color="primary" onClick={handlePing}>
        Ping Server
      </Button>
      {message && (
        <Typography variant="h6" sx={{ mt: 2 }}>
          {message}
        </Typography>
      )}
    </Box>
  );
};

export default Ping;
