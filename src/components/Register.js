import React, { useState } from 'react';
import { Container, TextField, Button, Typography, Box, FormControlLabel, Checkbox, Link } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import api from '../api';

const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [termsAccepted, setTermsAccepted] = useState(false);
  const [privacyAccepted, setPrivacyAccepted] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!termsAccepted || !privacyAccepted) {
      setError('利用規約とプライバシーポリシーに同意してください。');
      return;
    }

    try {
      await api.post('/api/register', { email, password, name });
      setSuccess('ユーザー登録に成功しました。');
      setError('');
      navigate('/login');
    } catch (error) {
      console.error('Registration failed:', error);
      setError('ユーザー登録に失敗しました。');
      setSuccess('');
    }
  };

  return (
    <Container maxWidth="sm">
      <Box sx={{ mt: 5 }}>
        <Typography variant="h5" gutterBottom>
          ユーザー登録
        </Typography>
        {error && <Typography color="error">{error}</Typography>}
        {success && <Typography color="success">{success}</Typography>}
        <form onSubmit={handleSubmit}>
          <TextField
            fullWidth
            margin="normal"
            label="名前"
            name="name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <TextField
            fullWidth
            margin="normal"
            label="メールアドレス"
            name="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <TextField
            fullWidth
            margin="normal"
            label="パスワード"
            name="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={termsAccepted}
                onChange={(e) => setTermsAccepted(e.target.checked)}
              />
            }
            label={
              <Typography>
                <Link href="https://www.googlesite.ykvario.com/%E5%88%A9%E7%94%A8%E8%A6%8F%E7%B4%84" target="_blank" rel="noopener">
                  利用規約
                </Link>
                に同意します
              </Typography>
            }
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={privacyAccepted}
                onChange={(e) => setPrivacyAccepted(e.target.checked)}
              />
            }
            label={
              <Typography>
                <Link href="https://www.googlesite.ykvario.com/%E3%83%97%E3%83%A9%E3%82%A4%E3%83%90%E3%82%B7%E3%83%BC%E3%83%9D%E3%83%AA%E3%82%B7%E3%83%BC" target="_blank" rel="noopener">
                  プライバシーポリシー
                </Link>
                に同意します
              </Typography>
            }
          />
          <Button variant="contained" color="primary" type="submit" fullWidth>
            登録
          </Button>
        </form>
      </Box>
    </Container>
  );
};

export default Register;
