import { IAction, IDispatchAction, IUserType, NoUser } from './types';
import { UserTypeSelectAction } from './actions';
import { createStore } from 'redux';

const execute = (action: IDispatchAction, op: (StoreKey: any) => any): (StoreKey: any) => any => {
  const partialState = { [action.type.stateKey]: action.data };
  return op(partialState);
};

const reducer = (state: any, action: IDispatchAction) => {
  const newState = execute(action, partialState => {
    return Object.assign({}, state, partialState);
  });
  return newState || state;
};

const store = createStore(reducer, {
  [UserTypeSelectAction.stateKey]: NoUser
});

export class Store {
  public static Dispatch(action: IAction, data: any): void {
    store.dispatch({ type: action, data });
  }
  public static GetState(action?: IAction): any {
    if (action) {
      return store.getState()[action.stateKey];
    } else {
      return store.getState();
    }
  }

  public static Subscribe(subscribe: () => any): void {
    store.subscribe(subscribe);
  }

  public static GetCurrentUserType(): IUserType {
    return Store.GetState(UserTypeSelectAction);
  }
}