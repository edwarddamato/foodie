interface DietaryRequirement {
  readonly requirement: string;
};

export const VegeterianRequirement: DietaryRequirement = {
  requirement: 'Vegeterian'
};
export const DairyFreeRequirement: DietaryRequirement = {
  requirement: 'Dairy Free'
};
export const EggFreeRequirement: DietaryRequirement = {
  requirement: 'Egg Free'
};
export const VeganRequirement: DietaryRequirement = {
  requirement: 'Vegan'
};
export const NutFreeRequirement: DietaryRequirement = {
  requirement: 'Nut Free'
};
export const GlutenFreeRequirement: DietaryRequirement = {
  requirement: 'Gluten Free'
};

export interface Meal {
  readonly id: number;
  readonly name: string;
  readonly availableFor: Array<DietaryRequirement>;
};