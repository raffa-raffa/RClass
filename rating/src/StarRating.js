// StarRating.js

import React, { useState } from 'react';
import './StarRating.css';

const StarRating = ({ initialRating = 0, onRatingChange }) => {
  const [rating, setRating] = useState(initialRating);

  const handleStarClick = (selectedRating) => {
    setRating(selectedRating);
    if (onRatingChange) {
      onRatingChange(selectedRating);
    }
  };

  return (
    <div className="StarRating">
      {[1, 2, 3, 4, 5].map((value) => (
        <Star
          key={value}
          selected={value <= Math.ceil(rating)}
          onClick={() => handleStarClick(value)}
          ratingValue={value}
        />
      ))}
    </div>
  );
};

const Star = ({ selected, onClick, ratingValue }) => (
  <span
    className={`Star${selected ? ' Selected' : ''}`}
    onClick={onClick}
    role="img"
    aria-label={selected ? 'star selected' : 'star'}
  >
    {selected ? '★' : '☆'}
    {selected && <span className="StarLabel">{ratingValue * 20}%</span>}
  </span>
);

export default StarRating;
