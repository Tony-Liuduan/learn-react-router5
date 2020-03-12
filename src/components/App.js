import React from 'react';
import { Link } from 'react-router-dom';



export default class App extends React.Component {
    render() {
        return <div>
            <h1 style={{ color: "red" }}>我是app.js</h1>
            <p><span>当前页面历史列表中URL的数量：history.length===</span>{window.history.length} / {this.props.history.length}</p>
            <p><span>history.action===</span>{window.history.action} / {this.props.history.action}</p>
            <p><span>history.location===</span>{JSON.stringify(this.props.history.location)}</p>
            <Link to='/b'>跳转到bpp</Link>
        </div>
    }
}