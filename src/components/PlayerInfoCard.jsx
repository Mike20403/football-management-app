// PlayerInfoCard.jsx
import React from 'react';
import { Card } from 'react-bootstrap';

const PlayerInfoCard = ({ title, value }) => {
  return (
    <Card.Text>
      <strong>{title}:</strong> {value}
    </Card.Text>
  );
};

export default PlayerInfoCard;
