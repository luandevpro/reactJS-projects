var React = require('react');
var ReactDOM = require('react-dom');

var Box = require('./components/tweenMaxDiv');
var Scrollmagic = require('./components/scrollmagicTest');


var HelloWorld = React.createClass({
    render: function() {
        return (
        <div>
            <p  data-custom-attribute="foo">
                Hello, <input type="text" placeholder="Your name here"  />!
                It is {this.props.date.toTimeString()}
                <br/>
            </p>
            <Box />
            <br/>
            <Scrollmagic/>
        </div>
        );
    }
});


ReactDOM.render(
    <HelloWorld date={new Date()}/>,
    document.getElementById('example')
);



