import * as React from 'react';
import { Store } from '../../store/index';
import { NoUser, IUserType } from '../../store/types';
import './Header.scss';

interface IHeaderState {
  readonly currentUser: IUserType
}

export class Header extends React.Component<null, IHeaderState> {
  constructor(props: null) {
    super(props);

    Store.Subscribe(() => {
      this.setState({
        currentUser: Store.GetCurrentUserType()
      });
    });

    this.state = {
      currentUser: NoUser
    };
  }

  render () {
    return (
      <header className="component_header">
        <h1 className="component_header-title">foodie</h1>
        {
          this.state.currentUser === NoUser ? null : <h2 className="component_header-subtitle">{this.state.currentUser.type}</h2>
        }
      </header>
    );
  }
}

export default Header;
