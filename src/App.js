import React from 'react';
import './App.css';
import ClassComponent from './components/ClassComponent';
import HooksComponent from './components/useState/HooksComponent';
import PrevState from './components/useState/PrevState';
import HooksObjects from './components/useState/HooksObjects';

function App() {
  return (
    <div className="App">
      <div className="Wrapper">
        <div className="Inner">
          <p>&#47;&#47; this section is written in Class Component</p>
          <ClassComponent />
          <p>&#47;&#47; this section is written in Functional Component using &#123; useState &#125;</p>
          <HooksComponent />
          <PrevState />
          <HooksObjects />
        </div>
      </div>
    </div>
  );
}

export default App;
