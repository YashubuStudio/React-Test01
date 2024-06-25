import React from 'react';
import { Box, Typography, Paper } from '@mui/material';
import { GoogleMap, useJsApiLoader, Marker } from '@react-google-maps/api';
import StoreList from './StoreList'; // StoreListコンポーネントをインポート

const containerStyle = {
  width: '100%',
  height: '30vh' // 高さを画面の30％に設定
};

const center = {
  lat: 34.7691, // 豊橋の緯度
  lng: 137.3914 // 豊橋の経度
};

const StoreEntry = () => {
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: 'AIzaSyCMJe_tT7UTig9Jk0l3gYvWcn4Ljo5Y8SY' // ここに取得したAPIキーを入力
  });

  return (
    <Box sx={{ height: '100vh', overflow: 'hidden' }}>
      <Paper elevation={3} sx={{ position: 'fixed', top: 64, width: '100%', zIndex: 1 }}>
        {isLoaded ? (
          <GoogleMap
            mapContainerStyle={containerStyle}
            center={center}
            zoom={14}
            options={{
              disableDefaultUI: true, // デフォルトのUIを無効にする
              gestureHandling: true // ジェスチャー操作を無効にする
            }}
          >
            {/* 仮の店舗データ。外部APIからのデータを使用する場合は、この部分を調整してください。 */}
            <Marker position={{ lat: 35.6895, lng: 139.6917 }} />
            <Marker position={{ lat: 35.6897, lng: 139.6921 }} />
            <Marker position={{ lat: 35.6899, lng: 139.6923 }} />
          </GoogleMap>
        ) : (
          <Typography variant="h5" align="center">Loading Map...</Typography>
        )}
      </Paper>
      <Box sx={{ mt: '30vh', height: 'calc(100vh - 30vh - 64px)', overflowY: 'auto' }}>
        <StoreList /> {/* 店舗一覧コンポーネントを表示 */}
      </Box>
    </Box>
  );
};

export default StoreEntry;