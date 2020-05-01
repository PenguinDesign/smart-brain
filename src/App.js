import React, { Component } from 'react';
import Particles from 'react-particles-js';
import FaceRecognition from './components/FaceRecognition/FaceRecognition';
import Navigation from './components/Navigation/Navigation';
import Demographics from './components/Demographics/Demographics';
import Logo from './components/Logo/Logo';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
import Instructions from './components/Instructions/Instructions';
import './App.css';

const particlesOptions = {
  particles: {
    number: {
      value: 30,
      density: {
        enable: true,
        value_area: 800
      }
    }
  }
}

const initialState = {
  input: '',
  imageUrl: '',
  box: [],
  predictions: {
    agePredictions: [],
    genderPredictions: [],
    multiculturalPredictions: []
  },
  route: 'home',
  isSignedIn: false,
  user: {
    id: '',
    name: '',
    email: '',
    entries: 0,
    joined: ''
  }
}

class App extends Component {
  constructor() {
    super();
    this.state = initialState;
  }

  calculateFaceLocation = (data) => {
    let faceList = data.outputs[0].data.regions.map(i => {
      return i.region_info.bounding_box;
    })
    const image = document.getElementById('inputimage');
    const width = Number(image.width);
    const height = Number(image.height);
    return [faceList, width, height];
    // leftCol: clarifaiFace.left_col * width,
    // topRow: clarifaiFace.top_row * height,
    // rightCol: width - (clarifaiFace.right_col * width),
    // bottomRow: height - (clarifaiFace.bottom_row * height)
  }

  displayFaceBox = (box) => {
    this.setState({ box: box });
  }

  onInputChange = (event) => {
    this.setState({ input: event.target.value });
  }

  setDemographicInfo = (data) => {
    let agePredictionArray = data.outputs[0].data.regions[0].data.concepts.filter(prediction => {
      return prediction.vocab_id === 'age_appearance';
    });
    let agePredictions = agePredictionArray.slice(0, 2);

    let genderPredictionArray = data.outputs[0].data.regions[0].data.concepts.filter(prediction => {
      return prediction.vocab_id === 'gender_appearance';
    });

    let multiculturalPredictionArray = data.outputs[0].data.regions[0].data.concepts.filter(prediction => {
      return prediction.vocab_id === 'multicultural_appearance';
    });

    let multiculturalPredictions = multiculturalPredictionArray.slice(0, 2);

    let allPredictions = {
      agePredictions: agePredictions,
      genderPredictions: genderPredictionArray,
      multiculturalPredictions: multiculturalPredictions
    }
    this.setState({
      predictions: allPredictions
    })
  }

  onButtonSubmit = (url) => {
    this.setState({ imageUrl: this.state.input });
    fetch(`https://polar-ravine-25642.herokuapp.com/${url}`, {
      method: 'post',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        input: this.state.input
      })
    })
      .then(response => response.json())
      .then(response => {
        url === 'imageurl' ?
          this.displayFaceBox(this.calculateFaceLocation(response))
          : (this.setDemographicInfo(response));
      })
      .catch(err => console.log(err));
  }

  onRouteChange = (newRoute) => {
    this.setState({
      route: newRoute
    })
  }

  render() {
    const { imageUrl, route, box, predictions } = this.state;
    return (
      <div className="App">
        <Particles className='particles'
          params={particlesOptions}
        />
        <Navigation onRouteChange={this.onRouteChange} />
        {route === 'home' ?
          <div>
            <h1>Faces</h1>
            <Logo />
            <ImageLinkForm
              onInputChange={this.onInputChange}
              onButtonSubmit={() => this.onButtonSubmit('imageurl')}
              nodeServer={'imageurl'}
            />
            <FaceRecognition box={box} imageUrl={imageUrl} />
          </div>
          :
          route === 'demo' ?
            <div>
              <h1>Demographics</h1>
              <Logo />
              <ImageLinkForm
                onInputChange={this.onInputChange}
                onButtonSubmit={() => this.onButtonSubmit('demographics')}
                nodeServer={'demographics'}
              />
              <Demographics predictions={predictions} imageUrl={imageUrl} />
            </div>
            :
            <div>
              <h1>Instructions</h1>
              <Logo />
              <Instructions />
            </div>
        }
      </div>
    );
  }
}

export default App;
