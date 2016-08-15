import { ActionTypes } from '../actions';

const authReducer = (auth = { authenticated: false }, action) => {
  switch (action.type) {
    case ActionTypes.AUTH_USER:
      return Object.assign({}, auth, { authenticated: true });
    case ActionTypes.DEAUTH_USER:
      return Object.assign({}, auth, { authenticated: false });
    case ActionTypes.AUTH_ERROR:
      return Object.assign({}, auth, { authenticated: false });
    default: return auth;
  }
};

export default authReducer;
