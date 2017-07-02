import * as React from 'react';
import { Store } from '../../store';
import { UserTypeSelectAction } from '../../store/actions';
import { IUserType } from '../../store/types';
import './UserTypeSelectItem.scss';

interface IUserTypeSelectItemProps {
  readonly userType: IUserType
}

export class UserTypeSelectItem extends React.Component<IUserTypeSelectItemProps, null> {
  constructor(props: undefined) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  private handleClick(e: React.SyntheticEvent<HTMLButtonElement>): void {
    console.trace(this.props.userType);
    Store.Dispatch(UserTypeSelectAction, this.props.userType);
  }

  render () {
    return (
      <li className="component_user-select-item"><button onClick={this.handleClick} className="component_user-select-button">{this.props.userType.type}</button></li>
    );
  }
}

export default UserTypeSelectItem;
