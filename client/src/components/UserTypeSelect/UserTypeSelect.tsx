import * as React from 'react';
import { ConsumerUser, ChefUser } from '../../store/types';
import { UserTypeSelectItem } from '../UserTypeSelectItem';
import './UserTypeSelect.scss';

export class UserTypeSelect extends React.Component<null, null> {
  render () {
    return (
      <section className="component_user-select">
        <div className="component_user-select-title">What are you?</div>
        <ul className="component_user-select-types">
          {[ConsumerUser, ChefUser].map(user => <UserTypeSelectItem userType={user} key={user.type} />)}
        </ul>
      </section>
    );
  }
}

export default UserTypeSelect;
