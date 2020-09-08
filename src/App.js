import React from 'react';
import { render } from 'react-dom';

const Pet = ({ name, animal, breed }) => {
  return React.createElement('div', {}, [
    React.createElement('h1', {}, name),
    React.createElement('h2', {}, animal),
    React.createElement('h2', {}, breed)
  ]);
};

const App = () => {
  return React.createElement('div', {}, [
    React.createElement('h1', {}, 'Adopt Me!'),
    React.createElement(Pet, { name: 'Luna', animal: 'dog', breed: 'Yorkie' }),
    React.createElement(Pet, { name: 'Diego', animal: 'dog', breed: 'Yorkie' }),
    React.createElement(Pet, { name: 'Bruno', animal: 'dog', breed: 'Yorkie' })
  ]);
};

render(React.createElement(App), document.getElementById('root'));
