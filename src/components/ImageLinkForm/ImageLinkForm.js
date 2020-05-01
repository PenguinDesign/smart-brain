import React from 'react';
import './ImageLinkForm.css';

const ImageLinkForm = ({ onInputChange, onButtonSubmit, nodeServer }) => {
  return (
    <div>
      <p className='white f3'>
        {nodeServer === 'imageurl' ?
          'This Smart Brain detects faces in your pictures! Provide a link to your picture!' :
          'This Smart Brain detects age, ethnic background, and gender! (1 person only)'}
      </p>
      <div className='center'>
        <div className='form center pa4 br3 shadow-5'>
          <input className='f4 pa2 w-70 center' type='tex' onChange={onInputChange} />
          <button
            className='w-30 grow f4 link ph3 pv2 dib white bg-light-purple'
            onClick={onButtonSubmit}
          >Detect</button>
        </div>
      </div>
    </div>
  );
}

export default ImageLinkForm;