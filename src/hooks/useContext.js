import React from 'react';


const App = (props) => {

    const back = () => {
        props.history.push('/hooks')
    }

    return <div>
        <h1 style={{ color: "#333" }}>useContext hooks</h1>
        <button onClick={back}>返回</button>
    </div>
}

export default App;