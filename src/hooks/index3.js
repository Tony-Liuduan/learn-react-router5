import React, { useState, useEffect } from 'react'
import ReactDOM from "react-dom";

export default function App() {
    const [count, setCount] = useState(0);
    const [name, setName] = useState('Star');

    // useEffect(() => {
    //     setCount(count + 1);
    //     setCount(count + 2);
    //     setCount(count + 3);
    // }, [])

    // 调用三次setCount便于查看更新队列的情况
    const countPlusThree = () => {
        setCount(count + 1);
        setCount(count + 2);
        setCount(count + 3);
    }

    return (
        <div className='App' id="app">
            <p>{name} Has Clicked {count} Times</p>
            <button onClick={countPlusThree}>Click *3</button>
        </div>
    )
}


const rootElement = document.getElementById("root");

function render() {
    ReactDOM.render(<App />, rootElement);
}
render();