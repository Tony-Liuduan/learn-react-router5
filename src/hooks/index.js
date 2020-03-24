import React from 'react';
import ReactDOM from 'react-dom';

function useState(initialValue) {
    let state = initialValue;
    function setState(newState) {
        state = newState;
        render(); // 模拟 reRender，这一行不需要关心
    }
    return [state, setState];
}

function App() {
    const [count, setCount] = useState(0);

    return (
        <div>
            <div>{count}</div>
            <button
                onClick={() => {
                    setCount(count + 1);
                }}
            >
                点击
      </button>
        </div>
    );
}

const rootElement = document.getElementById("root");

function render() {
    ReactDOM.render(<App />, rootElement);
}
render();

