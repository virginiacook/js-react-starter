import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import Welcome from './welcome';
import NavBar from './navbar';
import { fetchPosts, newPost } from '../actions';

// example class based component (smart component)
class App extends Component {
  constructor(props) {
    super(props);

    // init component state here
    this.state = {};
  }

  render() {
    return (
      <div>
        <div>
          <NavBar />
          {this.props.children}
        </div>
      </div>
    );
  }
}

export default App;
