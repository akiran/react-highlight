var Highlight = require('../');
var ReactDOM = require('react-dom');
var TestUtils = require('react-addons-test-utils');
var ReactDOMServer = require('react-dom/server');
describe('highlight', function() {

  it('should display test inside it', function() {
    var text = TestUtils.renderIntoDocument(
      <Highlight>Some text</Highlight>
    );
    expect(ReactDOM.findDOMNode(text).textContent).toBe('Some text');
  });

  it('should have pre and code tags in markup', function() {
    var text = ReactDOMServer.renderToStaticMarkup(
      <Highlight>Some text</Highlight>
    );
    expect(text).toBe('<span><code>Some text</code></span>');
  });

  it('should assign className prop', function() {
    var text = ReactDOMServer.renderToStaticMarkup(
      <Highlight className='html'>Some text</Highlight>
    );
    expect(text).toBe('<span><code class="html">Some text</code></span>');
  });

  it('should accept innerHTML prop', function() {
    var text = TestUtils.renderIntoDocument(
      <Highlight innerHTML={true}>{"<div>Sometext</div>"}</Highlight>
    );
    expect(ReactDOM.findDOMNode(text).textContent).toBe('Sometext');
  });

});



