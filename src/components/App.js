import React from 'react';
import { Link, NavLink } from 'react-router-dom';



export default class App extends React.Component {
    active = (match, location) => {
        console.log(match, location)
    }
    render() {
        return <div>
            <h1 style={{ color: "red" }}>我是app.js</h1>
            <p><span>当前页面历史列表中URL的数量：history.length===</span>{window.history.length} / {this.props.history.length}</p>
            <p><span>history.action===</span>{window.history.action} / {this.props.history.action}</p>
            <p><span>history.location===</span>{JSON.stringify(this.props.history.location)}</p>
            <p><span>match===</span>{JSON.stringify(this.props.match)}</p>
            <Link to='/b'>Link跳转到bpp</Link>
            <br/>
            <NavLink to='/a' activeStyle={{
                fontWeight: 'bold',
                color: 'red'
            }}>NavLink跳转到App</NavLink>
        </div>
    }
}