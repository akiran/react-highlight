// var React = require('react');
// var Router = require('react-router');
// var routes = require('./routes');

// Router.run(routes, function (Handler) {
//   React.render(<Handler />, document.body);
// });

var React = require('react');
var ReactDOM = require('react-dom');
var Highlight = require('../src/index');

var Docs = React.createClass({
  render: function () {
    return (
      <div>
        <Highlight>Some text</Highlight>
        <Highlight>{'<p>Some text</p>'}</Highlight>
        <Highlight className='js'>{'var a, b, c;\n c = a + b;'}</Highlight>
      </div>
    );
  }
})

ReactDOM.render(<Docs />, document.getElementById('docs'));