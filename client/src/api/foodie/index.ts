import { Api } from './api';
import { IDietaryRequirement } from '../../store/types';

export class Foodie {
  public static async GetDietaryRequirements(): Promise<Array<IDietaryRequirement>> {
    return await Api.FetchDietaryRequirements();
  }
}