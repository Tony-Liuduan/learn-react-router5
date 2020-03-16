import React, { useReducer } from 'react';

const reducer = () => {

}


const App = (props) => {
    console.log(state, dispatch);

    // 在组件初始化的时候，调用useReducer会创建一个reducer hook，其内部会创建两个状态：state、oldState，两个方法：dispatch、reducer（就是我们传入的reducer），并且返回state和dispatch给组件。
    // state和oldState全是initState
    // dispatch一旦创建完毕，就永远不会改变
    const [state, dispatch] = useReducer(reducer, {});

    const back = () => {
        props.history.push('/hooks')
    }

    return <div>
        <h1 style={{ color: "#333" }}>useReducer hooks</h1>
        <button onClick={back}>返回</button>
    </div>
}


export default App;