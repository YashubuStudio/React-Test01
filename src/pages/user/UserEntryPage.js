import React, { useEffect, useState } from 'react';
import api from '../../api';
import { Box, Typography, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';

const UserEntryPage = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    api.get('/api/all-data/user-entry')
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
        User Entry
      </Typography>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>ユーザーID</TableCell>
              <TableCell>入店状況（entry/exit）</TableCell>
              <TableCell>最後に使用した一時コード</TableCell>
              <TableCell>最終入店時間</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((row, index) => (
              <TableRow key={index}>
                <TableCell>{row.user_id}</TableCell>
                <TableCell>{row.entry}</TableCell>
                <TableCell>{row.last_access_code}</TableCell>
                <TableCell>{row.last_login_time}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default UserEntryPage;
