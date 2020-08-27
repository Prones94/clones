import React from 'react';
import './App.sass';


function App() {
  return (
    <div className="App">
      <h1 className="title">Bulma</h1>
<p className="subtitle">
<h1>Hello</h1>
  Modern CSS framework based on{' '}
  <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout/Basic_Concepts_of_Flexbox">
    Flexbox
  </a>
</p>

<div className="field">
  <div className="control">
    <input className="input is-success is-small" type="text" placeholder="Input" />
  </div>
</div>

<div className="field">
  <p className="control">
    <span className="select">
      <select>
        <option>Select dropdown</option>
      </select>
    </span>
  </p>
</div>

<div className="buttons">
  <a className="button is-success">Primary</a>
  <a className="button is-link">Link</a>
</div>
      
    </div>
  );
}

export default App;
