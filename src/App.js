import React, { useState } from 'react';
import { hot } from 'react-hot-loader';
import './App.css';

const Warning = React.lazy(() => import('./Warning'));

const App = () => {
    const [count, setCount] = useState(0);

    function incrementCount() {
        setCount(count + 1);
    }

    function decrementCount() {
        setCount(count - 1);
    }

    return (
        <div>
            <h1>Hello World!!!!</h1>
            <img src="./logo.png" alt="something" />
            <h2 className={count > 10 ? 'warning' : null}>Count: {count}</h2>
            <button onClick={decrementCount}>-</button>
            <button onClick={incrementCount}>+</button>
            {count > 10 ? (
                <React.Suspense fallback={null}>
                    <Warning />
                </React.Suspense>
            ) : null}
        </div>
    );
};

export default hot(module)(App);
