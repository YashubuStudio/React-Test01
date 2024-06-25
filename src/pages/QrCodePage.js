import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import QRCode from 'qrcode.react';

const QrCodePage = () => {
  const { storeId } = useParams();
  const [timestamp, setTimestamp] = useState('');

  useEffect(() => {
    const updateTimestamp = () => {
      const now = new Date();
      const formattedTimestamp = now.toLocaleString(); // 現在時刻をフォーマット
      setTimestamp(formattedTimestamp);
    };

    updateTimestamp();
    const intervalId = setInterval(updateTimestamp, 1000); // 1秒ごとに更新

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>QRコード</h1>
      <QRCode value={`${timestamp} 店舗開錠 ${storeId}`} />
      <p>{timestamp} 店舗開錠 {storeId}</p>
    </div>
  );
};

export default QrCodePage;
