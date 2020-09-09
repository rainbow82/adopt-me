import React from 'react';
import { render } from 'react-dom';
import Pet from './Pet';

const App = () => {
  return(
    <div>
      <h1>Adopt Me!</h1>
      <Pet name='Sparky' animal='dog' breed='Yorkie'/>
      <Pet name='Tiger' animal='dog' breed='Poodle'/>
      <Pet name='Brax' animal='bird' breed='Parrot'/>
    </div>
  );
};

render(<App />, document.getElementById('root'));
