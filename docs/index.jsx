import React from 'react';
import ReactDOM from 'react-dom';
import Highlight from '../src/index';


class Docs extends React.Component {
  render() {
    return (
      <div>
        <Highlight>Some text</Highlight>
        <Highlight>{'<p>Some text</p>'}</Highlight>
        <Highlight className='js'>{'var a, b, c;\n c = a + b;'}</Highlight>
      </div>
    );
  }
}


ReactDOM.render(<Docs />, document.getElementById('docs'));
