import React from "react";
import ReactDOM from "react-dom";


let memoizedState = []; // hooks 存放在这个数组
let cursor = 0; // 当前 memoizedState 下标

function useState(initialValue) {
    console.log("useState", cursor, memoizedState, memoizedState[cursor]);
    memoizedState[cursor] = memoizedState[cursor] || initialValue;
    const currentCursor = cursor;
    function setState(newState) {
        memoizedState[currentCursor] = newState;
        render();
    }
    return [memoizedState[cursor++], setState]; // 返回当前 state，并把 cursor 加 1
}

function useEffect(callback, depArray) {
    console.log("useEffect", cursor, memoizedState, memoizedState[cursor]);
    const hasNoDeps = !depArray;
    const deps = memoizedState[cursor];
    const hasChangedDeps = deps
        ? !depArray.every((el, i) => el === deps[i])
        : true;
    if (hasNoDeps || hasChangedDeps) {
        callback();
        memoizedState[cursor] = depArray;
    }
    cursor++;
}

function App() {
    const [count, setCount] = useState(0); 0
    const [username, setUsername] = useState("fan"); 1
    useEffect(() => {
        2
        console.log(count, '序号');
    }, [count]);
    useEffect(() => {
        3
        console.log(username, '姓名');
    }, [username]);


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
            <div>{username}</div>
            <button
                onClick={() => {
                    setUsername(username + " hello");
                }}
            >
                点击
      </button>
        </div>
    );
}

const rootElement = document.getElementById("root");

function render() {
    cursor = 0;
    ReactDOM.render(<App />, rootElement);
}
render();
