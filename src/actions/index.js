import { browserHistory } from 'react-router'
import axios from 'axios';

const ROOT_URL = 'http://localhost:9090/api';
//const ROOT_URL = 'https://cs52-blog.herokuapp.com/api';
//const API_KEY = '?key=vcook';

export const ActionTypes = {
  FETCH_POSTS: 'FETCH_POSTS',
  FETCH_POST:  'FETCH_POST',
  CREATE_POST: 'CREATE_POST',
  UPDATE_POST: 'UPDATE_POST',
  DELETE_POST: 'DELETE_POST',
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
    axios.post(`${ROOT_URL}/posts/`, post)
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
    axios.put(`${ROOT_URL}/posts/${post.id}`, post)
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
    axios.delete(`${ROOT_URL}/posts/${id}`)
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
