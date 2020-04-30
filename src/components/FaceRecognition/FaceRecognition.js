import React from 'react';
import './FaceRecognition.css';

const FaceRecognition = ({ imageUrl, box }) => {
  let faces;
  if (box.length !== 0) {
    let width = box[1];
    let height = box[2]; 

    faces = box[0].map((region, index) => {
      let leftCol = region.left_col * width;
      let topRow = region.top_row * height;
      let rightCol = width - (region.right_col * width);
      let bottomRow = height - (region.bottom_row * height);
      return (
        <div key={index} className="bounding-box" style={{ top: topRow, right: rightCol, bottom: bottomRow, left: leftCol }}></div>
      );
    })
  }

  return (
    <div className='center ma'>
      <div className='absolute mt2'>
        <img id='inputimage' alt='' src={imageUrl} width='500px' heigh='auto' className='mb3' />
        {box.length!== 0? faces: ''}
      </div>
    </div>
  );
}

export default FaceRecognition;