import React, { useEffect, useState } from 'react';
import api from '../../api';
import { Box, Typography, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';

const StoresPage = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    api.get('/api/all-data/stores')
      .then(response => {
        setData(response.data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  return (
    <Box sx={{ p: 2 }}>
      <Typography variant="h4" gutterBottom>
        Stores
      </Typography>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>店舗ID</TableCell>
              <TableCell>店舗名</TableCell>
              <TableCell>住所</TableCell>
              <TableCell>電話</TableCell>
              <TableCell>ステータス</TableCell>
              <TableCell>開店日</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((row, index) => (
              <TableRow key={index}>
                <TableCell>{row.store_id}</TableCell>
                <TableCell>{row.store_name}</TableCell>
                <TableCell>{row.store_address}</TableCell>
                <TableCell>{row.store_phone}</TableCell>
                <TableCell>{row.store_status}</TableCell>
                <TableCell>{row.opening_date}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default StoresPage;
