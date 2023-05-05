if (process.env.NODE_ENV !== 'production') {
    const React = require('react')
    const ReactDOM = require('react-dom')
  
    const target = document.getElementById('devtools')
    ReactDOM.render(<DevTools />, target)
  }
  
  function DevTools() {
    return <div>React DevTools</div>
  }
  