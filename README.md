# react-highlight
React component for syntax highlighting using highlight.js

![Build Status](https://travis-ci.org/akiran/react-highlight.svg?branch=master)

### Installation
```bash
  npm install react-highlight --save
```

### Usage
#### Importing component
```js
  var Highlight = require('react-highlight');
```

#### Adding styles
Choose the [theme](https://highlightjs.org/static/demo/) for syntax highlighting and add corresponding styles of highlight.js
```css
  <link rel="stylesheet" href="/path/to/styles/theme-name.css">
```

The styles will most likely be in `node_modules/highlight.js/styles` folder.

Props:
* className: custom class name
* innerHTML: enable to render markup with dangerouslySetInnerHTML
* element:  render code snippet inside specified element

#### Syntax highlighting of single code snippet
Code snippet that requires syntax highlighting should be passed as children to Highlight component in string format. Language name of code snippet should be specified as className.

```html
<Highlight className='language-name-of-snippet'>
  {"code snippet to be highlighted"}
</Highlight>
```

#### Syntax highlighting of multiple code snippets
Set `innerHTML=true` to highlight multiple code snippets at a time.
This is especially usefull if html with multiple code snippets is generated from preprocesser tools like markdown.

**Warning:** If innerHTML is set to true, make sure the html generated with code snippets is from trusted source.

```html
<Highlight innerHTML={true}>
  {"html with multiple code snippets"}
</Highlight>
```

#### Advanced usage: selectively loading languages with Webpack

##### appConfig.js

```js
// an array of languages supported by highlight.js
const LANGUAGES = ['javascript', 'python']

module.exports = {
  LANGUAGES,
}
```

##### webpack.config.js

```js
const config = require('path/to/config')

module.exports = {
  // ...
  plugins: [
    // ...
    new webpack.ContextReplacementPlugin(
      /highlight\.js\/lib\/languages/,
      new RegExp(config.LANGUAGES.join('|'))
    ),
  ]
}
```

##### component.js

```js
import Highlight from 'react-highlight/lib/optimized'
import { LANGUAGES } from 'path/to/config'

export const Component = (props) => {
  return (
    <Highlight innerHTML={true} languages={LANGUAGES}>
      {props.children} {/* html with multiple code snippets */}
    </Highlight>    
  )
}
```
