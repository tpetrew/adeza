import './styles/index.sass';
import React from 'react';
import {render} from 'react-dom';
import App from './app/App';

render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById('root')
)