import React from 'react';
import StarRating from './StarRating.js';

const App = () => {
  const handleRatingChange = (newRating) => {
    console.log('New Rating:', newRating);
  };

  return (
    <div>
      <h1>Rating Component</h1>
      <StarRating initialRating={3} onRatingChange={handleRatingChange} />
    </div>
  );
};

export default App;
