import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import './index.css';
//import App from './App';
import SelectedHero from './containers/selected-hero';
import store from './store';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
    <Provider store={store}>
        <SelectedHero />
    </Provider>,
    document.getElementById('root')
);

registerServiceWorker();
