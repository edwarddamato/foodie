import * as React from 'react';
import { Store } from '../../store';
import { NoUser, IUserType } from '../../store/types';
import { UserTypeSelect } from '../UserTypeSelect';
import { Header } from '../Header'
import './App.scss';

interface IAppState {
  readonly currentUser: IUserType
}

export class App extends React.Component<null, IAppState> {
  constructor (props: undefined) {
    super(props);

    this.state = {
      currentUser: NoUser
    };

    Store.Subscribe(() => {
      this.setState({
        currentUser: Store.GetCurrentUserType()
      });
    });
  }

  // private async getUser () {
  //   const user = await Github.GetUser('edwarddamato');
  //   this.setState({ user });
  // }

  componentDidMount () {
    // this.getUser();
  }

  render () {
    return (
      <div className="root_container">
        <Header />
        {
          this.state.currentUser === NoUser ? <UserTypeSelect /> : null
        }
      </div>
    );
  }
}

export default App;
