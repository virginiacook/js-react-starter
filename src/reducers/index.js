import { combineReducers } from 'redux';

import PostsReducer from './postsreducer';

const postsReducer = combineReducers({
  posts: PostsReducer,
});

export default postsReducer;
