import React from 'react';
import { mockData } from '../../mockData';
// components
import Card from '../Card/Card';

import './Main.scss';

function Main() {
  console.log(mockData);
  return (
    <main className='main-container'>
      {mockData.map((item) => (
        <Card
          key={item.title}
          title={item.title}
          description={item.description}
        />
      ))}
    </main>
  );
}

export default Main;
