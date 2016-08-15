import { combineReducers } from 'redux';

import PostsReducer from './postsreducer';
import AuthReducer from './authreducer'

const postsReducer = combineReducers({
  posts: PostsReducer,
  auth: AuthReducer
});

export default postsReducer;
