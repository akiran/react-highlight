import hljs from 'highlight.js';
import React, {memo, useEffect, useRef} from 'react';

function Highlight (props) {
  const {children, className, element: Element, innerHTML} = props;
  const el = useRef(null);

  const highlightCode = () => {
    if (el.current) {
      const nodes = el.current.querySelectorAll('pre code');
      for (let i = 0; i < nodes.length; i++) hljs.highlightBlock(nodes[i]);
    }
  };

  useEffect(highlightCode);
  const elProps = {ref: el, className};

  if (innerHTML) {
    elProps.dangerouslySetInnerHTML = {__html: children};
    if (Element) return <Element {...elProps} />;
    return <div {...elProps} />;
  }
  if (Element) return <Element {...elProps}>{children}</Element>;
  return <pre ref={el}><code className={className}>{children}</code></pre>;
}

export default memo(Highlight);
