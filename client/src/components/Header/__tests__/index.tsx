import * as React from 'react';
import { Header } from '../index';
import { create } from 'react-test-renderer';

it('renders correctly', () => {
  const app = create(
    <Header />
  ).toJSON();
  expect(app).toMatchSnapshot();
});