import React from 'react';


export default class App extends React.Component {

    back = () => {
        this.props.history.goBack();
    }

    render() {
        return <div>
            <h1 style={{ color: "green" }}>我是bpp.js</h1>
            <p><span>当前页面历史列表中URL的数量：history.length===</span>{window.history.length} / {this.props.history.length}</p>
            <p><span>history.action===</span>{window.history.action} / {this.props.history.action}</p>
            <p><span>history.location===</span>{JSON.stringify(this.props.history.location)}</p>
            <button onClick={this.back}>返回</button>
        </div>
    }
}