import React, { useEffect, useState } from 'react';
import api from '../../api';
import { Box, Typography, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';

const UserSessionsPage = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    api.get('/api/all-data/user-sessions')
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
        User Sessions
      </Typography>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>セッションID</TableCell>
              <TableCell>ユーザーID</TableCell>
              <TableCell>ログイン時間</TableCell>
              <TableCell>ログアウト時間</TableCell>
              <TableCell>デバイス情報</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((row, index) => (
              <TableRow key={index}>
                <TableCell>{row.session_id}</TableCell>
                <TableCell>{row.user_id}</TableCell>
                <TableCell>{row.login_time}</TableCell>
                <TableCell>{row.logout_time}</TableCell>
                <TableCell>{row.device_info}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default UserSessionsPage;
