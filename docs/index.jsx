/**
 * @jsx React.DOM
 */

var React = require('react');
var Highlight = require('../index');
var htmlmd = require('./snippets/html.md');
var htmltxt = require('raw!./snippets/html.txt');
var multiline = require('multiline');

var str = multiline.stripIndent(function(){/*
<!doctype html>
<html>
  <body>
    <h1>❤ unicorns</h1>
  </body>
</html>
*/});

var inner = multiline.stripIndent(function(){/*
<h1> Js </h1>
<pre><code class='language-js'>var a, b = 1, c = 2;
a = b + c;
</pre></code>
<h1> css </h1>
<pre><code class='language-css'>body {
  background: red;
} 
</pre></code>
*/});

var Docs = React.createClass({
  render: function () {
    return (
      <div>
        <p>html</p>
        <Highlight>
          {htmltxt}
        </Highlight>
        <Highlight className='html'>
          {str}
        </Highlight>
        <Highlight innerHTML={true} >
          {inner}
        </Highlight>
      </div>
    );
  }
});

React.render(<Docs />, document.body);