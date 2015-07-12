var Highlight = require('../');
var TestUtils = React.addons.TestUtils;

describe('highlight', function() {

  it('should display test inside it', function() {
    var text = TestUtils.renderIntoDocument(
      <Highlight>Some text</Highlight>
    );
    expect(text.getDOMNode().textContent).toBe('Some text');
  });

  it('should have pre and code tags in markup', function() {
    var text = React.renderToStaticMarkup(
      <Highlight>Some text</Highlight>
    );
    expect(text.replace(/\s/, '')).toBe('<pre><code>Some text</code></pre>');
  });

  it('should assign className prop', function() {
    var text = React.renderToStaticMarkup(
      <Highlight className='html'>Some text</Highlight>
    );
    expect(text.replace(/\s/, '')).toBe('<pre><code class="html">Some text</code></pre>');
  });

  it('should accept innerHTML prop', function() {
    var text = TestUtils.renderIntoDocument(
      <Highlight innerHTML={true}>{"<div>Some text</div>"}</Highlight>
    );
    expect(text.getDOMNode().textContent).toBe('Some text');
  });
  
});



