import React from 'react';
import './App.scss';
import ClassComponent from './components/classComponent/ClassComponent';
import HooksComponent from './components/useState/HooksComponent';
import PrevState from './components/useState/PrevState';
import HooksObjects from './components/useState/HooksObjects';
import { Wrapper, Inner, Class, Hooks } from './styled';
import PrevClass from './components/classComponent/PrevClass';

function App() {
  return (
    <div className="App">
      <Wrapper>
        <Inner>
          <Class>
            <p>&#47;&#47; this section is written in Class Component</p>
            <ClassComponent />
            <PrevClass />
          </Class>
          <Hooks>
            <p>&#47;&#47; this section is written in Functional Component using &#123; useState &#125;</p>
            <HooksComponent />
            <PrevState />
            <HooksObjects />
          </Hooks>
        </Inner>
      </Wrapper>
    </div>
  );
}

export default App;
