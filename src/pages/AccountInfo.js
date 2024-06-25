import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../AuthContext';
import api from '../api';
import { Container, Typography, Card, CardContent, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const AccountInfo = () => {
  const { user, logout } = useContext(AuthContext);
  const navigate = useNavigate();
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    if (!user) {
      navigate('/login');
      return;
    }

    const fetchProfile = async () => {
      try {
        const response = await api.get('/api/user');
        setProfile(response.data);
      } catch (error) {
        console.error('Error fetching user profile:', error);
      }
    };

    fetchProfile();
  }, [user, navigate]);

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  if (!profile) {
    return <div>Loading...</div>;
  }

  return (
    <Container maxWidth="sm">
      <Card>
        <CardContent>
          <Typography variant="h5" component="h2" gutterBottom>
            アカウント情報
          </Typography>
          <Typography variant="body1" component="p">
            お客様名: {profile.name}
          </Typography>
          <Typography variant="body1" component="p">
            メールアドレス: {profile.email}
          </Typography>
          <Typography variant="body1" component="p">
            電話番号: {profile.phone}
          </Typography>
          <Button variant="contained" color="primary" onClick={() => navigate('/account-settings')}>
            お客様情報の編集
          </Button>
          <Button variant="contained" color="secondary" onClick={handleLogout} style={{ marginLeft: '10px' }}>
            ログアウト
          </Button>
        </CardContent>
      </Card>
    </Container>
  );
};

export default AccountInfo;