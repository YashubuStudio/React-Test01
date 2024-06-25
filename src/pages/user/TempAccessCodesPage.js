import React, { useEffect, useState } from 'react';
import api from '../../api';
import { Box, Typography, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';

const TempAccessCodesPage = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    api.get('/api/all-data/temp-access-codes')
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
        Temporary Access Codes
      </Typography>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>コードID</TableCell>
              <TableCell>ユーザーID</TableCell>
              <TableCell>アクセスコード</TableCell>
              <TableCell>有効期限</TableCell>
              <TableCell>ステータス</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((row, index) => (
              <TableRow key={index}>
                <TableCell>{row.code_id}</TableCell>
                <TableCell>{row.user_id}</TableCell>
                <TableCell>{row.access_code}</TableCell>
                <TableCell>{row.expiry_time}</TableCell>
                <TableCell>{row.status}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default TempAccessCodesPage;
