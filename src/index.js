import ReactDOM from 'react-dom';
import { HashRouter } from 'react-router-dom';
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { ReactReduxFirebaseProvider } from 'react-redux-firebase';
import { createFirestoreInstance } from 'redux-firestore';
import { rootReducer } from './store/reducers';
import * as serviceWorker from './serviceWorker';
import App from './App';

const firebaseConfig = {
  apiKey: 'AIzaSyCgMnGJnZwT31ZmzOHB7DcDyFyOZRUx8eg',
  authDomain: 'mobilecop-73393.firebaseapp.com',
  projectId: 'mobilecop-73393',
  storageBucket: 'mobilecop-73393.appspot.com',
  messagingSenderId: '74129196376',
  appId: '1:74129196376:web:c543239ef6d0d7c8ff912d',
  measurementId: 'G-5EN97Y26ER'
};

// react-redux-firebase config
const rrfConfig = {
  userProfile: 'users',
  useFirestoreForProfile: true,
};

// Initialize firebase instance
firebase.initializeApp(firebaseConfig);

// Initialize other services on firebase instance
firebase.firestore();

const initialState = {};
const store = createStore(rootReducer, initialState);

const rrfProps = {
  firebase,
  config: rrfConfig,
  dispatch: store.dispatch,
  createFirestoreInstance,
};

ReactDOM.render((
  <Provider store={store}>
    <ReactReduxFirebaseProvider {...rrfProps}>
      <HashRouter>
        <App />
      </HashRouter>
    </ReactReduxFirebaseProvider>
  </Provider>
), document.getElementById('root'));

serviceWorker.unregister();
