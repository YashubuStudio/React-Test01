import React, { useEffect, useState } from 'react';
import api from '../../api';
import { Box, Typography, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';

const UserProfilesPage = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    api.get('/api/all-data/user-profiles')
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
        User Profiles
      </Typography>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>ユーザーID</TableCell>
              <TableCell>プロフィール写真</TableCell>
              <TableCell>住所</TableCell>
              <TableCell>生年月日</TableCell>
              <TableCell>その他の情報</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((row, index) => (
              <TableRow key={index}>
                <TableCell>{row.user_id}</TableCell>
                <TableCell>{row.profile_picture}</TableCell>
                <TableCell>{row.address}</TableCell>
                <TableCell>{row.date_of_birth}</TableCell>
                <TableCell>{row.additional_info}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default UserProfilesPage;
