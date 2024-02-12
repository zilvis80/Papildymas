import React from 'react';
import Card from '../Card/Card';
function MyCard({ cardData, setCardData }) {
  return (
    <main>
      {cardData.map(({ title, description }) => (
        <Card
          key={title}
          title={title}
          description={description}
          setCardData={setCardData}
        />
      ))}
    </main>
  );
}
export default MyCard;
