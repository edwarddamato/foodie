jest.mock('../api');
import { Foodie } from '../index';

describe('GetDietaryRequirements()', () => {
  it('should return a list of dietary requirements', async () => {
    const dietaryRequirements = await Foodie.GetDietaryRequirements();
    return expect(dietaryRequirements).toMatchObject([{ requirement:"Vegan"},{ requirement:"Vegeterian"},{ requirement:"Dairy Free"},{ requirement:"Gluten Free"},{ requirement:"Egg Free"},{ requirement:"Nut Free"}]);
  });
});