import React, { useState } from 'react';
import { Highlight, Prism, themes } from 'prism-react-renderer';
import './CodeEditor.css';


(typeof global !== 'undefined' ? global : window).Prism = Prism;
require('prismjs/components/prism-jsx');

const CodeEditor = () => {
  const [code, setCode] = useState('');

  const handleChange = (event) => {
    setCode(event.target.value);
  };

  return (
    <div className="code-editor-container">
      <textarea
        value={code}
        onChange={handleChange}
        className="code-editor-textarea"
        spellCheck="false"
      />
      <Highlight Prism={Prism} theme={themes.vsDark} code={code} language="jsx">
        {({ tokens, getLineProps, getTokenProps }) => (
          <pre className="code-editor-pre">
            {tokens.map((line, i) => (
              <div key={i} {...getLineProps({ line })}>
                {line.map((token, key) => (
                  <span key={key} {...getTokenProps({ token })} />
                ))}
              </div>
            ))}
          </pre>
        )}
      </Highlight>
    </div>
  );
};

export default CodeEditor;



