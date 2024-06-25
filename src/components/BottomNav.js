import React, { useState, useEffect } from 'react';
import { BottomNavigation, BottomNavigationAction, Paper } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import StoreIcon from '@mui/icons-material/Store';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import { useNavigate, useLocation } from 'react-router-dom';

const BottomNav = () => {
  const [value, setValue] = useState(0);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    switch (location.pathname) {
      case '/':
        setValue(0);
        break;
      case '/store-entry':
        setValue(1);
        break;
      case '/coupons':
        setValue(2);
        break;
      default:
        break;
    }
  }, [location.pathname]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
    switch (newValue) {
      case 0:
        navigate('/');
        break;
      case 1:
        navigate('/store-entry');
        break;
      case 2:
        navigate('/coupons');
        break;
      default:
        break;
    }
  };

  return (
    <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }} elevation={3}>
      <BottomNavigation
        value={value}
        onChange={handleChange}
        showLabels
      >
        <BottomNavigationAction label="TOP" icon={<HomeIcon />} />
        <BottomNavigationAction label="店舗入店" icon={<StoreIcon />} />
        <BottomNavigationAction label="クーポン" icon={<LocalOfferIcon />} />
      </BottomNavigation>
    </Paper>
  );
};

export default BottomNav;
