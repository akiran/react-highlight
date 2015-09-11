var hljs = require('highlight.js/lib/highlight');
var React = require('react');
var ReactDOM = require('react-dom');

var Highlight = React.createClass({
  getDefaultProps: function () {
    return {
      innerHTML: false,
      className: "",
      languages: []
    };
  },
  componentDidMount: function () {
    this.highlightCode();
  },
  componentDidUpdate: function () {
    this.highlightCode();
  },
  highlightCode: function () {
    var languages = this.props.languages;
    if ((languages.length === 0) && this.props.className) {
      languages.push(this.props.className);
    }
    this.props.languages.forEach(function (lang) {
      hljs.registerLanguage(lang, require('highlight.js/lib/languages/' + lang));
    });
    var domNode = ReactDOM.findDOMNode(this);
    var nodes = domNode.querySelectorAll('pre code');
    if (nodes.length > 0) {
      for (var i = 0; i < nodes.length; i=i+1) {
        hljs.highlightBlock(nodes[i]);
      }
    }
  },
  render: function () {
    if (this.props.innerHTML) {
      return <div dangerouslySetInnerHTML={{__html: this.props.children}} className={this.props.className || null}></div>;
    } else {
      return <pre><code className={this.props.className}>{this.props.children}</code></pre>;
    }
  }
});

module.exports = Highlight;
