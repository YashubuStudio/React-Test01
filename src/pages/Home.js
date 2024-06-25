import React from 'react';
import News from '../components/News';
import Blog from '../components/Blog';
import Ping from '../components/Ping';

const Home = () => {
  return (
    <div className="content">
      <h1>TOPページ</h1>
      <div className="card">
        <News />
      </div>
      <div className="card">
        <Blog />
      </div>
      <div className="card">
        <Ping />
      </div>
      <div className="card">おすすめ商品</div>
    </div>
  );
};

export default Home;
