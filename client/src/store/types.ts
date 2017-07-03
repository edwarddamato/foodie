export interface IAction {
  readonly stateKey: string;
}
export interface IDispatchAction {
  readonly type: IAction;
  readonly data: any;
}

export interface IUserType {
  readonly type: string;
};

export const NoUser: IUserType = {
  type: 'None'
};
export const ChefUser: IUserType = {
  type: 'Chef'
};
export const ConsumerUser: IUserType = {
  type: 'Consumer'
};
export interface IDietaryRequirement {
  readonly requirement: string;
};