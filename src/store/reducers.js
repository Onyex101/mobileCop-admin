import { combineReducers } from 'redux';
import { firebaseReducer } from 'react-redux-firebase';
import { firestoreReducer } from 'redux-firestore';

// eslint-disable-next-line import/prefer-default-export
export const rootReducer = combineReducers({
  firebase: firebaseReducer,
  firestore: firestoreReducer
});
