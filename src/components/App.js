import React from 'react';
import { Link, NavLink } from 'react-router-dom';



export default class App extends React.Component {
    active = (match, location) => {
        console.log(match, location)
    }
    render() {
        console.log(this.props);
        const title = /^\/a/.test(this.props.location.pathname) ? 'App' : 'Cpp'
        return <div>
            <h1 style={{ color: "red" }}>{title}</h1>
            <p><span>当前页面历史列表中URL的数量：history.length===</span>{window.history.length} / {this.props.history.length}</p>
            <p><span>history.action===</span>{window.history.action} / {this.props.history.action}</p>
            <p><span>history.location===</span>{JSON.stringify(this.props.location)}</p>
            <p><span>match===</span>{JSON.stringify(this.props.match)}</p>
            <Link to={{
                pathname: '/b',
                search: '?c=1&x=d',
                hash: '#a',
                state: {
                    test: 1
                }
            }}>Link跳转到bpp</Link>
            <br />
            <NavLink to='/a' activeStyle={{
                fontWeight: 'bold',
                color: 'red'
            }}>NavLink跳转到App</NavLink>
        </div>
    }
}