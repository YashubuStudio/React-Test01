import React, { useEffect, useState } from 'react';
import api from '../../api';
import { Box, Typography, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';

const AccessLogsPage = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    api.get('/api/all-data/access-logs')
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
        Access Logs
      </Typography>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>ログID</TableCell>
              <TableCell>ユーザーID</TableCell>
              <TableCell>店舗ID</TableCell>
              <TableCell>アクセス時間</TableCell>
              <TableCell>アクセスタイプ</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((row, index) => (
              <TableRow key={index}>
                <TableCell>{row.log_id}</TableCell>
                <TableCell>{row.user_id}</TableCell>
                <TableCell>{row.store_id}</TableCell>
                <TableCell>{row.access_time}</TableCell>
                <TableCell>{row.access_type}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default AccessLogsPage;
