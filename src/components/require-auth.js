import React, { Component } from 'react';
import { connect } from 'react-redux';
import { browserHistory } from 'react-router';

export default function (ComposedComponent) {
  class RequireAuth extends Component {

    //your various component lifecycle methods
    componentWillMount() {
      if (!this.props.authenticated){
        browserHistory.push('/signup');
      }
   }

   componentWillUpdate(nextProps) {
     if (!nextProps.authenticated){
       browserHistory.push('/signin');
     }
   }

   render() {
     return (
       <ComposedComponent {...this.props} />
     );
   }
  }

  const mapStateToProps = (state) => {
    return { authenticated: state.auth.authenticated };
  };
  return connect(mapStateToProps, null)(RequireAuth);

}
