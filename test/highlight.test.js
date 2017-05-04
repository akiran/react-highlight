import Highlight from '../src';
import ReactDOM from 'react-dom';
import TestUtils from 'react-dom/test-utils';
import ReactDOMServer from 'react-dom/server';

describe('highlight', () => {
    it('should display test inside it', () => {
        const text = TestUtils.renderIntoDocument(
            <Highlight>Some text</Highlight>
        );

        expect(ReactDOM.findDOMNode(text).textContent).toBe('Some text');
    });

    it('should have pre and code tags in markup', () => {
        const text = ReactDOMServer.renderToStaticMarkup(
            <Highlight>Some text</Highlight>
        );

        expect(text).toBe('<pre><code>Some text</code></pre>');
    });

    it('should assign className prop', () => {
        const text = ReactDOMServer.renderToStaticMarkup(
            <Highlight className='html'>Some text</Highlight>
        );

        expect(text).toBe('<pre><code class="html">Some text</code></pre>');
    });

    it('should render children in span', () => {
        const text = ReactDOMServer.renderToStaticMarkup(
            <Highlight element='span'>Some text</Highlight>
        );

        expect(text).toBe('<span>Some text</span>');
    });

    it('should render innerHTML in span', () => {
        const text = ReactDOMServer.renderToStaticMarkup(
            <Highlight innerHTML={true} element='span'>Some text</Highlight>
        );

        expect(text).toBe('<span>Some text</span>');
    });

    it('should accept innerHTML prop', () => {
        const text = TestUtils.renderIntoDocument(
            <Highlight innerHTML={true}>{"<div>Sometext</div>"}</Highlight>
        );

        expect(ReactDOM.findDOMNode(text).textContent).toBe('Sometext');
    });
});
