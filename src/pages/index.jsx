import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import configureStore from '../store/configureStore';
import App from '../components/App/App';
import './index.styl';
import '../theme/global.styl';

const store = configureStore();

ReactDOM.render(
    <Provider store={store}> 
        <App />
    </Provider>,
    document.querySelector('#app')
);