import { IDietaryRequirement } from '../../../store/types';
export class Foodie {
  public static GetDietaryRequirements(): Promise<Array<IDietaryRequirement>> {
    return new Promise(resolve => {
      resolve([{"requirement":"Vegan"},{"requirement":"Vegeterian"},{"requirement":"Dairy Free"},{"requirement":"Gluten Free"},{"requirement":"Egg Free"},{"requirement":"Nut Free"}])
    });
  }
}