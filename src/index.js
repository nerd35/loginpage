import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './redux/store';
import LoginForm from './components/LoginForm/LoginForm';
import Register from './components/LoginForm/Register';

ReactDOM.render(
    <Provider store={store}>
        <LoginForm />
    </Provider>,
    document.getElementById('root')
);