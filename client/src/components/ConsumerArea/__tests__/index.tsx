import * as React from 'react';
import { ConsumerArea } from '../';
import { create } from 'react-test-renderer';

it('renders correctly', () => {
  const consumerArea = create(
    <ConsumerArea />
  ).toJSON();
  expect(consumerArea).toMatchSnapshot();
});