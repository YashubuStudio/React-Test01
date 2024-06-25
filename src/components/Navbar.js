import React, { useContext } from 'react';
import { AppBar, Toolbar, Typography, IconButton, Button } from '@mui/material';
import { AccountCircle } from '@mui/icons-material';
import { Link } from 'react-router-dom';
import { AuthContext } from '../AuthContext';

const Navbar = () => {
  const { user, logout } = useContext(AuthContext);

  return (
    <AppBar position="fixed">
      <Toolbar style={{ justifyContent: 'space-between' }}>
        <IconButton edge="start" color="inherit" aria-label="account" component={Link} to="/React-Test01/account-info" sx={{ transform: 'scale(2)' }}>
          <AccountCircle />
        </IconButton>
        <Typography variant="h6" style={{ flexGrow: 1, textAlign: 'center' }}>
          <Link to="/React-Test01/" style={{ color: 'inherit', textDecoration: 'none' }}>
            ロゴ
          </Link>
        </Typography>
        {user ? (
          <Button color="inherit" onClick={logout}>
            ログアウト
          </Button>
        ) : (
          <Button color="inherit" component={Link} to="/React-Test01/login">
            ログイン
          </Button>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
