import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import firebase from './firebase/config';
import {FirebaseContextProvider} from './store/FirebaseProvider';
import Context from './store/FirebaseProvider';

ReactDOM.render(
<FirebaseContextProvider.Provider value={{firebase}}> 
    <Context>
        <App />
    </Context>
</FirebaseContextProvider.Provider>,
 document.getElementById('root'));
