var Highlight = require('../src');
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
    expect(text).toBe('<pre><code>Some text</code></pre>');
  });

  it('should assign className prop', function() {
    var text = ReactDOMServer.renderToStaticMarkup(
      <Highlight className='html'>Some text</Highlight>
    );
    expect(text).toBe('<pre><code class="html">Some text</code></pre>');
  });

  it('should render children in span', function() {
    var text = ReactDOMServer.renderToStaticMarkup(
      <Highlight element='span'>Some text</Highlight>
    );
    expect(text).toBe('<span>Some text</span>');
  });

  it('should render innerHTML in span', function() {
    var text = ReactDOMServer.renderToStaticMarkup(
      <Highlight innerHTML={true} element='span'>Some text</Highlight>
    );
    expect(text).toBe('<span>Some text</span>');
  });

  it('should accept innerHTML prop', function() {
    var text = TestUtils.renderIntoDocument(
      <Highlight innerHTML={true}>{"<div>Sometext</div>"}</Highlight>
    );
    expect(ReactDOM.findDOMNode(text).textContent).toBe('Sometext');
  });



});
