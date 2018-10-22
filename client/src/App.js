import React, { Component } from 'react';
import axios from 'axios'

class App extends Component {
  componentDidMount() {
    axios.get('/api/product/brands').then(response => {
      console.log(response.data);
    })
  }

  render() {
    return (
      <div className="App">
        <h2>My app</h2>
      </div>
    );
  }
}

export default App;
