import React from 'react';
import { render } from 'react-dom';
import SeachParams from './SearchParams';
import { Router, Link } from '@reach/router';
import Details from './Details';

const App = () => {
  return (
    <div>
      <header>
        <Link to='/'>Adopt Me!</Link>
      </header>
      <Router>
        <SeachParams path='/'/>
        <Details path='/details/:id' />
      </Router>

    </div>
  );
};

render(<App />, document.getElementById('root'));
