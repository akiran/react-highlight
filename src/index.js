var hljs = require('highlight.js');
var React = require('react');
var ReactDOM = require('react-dom');

var Highlight = React.createClass({
  getDefaultProps: function () {
    return {
      innerHTML: false,
      className: null,
      style: {},
      element: null,
    };
  },
  componentDidMount: function () {
    this.highlightCode();
  },
  componentDidUpdate: function () {
    this.highlightCode();
  },
  highlightCode: function () {
    var domNode = ReactDOM.findDOMNode(this);
    var nodes = domNode.querySelectorAll('pre code');
    if (nodes.length > 0) {
      for (var i = 0; i < nodes.length; i=i+1) {
        hljs.highlightBlock(nodes[i]);
      }
    }
  },
  render: function () {
    var Element = this.props.element ? React.DOM[this.props.element]: null;

    if (this.props.innerHTML) {
      if (!Element) {
        Element = React.DOM.div
      }
      return Element({
        dangerouslySetInnerHTML: {__html: this.props.children},
        className: this.props.className || null
      }, null);
    } else {
      if (Element) {
        return Element({
          className:this.props.className
          style:this.props.style
        }, this.props.children);
      } else {
        return <pre><code className={this.props.className} style={this.props.style}>{this.props.children}</code></pre>;
      }
    }
  }
});

module.exports = Highlight;
