import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { MathJaxContext } from 'better-react-mathjax'
import App from './App.jsx'
import './index.css'

const config = {
  loader: { load: ["[tex]/html"] },
  tex: {
    packages: { "[+]": ["html"] },
    inlineMath: [
      ["\\(", "\\)"]
    ],
    displayMath: [
      ["\\[", "\\]"]
    ]
  }
};

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <MathJaxContext version={3} config={config}>
        <App />
      </MathJaxContext>
    </BrowserRouter>
  </React.StrictMode>,
)
