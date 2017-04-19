import hljs from'highlight.js/lib/highlight';
import React from'react';
import ReactDOM from'react-dom';

class Highlight extends React.Component {
    componentDidMount() {
        this.highlightCode();
    }

    componentDidUpdate() {
        this.highlightCode();
    }

    highlightCode() {
        const {className, languages} = this.props;
        const domNode = ReactDOM.findDOMNode(this);
        const nodes = domNode.querySelectorAll('pre code');

        if ((languages.length === 0) && className) {
            languages.push(className);
        }

        languages.forEach(lang => {
            hljs.registerLanguage(lang, require('highlight.js/lib/languages/' + lang));
        });

        let i;
        for (i = 0; i < nodes.length; i++) {
            hljs.highlightBlock(nodes[i]);
        }
    }

    render() {
        const {children, className, element, innerHTML} = this.props;
        let Element = element ? React.DOM[element] : null;

        if (innerHTML) {
            if (!Element) {
                Element = React.DOM.div
            }

            return Element({dangerouslySetInnerHTML: {__html: children}, className: className || null}, null);
        } else {
            if (Element) {
                return Element({className}, children);
            } else {
                return <pre><code className={className}>{children}</code></pre>;
            }
        }
    }
}

Highlight.defaultProps = {
    innerHTML: false,
    className: '',
    languages: [],
};

export default Highlight;
