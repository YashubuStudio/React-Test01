import React, { useEffect, useState } from 'react';
import api from '../api';
import { Box, Typography, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';

const AllDataPage = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    api.get('/api/all-data')
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
        データベース全体データ
      </Typography>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>ユーザーID</TableCell>
              <TableCell>メール</TableCell>
              <TableCell>名前</TableCell>
              <TableCell>電話</TableCell>
              <TableCell>役割</TableCell>
              <TableCell>プロフィール写真</TableCell>
              <TableCell>住所</TableCell>
              <TableCell>生年月日</TableCell>
              <TableCell>その他の情報</TableCell>
              <TableCell>セッションID</TableCell>
              <TableCell>ログイン時間</TableCell>
              <TableCell>ログアウト時間</TableCell>
              <TableCell>デバイス情報</TableCell>
              <TableCell>ログID</TableCell>
              <TableCell>店舗ID</TableCell>
              <TableCell>アクセス時間</TableCell>
              <TableCell>アクセスタイプ</TableCell>
              <TableCell>入店者の役割</TableCell>
              <TableCell>コードID</TableCell>
              <TableCell>アクセスコード</TableCell>
              <TableCell>有効期限</TableCell>
              <TableCell>ステータス</TableCell>
              <TableCell>入店状況</TableCell>
              <TableCell>最後のアクセスコード</TableCell>
              <TableCell>最終入店時間</TableCell>
              <TableCell>店舗名</TableCell>
              <TableCell>店舗の住所</TableCell>
              <TableCell>店舗の電話番号</TableCell>
              <TableCell>店舗の状態</TableCell>
              <TableCell>開業日</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((row, index) => (
              <TableRow key={index}>
                <TableCell>{row.user_id}</TableCell>
                <TableCell>{row.email}</TableCell>
                <TableCell>{row.name}</TableCell>
                <TableCell>{row.phone}</TableCell>
                <TableCell>{row.role}</TableCell>
                <TableCell>{row.profile_picture}</TableCell>
                <TableCell>{row.address}</TableCell>
                <TableCell>{row.date_of_birth}</TableCell>
                <TableCell>{row.additional_info}</TableCell>
                <TableCell>{row.session_id}</TableCell>
                <TableCell>{row.login_time}</TableCell>
                <TableCell>{row.logout_time}</TableCell>
                <TableCell>{row.device_info}</TableCell>
                <TableCell>{row.log_id}</TableCell>
                <TableCell>{row.store_id}</TableCell>
                <TableCell>{row.access_time}</TableCell>
                <TableCell>{row.access_type}</TableCell>
                <TableCell>{row.access_role}</TableCell> {/* 修正: 入店者の役割 */}
                <TableCell>{row.code_id}</TableCell>
                <TableCell>{row.access_code}</TableCell>
                <TableCell>{row.expiry_time}</TableCell>
                <TableCell>{row.status}</TableCell>
                <TableCell>{row.entry}</TableCell>
                <TableCell>{row.last_access_code}</TableCell>
                <TableCell>{row.last_login_time}</TableCell>
                <TableCell>{row.store_name}</TableCell>
                <TableCell>{row.store_address}</TableCell>
                <TableCell>{row.store_phone}</TableCell>
                <TableCell>{row.store_status}</TableCell> {/* 修正: 店舗の状態 */}
                <TableCell>{row.opening_date}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default AllDataPage;
