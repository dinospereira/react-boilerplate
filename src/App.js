import React from 'react';
import { hot } from 'react-hot-loader';
import './App.css';

const App = () => {
    return <h1>Hello World!!!!</h1>;
};

export default module.hot ? hot(App) : App;
