import React, { Component } from 'react';
import { Link } from 'react-router';

class NavBar extends Component {
  constructor(props) {
    super(props);
    // this.state = { notecount: 0, searchterm: '' };
    // this.onInputChange = this.onInputChange.bind(this);
    // this.onAdd = this.onAdd.bind(this);
  }
  render() {
    return (
      <nav>
        <div style={{display:'flex', justifyContent: 'space-between', margin: 10}}>
          <Link to="/" style={{fontSize: 40, textDecoration: 'none', color:'black', fontFamily: 'Montserrat', fontWeight: 'bold' }}>Simple Blog</Link>
          <Link to="/posts/new"><i className="fa fa-plus-circle fa-3x" style={{color: 'black' }} /></Link>
        </div>
      </nav>
    );
  }
}

export default NavBar;
