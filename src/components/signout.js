import React, { Component } from 'react';
import { Link } from 'react-router';
import Textarea from 'react-textarea-autosize';
import { signinUser } from '../actions/index';
import { connect } from 'react-redux';


class Signout extends Component {
  constructor(props) {
    super(props);
    // this.state = { notecount: 0, searchterm: '' };
    // this.onInputChange = this.onInputChange.bind(this);
    // this.onAdd = this.onAdd.bind(this);
    this.state = { email:'',password:'',error:'' };
    this.onEmailChange = this.onEmailChange.bind(this);
    this.onPasswordChange = this.onPasswordChange.bind(this);
    this.onSignout = this.onSignout.bind(this);

  }
  onEmailChange(event) {
    this.setState({ email: event.target.value });
  }
  onPasswordChange(event) {
    this.setState({ password: event.target.value });
  }
  //on signin
  onSignin(){
    if(this.state.email===''||this.state.password===''){
      this.setState({ error: 'Please fill in all fields.' });
    }
    else{
      this.setState({ error: '' });
      this.props.signinUser({email: this.state.email, password: this.state.password});
    }
  }
  render() {
    return (
      <div style={{fontFamily: 'Montserrat', margin: 10}}>
        <div>
          <div style={{marginBottom: 5}}>{"Email"}</div>
          <Textarea onChange={this.onEmailChange} id="email">{this.state.email}</Textarea>
        </div>
        <div>
          <div style={{marginBottom: 5}}>{"Password"}</div>
          <Textarea onChange={this.onPasswordChange} id="password">{this.state.password}</Textarea>
        </div>
        <div style={{color: 'red', marginTop: 5}}>
          {this.state.error}
        </div>
        <div>
          <button style={{ fontFamily: 'Montserrat', fontSize: 15, borderRadius: 10, padding: 10, marginTop: 20, color: 'white', backgroundColor: 'black' }} onClick={this.onCreatePost}>Sign Up!</button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => (
  {
    auth: state.auth
  }
);
export default connect(mapStateToProps, { signinUser })(Signin);
