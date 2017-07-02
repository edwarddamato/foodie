import * as React from 'react';
import { UserTypeSelect } from '../index';
import { create } from 'react-test-renderer';

it('renders correctly', () => {
  const user = {
    Name: 'Edward D\'Amato',
    Location: 'London',
    Bio: 'Moo'
  };
  const userTypeSelect = create(
    <UserTypeSelect user={user} />
  ).toJSON();
  expect(userTypeSelect).toMatchSnapshot();
});