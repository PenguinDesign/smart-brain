import React from 'react';
import './FaceRecognition.css';

class FaceRecognition extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      class: 'bounding-box'
    }
  }

  changeEmoji = (emoji) => {
    this.setState({
      class: emoji
    });
  }

  render() {
    let { box, imageUrl } = this.props;
    let faces;
    console.log(box);
    if (box.length !== 0) {
      let width = box[1];
      let height = box[2];

      faces = box[0].map((region, index) => {
        let leftCol = region.left_col * width;
        let topRow = region.top_row * height;
        let rightCol = width - (region.right_col * width);
        let bottomRow = height - (region.bottom_row * height);
        return (
          <div key={index} className={this.state.class} style={{ top: topRow, right: rightCol, bottom: bottomRow, left: leftCol }}></div>
        );
      })
    }

    return (
      <div className='center ma'>
        <div className='mt2'>
          <div className="relative">
            <button className='button' onClick={() => this.changeEmoji('cow')}>Turn into cow</button>
            <button className='button' onClick={() => this.changeEmoji('evil')}>Turn evil</button>
            <button className='button' onClick={() => this.changeEmoji('bounding-box')}>Turn normal</button>

          </div>
          <div>Icons made by <a href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>
        </div>
        <div className='absolute mt10'>
          <img id='inputimage' alt='' src={imageUrl} width='500px' heigh='auto' className='mb3' />
          {box.length !== 0 ? faces : ''}
        </div>
      </div>
    );
  }
}

export default FaceRecognition;