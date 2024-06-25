import React, { useState, useEffect, useContext } from 'react';
import { AuthContext } from '../AuthContext';
import api from '../api';
import { Container, TextField, Button, Typography, Box, Accordion, AccordionSummary, AccordionDetails } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useNavigate } from 'react-router-dom';

const AccountSettings = () => {
  const { user, setUser } = useContext(AuthContext);
  const navigate = useNavigate();
  const [profile, setProfile] = useState({
    email: '',
    name: '',
    phone: '',
    address: '',
    date_of_birth: '',
    additional_info: ''
  });
  const [passwords, setPasswords] = useState({
    currentPassword: '',
    newPassword: '',
    confirmPassword: ''
  });
  const [message, setMessage] = useState('');

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await api.get(`/api/user/${user.user_id}`);
        const profileResponse = await api.get(`/api/user/${user.user_id}/profile`);
        setProfile({
          email: response.data.email,
          name: response.data.name,
          phone: response.data.phone,
          address: profileResponse.data.address || '',
          date_of_birth: profileResponse.data.date_of_birth ? new Date(profileResponse.data.date_of_birth).toISOString().split('T')[0] : '',
          additional_info: profileResponse.data.additional_info || ''
        });
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };

    if (user) {
      fetchUserData();
    }
  }, [user]);

  const handleProfileChange = (e) => {
    setProfile({ ...profile, [e.target.name]: e.target.value });
  };

  const handlePasswordChange = (e) => {
    setPasswords({ ...passwords, [e.target.name]: e.target.value });
  };

  const handleProfileSubmit = async (e) => {
    e.preventDefault();
    try {
      await api.put(`/api/user/${user.user_id}`, {
        email: profile.email,
        name: profile.name,
        phone: profile.phone
      });
      await api.put(`/api/user/${user.user_id}/profile`, {
        address: profile.address,
        date_of_birth: profile.date_of_birth,
        additional_info: profile.additional_info
      });
      const updatedProfile = await api.get(`/api/user/${user.user_id}`);
      const updatedProfileData = await api.get(`/api/user/${user.user_id}/profile`);
      setUser({ ...updatedProfile.data, ...updatedProfileData.data });
      setMessage('Profile updated successfully');
    } catch (error) {
      setMessage('Error updating profile');
      console.error('Error updating profile:', error);
    }
  };

  const handlePasswordSubmit = async (e) => {
    e.preventDefault();
    if (passwords.newPassword !== passwords.confirmPassword) {
      setMessage('New password and confirm password do not match');
      return;
    }

    try {
      await api.put(`/api/user/${user.user_id}/password`, {
        currentPassword: passwords.currentPassword,
        newPassword: passwords.newPassword
      });
      setMessage('Password updated successfully');
    } catch (error) {
      setMessage('Error updating password');
      console.error('Error updating password:', error);
    }
  };

  return (
    <Container maxWidth="sm">
      <Box sx={{ mt: 5 }}>
        <Typography variant="h5" gutterBottom>
          アカウント情報の編集
        </Typography>
        {message && <Typography color={message.includes('successfully') ? 'primary' : 'error'}>{message}</Typography>}
        <form onSubmit={handleProfileSubmit}>
          <TextField
            fullWidth
            margin="normal"
            label="メールアドレス"
            name="email"
            type="email"
            value={profile.email}
            onChange={handleProfileChange}
            placeholder={profile.email === '' ? '登録されていません' : ''}
          />
          <TextField
            fullWidth
            margin="normal"
            label="名前"
            name="name"
            type="text"
            value={profile.name}
            onChange={handleProfileChange}
            placeholder={profile.name === '' ? '登録されていません' : ''}
          />
          <TextField
            fullWidth
            margin="normal"
            label="電話番号"
            name="phone"
            type="text"
            value={profile.phone}
            onChange={handleProfileChange}
            placeholder={profile.phone === '' ? '登録されていません' : ''}
          />
          <TextField
            fullWidth
            margin="normal"
            label="住所"
            name="address"
            type="text"
            value={profile.address}
            onChange={handleProfileChange}
            placeholder={profile.address === '' ? '登録されていません' : ''}
          />
          <TextField
            fullWidth
            margin="normal"
            label="生年月日"
            name="date_of_birth"
            type="date"
            value={profile.date_of_birth}
            onChange={handleProfileChange}
            InputLabelProps={{ shrink: true }}
            placeholder={profile.date_of_birth === '' ? '登録されていません' : ''}
          />
          <TextField
            fullWidth
            margin="normal"
            label="追加情報"
            name="additional_info"
            type="text"
            value={profile.additional_info}
            onChange={handleProfileChange}
            placeholder={profile.additional_info === '' ? '登録されていません' : ''}
          />
          <Button variant="contained" color="primary" type="submit" fullWidth>
            保存
          </Button>
        </form>

        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography>パスワードの変更</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <form onSubmit={handlePasswordSubmit}>
              <TextField
                fullWidth
                margin="normal"
                label="現在のパスワード"
                name="currentPassword"
                type="password"
                value={passwords.currentPassword}
                onChange={handlePasswordChange}
              />
              <TextField
                fullWidth
                margin="normal"
                label="新しいパスワード"
                name="newPassword"
                type="password"
                value={passwords.newPassword}
                onChange={handlePasswordChange}
              />
              <TextField
                fullWidth
                margin="normal"
                label="新しいパスワードの確認"
                name="confirmPassword"
                type="password"
                value={passwords.confirmPassword}
                onChange={handlePasswordChange}
              />
              <Button variant="contained" color="primary" type="submit" fullWidth>
                パスワードを変更
              </Button>
            </form>
          </AccordionDetails>
        </Accordion>

        <Button variant="contained" color="secondary" onClick={() => navigate('/account-info')} style={{ marginTop: '10px' }}>
          戻る
        </Button>
      </Box>
    </Container>
  );
};

export default AccountSettings;
