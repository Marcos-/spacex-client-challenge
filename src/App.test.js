import React from 'react';
import renderer from 'react-test-renderer';
import App from './App';

it('renders correctly', () => {
  const app = renderer
    .create(<App></App>)
    .toJSON();
  expect(app).toMatchSnapshot();
});