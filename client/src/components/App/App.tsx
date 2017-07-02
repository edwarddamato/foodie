import * as React from 'react';
// import { IUser } from '../../api/github/interfaces.d';
// import { Github } from '../../api/github/index';
import { UserTypeSelect } from '../UserTypeSelect';
import { Header } from '../Header'
import './App.scss';

export class App extends React.Component<null, null> {
  constructor (props: undefined) {
    super(props);
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
        <UserTypeSelect />
      </div>
    );
  }
}

export default App;
