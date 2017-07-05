import * as React from 'react';
import { Store } from '../../store';
import { UserTypeSelectAction } from '../../store/actions';
import { NoUser, IUserType, IDietaryRequirement } from '../../store/types';
import { Foodie } from '../../api/foodie';
import './ConsumerArea.scss';

interface IConsumerAreaState {
  readonly currentUserName: string
  readonly dietaryRequirements: Array<IDietaryRequirement>
}

export class ConsumerArea extends React.Component<null, IConsumerAreaState> {
  constructor(props: null) {
    super(props);

    this.state = {
      currentUserName: '',
      dietaryRequirements: []
    };

    this.handleChange = this.handleChange.bind(this);
  }

  private async getDietaryRequirements () {
    const dietaryRequirements = await Foodie.GetDietaryRequirements();
    console.log(dietaryRequirements);
    this.setState({ dietaryRequirements });
  }

  componentDidMount () {
    this.getDietaryRequirements();
  }

  private handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    this.setState({ currentUserName: event.target.value });
  }

  render () {
    return (
      <section className="component_consumer">
        <div className="form consumer_form">
          <div className="form_field consumer_form-field">
            <label className="form_field-label" htmlFor="txtConsumerName">Your Name:</label>
            <input className="form_field-input" onChange={this.handleChange} value={this.state.currentUserName} placeholder="E.g. Bob Smith" type="text" id="txtConsumerName" />
          </div>
          {
            this.state.dietaryRequirements.length === 0 ? null :
            (
              <div className="form_field consumer_form-field">
                <label className="form_field-label" htmlFor="txtConsumerName">Your Food Requirements:</label>
                <ul className="consumer_dietreqs-list">
                  {
                    this.state.dietaryRequirements.map(req => <li key={req.requirement} className="consumer_dietreqs-item">{req.requirement}</li>)
                  }
                </ul>
              </div>
            )
          }
        </div>
      </section>
    );
  }
}

export default ConsumerArea;
