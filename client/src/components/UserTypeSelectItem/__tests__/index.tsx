import * as React from 'react';
import { UserTypeSelectItem } from '../index';
import { create } from 'react-test-renderer';

it('renders correctly', () => {
  const userType = {
    type: 'Chef'
  };
  const userTypeSelectItem = create(
    <UserTypeSelectItem userType={userType} />
  ).toJSON();
  expect(userTypeSelectItem).toMatchSnapshot();
});