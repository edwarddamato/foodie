import * as React from 'react';
import { Store } from '../../store';
import { UserTypeSelectAction } from '../../store/actions';
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

    this.handleUserReset = this.handleUserReset.bind(this);
  }

  private handleUserReset() {
    Store.Dispatch(UserTypeSelectAction, NoUser);
  }

  render () {
    return (
      <header className="component_header">
        <h1 className="component_header-title">foodie</h1>
        {
          this.state.currentUser === NoUser ? null :
            (<div className="component_header-container">
              <h2 className="component_header-subtitle">{this.state.currentUser.type}</h2>
              <div onClick={this.handleUserReset} className="component_header-reset"></div>
            </div>)
        }
      </header>
    );
  }
}

export default Header;
