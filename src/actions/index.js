import { browserHistory } from 'react-router'
import axios from 'axios';

const ROOT_URL = 'http://localhost:9090/api';
//const ROOT_URL = 'https://blogserver2.herokuapp.com/api';
//const API_KEY = '?key=vcook';

export const ActionTypes = {
  FETCH_POSTS: 'FETCH_POSTS',
  FETCH_POST:  'FETCH_POST',
  CREATE_POST: 'CREATE_POST',
  UPDATE_POST: 'UPDATE_POST',
  DELETE_POST: 'DELETE_POST',
  AUTH_USER: 'AUTH_USER',
  DEAUTH_USER: 'DEAUTH_USER',
  AUTH_ERROR: 'AUTH_ERROR',
};

export function fetchPosts() {
  return (dispatch) => {
     axios.get(`${ROOT_URL}/posts/`).then(response => {
       dispatch({
         type: ActionTypes.FETCH_POSTS,
         payload: response.data,
       });
     }).catch(error => {
       console.log('error occurred getting posts:');
       console.log(error);
     });
   };
}

export function fetchPost(id) {
  return (dispatch) => {
    axios.get(`${ROOT_URL}/posts/${id}`)
    .then((response) => {
      dispatch({
        type: ActionTypes.FETCH_POST,
        payload: response.data,
      });
    })
    .catch((error) => {
      console.log('error');
      console.log(error);
    });
  };
}

export function createPost(post) {
  return (dispatch) => {
    axios.post(`${ROOT_URL}/posts/`, post, { headers: { authorization: localStorage.getItem('token') } })
    .then((response) => {
      browserHistory.push('/');
      dispatch({
        type: ActionTypes.CREATE_POST,
        payload: response.data,
      });
    })
    .catch((error) => {
      console.log('error');
      console.log(error);
    });
  };
}

export function updatePost(post) {
  console.log(post.id);
  return (dispatch) => {
    axios.put(`${ROOT_URL}/posts/${post.id}`, post, { headers: { authorization: localStorage.getItem('token') } })
    .then((response) => {
      dispatch({
        type: ActionTypes.UPDATE_POST,
        payload: response.data,
      });
    })
    .catch((error) => {
      console.log('error');
      console.log(error);
    });
  };
}

export function deletePost(id) {
  console.log(id);
  return (dispatch) => {
    axios.delete(`${ROOT_URL}/posts/${id}`, { headers: { authorization: localStorage.getItem('token') } })
    .then((response) => {
      browserHistory.push('/');
      dispatch({
        type: ActionTypes.DELETE_POST,
        payload: response.data,
      });
    })
    .catch((error) => {
      console.log('error');
      console.log(error);
    });
  };
}

export function signinUser({ email, password }) {
  // takes in an object with email and password (minimal user object)
  // returns a thunk method that takes dispatch as an argument (just like our create post method really)
  // does an axios.post on the /signin endpoint
  // on success does:
  //  dispatch({ type: ActionTypes.AUTH_USER });
  //  localStorage.setItem('token', response.data.token);
  // on error should dispatch(authError(`Sign In Failed: ${error.response.data}`));
  return (dispatch) => {
    axios.post(`${ROOT_URL}/signin`, { email, password })
    .then(response => {
      dispatch({ type: ActionTypes.AUTH_USER });
      localStorage.setItem('token', response.data.token);
      browserHistory.push('/');
    })
    .catch(err => {
      console.log('Incorrect username or password');
      dispatch(authError(`Sign In Failed: ${err.response.data}`));
    });
  };
}

export function signupUser({ email, password }) {
  // takes in an object with email and password (minimal user object)
  // returns a thunk method that takes dispatch as an argument (just like our create post method really)
  // does an axios.post on the /signup endpoint (only difference from above)
  // on success does:
  //  dispatch({ type: ActionTypes.AUTH_USER });
  //  localStorage.setItem('token', response.data.token);
  // on error should dispatch(authError(`Sign Up Failed: ${error.response.data}`));
  return (dispatch) => {
    axios.post(`${ROOT_URL}/signup`, { email, password })
    .then(response => {
      dispatch({ type: ActionTypes.AUTH_USER });
      localStorage.setItem('token', response.data.token);
      browserHistory.push('/');
    }).catch(err => {
      console.log('Email already exists');
      dispatch(authError(`Sign Up Failed: ${error.response.data}`));
    });
  };
}

// deletes token from localstorage
// and deauths
export function signoutUser() {
  return (dispatch) => {
    localStorage.removeItem('token');
    dispatch({ type: ActionTypes.DEAUTH_USER });
    browserHistory.push('/');
  };
}

// trigger to deauth if there is error
// can also use in your error reducer if you have one to display an error message
export function authError(error) {
  return {
    type: ActionTypes.AUTH_ERROR,
    message: error,
  };
}
