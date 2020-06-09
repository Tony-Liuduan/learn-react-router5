/**
 * @fileoverview 
 * @author liuduan
 * @Date 2020-06-09 16:21:18
 * @LastEditTime 2020-06-09 16:29:59
 */
import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';


const FancyButton = React.forwardRef((props, ref) => {
    function handleClick() {
        console.log('handleClick', ref.current);
    }
    return (
        <button ref={ref} className="FancyButton" onClick={handleClick}>
            {props.children}
        </button>
    );
});

const App = () => {
    const ref = React.createRef();

    useEffect(() => {
        console.log('wrap get ref dom', ref.current);
    }, []);

    return <FancyButton ref={ref}>Click me!</FancyButton>
};

ReactDOM.render(
    <App />,
    document.getElementById("root"),
);