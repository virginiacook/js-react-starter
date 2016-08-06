import { ActionTypes } from '../actions';

const postsReducer = (posts = {
  all: [],
  post: {title: '', content: '', tags: ''},
  }, action) => {
  switch (action.type) {
    case ActionTypes.FETCH_POSTS:
    return Object.assign({}, posts, { all: action.payload });
    case ActionTypes.FETCH_POST:
      return Object.assign({}, posts, { post: action.payload });
    case ActionTypes.CREATE_POST:
      return Object.assign({}, posts, { post: action.payload });
    case ActionTypes.UPDATE_POST:
      return Object.assign({}, posts, { post: action.payload });
    case ActionTypes.DELETE_POST:
      return Object.assign({}, posts, { post: action.payload });
    default:
      return posts;
  }
};

export default postsReducer;
