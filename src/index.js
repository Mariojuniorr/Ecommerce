import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter as Router } from 'react-router-dom';

import { StateProvider } from './context/StateProvider';
import reducer from './context/reducer';
import { initialState } from './context/initialState';

import App from './App';

ReactDOM.render(
    <Router>
        <StateProvider initialState={initialState} reduce={reducer}>
            <App />
        </StateProvider>
    </Router>,
    document.getElementById("root")
);