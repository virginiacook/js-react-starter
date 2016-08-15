import React, { Component } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import { signoutUser } from '../actions/index';


class NavBar extends Component {
  constructor(props) {
    super(props);
    this.onSignOut = this.onSignOut.bind(this);
  }
  onSignOut(){
    this.props.signoutUser();
  }
  renderNav(){
    console.log(this.props.authenticated);
    if(this.props.authenticated == false){
      return <div style={{display:'flex', justifyContent: 'flex-start', margin: 10}}> <Link to="/signin" style={{fontSize: 12, textDecoration: 'none', color:'black', fontFamily: 'Montserrat', fontWeight: 'bold' }}>Sign In</Link>
        <Link to="/signup" style={{fontSize: 12, textDecoration: 'none', color:'black', fontFamily: 'Montserrat', fontWeight: 'bold' }}>Sign Up</Link>
      </div>;
    }
    else{
      return <div style={{margin: 10}} onClick={this.onSignOut} style={{fontSize: 12, textDecoration: 'none', color:'black', fontFamily: 'Montserrat', fontWeight: 'bold', cursor: 'pointer' }}>Sign Out</div>;
    }
  }
  render() {
    return (
      <nav>
        <div style={{display:'flex', justifyContent: 'space-between', margin: 10}}>
          <Link to="/" style={{fontSize: 40, textDecoration: 'none', color:'black', fontFamily: 'Montserrat', fontWeight: 'bold' }}>Simple Blog</Link>
          <Link to="/posts/new"><i className="fa fa-plus-circle fa-3x" style={{color: 'black' }} /></Link>
        </div>
        <div>
        {this.renderNav()}
        </div>
      </nav>
    );
  }
}
const mapStateToProps = (state) => {
  return { authenticated: state.auth.authenticated };
};

export default connect(mapStateToProps, { signoutUser })(NavBar);
