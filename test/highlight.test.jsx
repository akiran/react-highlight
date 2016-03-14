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
    expect(text).toBe('<pre><code>Some text</code></pre>');
  });

  it('should assign className prop', function() {
    var text = ReactDOMServer.renderToStaticMarkup(
      <Highlight className='html'>Some text</Highlight>
    );
    expect(text).toBe('<pre><code class="html">Some text</code></pre>');
  });

  it('should accept innerHTML prop', function() {
    var text = TestUtils.renderIntoDocument(
      <Highlight innerHTML={true}>{"<div>Sometext</div>"}</Highlight>
    );
    expect(ReactDOM.findDOMNode(text).textContent).toBe('Sometext');
  });

  it('should accept a preStyle prop and apply the styles to the pre element', function() {
    var preStyle = {backgroundColor: 'white'};
    var text = ReactDOMServer.renderToStaticMarkup(
        <Highlight preStyle={preStyle}>Some text</Highlight>
      );

    expect(text).toBe('<pre style="background-color:white;"><code>Some text</code></pre>');
  });

  it('should accept a codeStyle prop and apply the styles to the code element', function() {
    var codeStyle = {backgroundColor: 'white'};
    var text = ReactDOMServer.renderToStaticMarkup(
        <Highlight codeStyle={codeStyle}>Some text</Highlight>
      );

    expect(text).toBe('<pre><code style="background-color:white;">Some text</code></pre>');
  });

});



