import React from "react";
import ReactDOM from "react-dom";

let _state, _deps; // 把 state 存储在外面

function useState(initialValue) {
    _state = _state | initialValue; // 如果没有 _state，说明是第一次执行，把 initialValue 复制给它
    function setState(newState) {
        _state = newState;
        render();
    }
    return [_state, setState];
}

function useEffect(callback, depArray) {
    const hasNoDeps = !depArray;
    const hasChangedDeps = _deps
        ? !depArray.every((el, i) => el === _deps[i])
        : true;
    if (hasNoDeps || hasChangedDeps) {
        callback();
        _deps = depArray;
    }
}

function App() {
    const [count, setCount] = useState(0);
    useEffect(() => {
        console.log(count);
    }, [count]);
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
