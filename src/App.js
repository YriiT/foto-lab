import React, { Component } from 'react';
import './App.css';
import { FirstCard, ParentCardContent } from './components'

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      showContent: false,
      showFirsCard: true,
      file_1: null,
      file_2: null,
      data: undefined
    }
  }


  handleBeginClick = () => {
    this.setState({
      showContent: true,
      showFirsCard: false
    })
  }

  handleInputChange = (event, file_mumber) => {
    this.setState({
      [file_mumber]: event.target.files[0]
    })
  }

  handleSubmit = () => {
    const { file_1, file_2 } = this.state
    const data = new FormData();

    data.append('file_1', file_1, file_1.name);
    data.append('file_1', file_2, file_2.name);

    return fetch('https://home.namezis.com/get_baby', {
      method: 'POST',
      body: data,
    }).then(res => res.json())
      .then(data => {
        this.setState({
          data: data,
          showContent: false,
        })
      });
  }

  render() {
    const { showContent, showFirsCard, data } = this.state
    return (
      <div className="App">
        {
          showContent && <ParentCardContent
            onInputChange={this.handleInputChange}
            onSubmit={this.handleSubmit}
          />}
        {
          showFirsCard && <FirstCard
            onBeginButtonClick={this.handleBeginClick}
          />
        }

        {data && data.return_image &&
          <img
            className='resultImage'
            src={`data:image/jpeg;base64,${data.return_image}`} />}

      </div>
    );
  }
}

export default App;
