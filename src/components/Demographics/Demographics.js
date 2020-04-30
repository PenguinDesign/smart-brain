import React from 'react';
import './Demographics.css';

const Demographics = ({ imageUrl, predictions }) => {
  let ages = predictions.agePredictions.map(age => {
    return (
      <div>
        <p>{(age.value * 100).toFixed(2)}% chance of being {age.name} years old</p>
      </div>
    );
  });
  let genders = predictions.genderPredictions.map(gender => {
    return (
      <div>
        <p>{(gender.value * 100).toFixed(2)}% chance of being {gender.name}</p>
      </div>
    );
  });
  let cultural = predictions.multiculturalPredictions.map(cult => {
    return (
      <div>
        <p>{(cult.value * 100).toFixed(2)}% chance of being {cult.name}</p>
      </div>
    );
  });

  return (
    <div className='center ma'>
      <div className='absolute mt2'>
        <img id='inputimage' alt='' src={imageUrl} width='500px' heigh='auto' className='mb3' />
        <h2>Age</h2>
        {ages}
        <h2>Gender</h2>
        {genders}
        <h2>Ethnic predictions</h2>
        {cultural}
      </div>
    </div>
  );
}

export default Demographics;