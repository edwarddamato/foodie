import {
  VegeterianRequirement,
  DairyFreeRequirement,
  GlutenFreeRequirement,
  EggFreeRequirement,
  VeganRequirement,
  NutFreeRequirement,
  Meal } from '../src/types/meals';

export const meals: Array<Meal> = [{
  id: 1,
  name: 'Sweetcorn Chilli and Chowder, Homous, Feta and Roast Vegetable Wrap',
  availableFor: [VeganRequirement, DairyFreeRequirement]
}, {
  id: 2,
  name: 'Tandoori Salmon with Bharji Crust',
  availableFor: [DairyFreeRequirement, EggFreeRequirement]
}, {
  id: 3,
  name: 'Chickpea Pancake with Cream Cheese Roast Tomatoes, and Asparagus',
  availableFor: [VeganRequirement, VegeterianRequirement, NutFreeRequirement]
}, {
  id: 4,
  name: 'Lamb Kofta with Garlic Yogurt',
  availableFor: [NutFreeRequirement]
}, {
  id: 5,
  name: 'Roast Aubergines with Harissa Spiced Chipeas',
  availableFor: [VegeterianRequirement, DairyFreeRequirement, GlutenFreeRequirement]
}, {
  id: 6,
  name: 'Orange and Hazel Glazed Nut Cornfed Chicken Supreme',
  availableFor: [DairyFreeRequirement, GlutenFreeRequirement]
}, {
  id: 7,
  name: 'Roast Peppers with Grilled Halloumi, Olives and Capers',
  availableFor: [VegeterianRequirement, GlutenFreeRequirement]
}, {
  id: 8,
  name: 'Blue Cheese Beef Burger	Blackbean',
  availableFor: [NutFreeRequirement, EggFreeRequirement]
}, {
  id: 9,
  name: 'Sweet Potato Burger with Blue Cheese',
  availableFor: [VegeterianRequirement, NutFreeRequirement, EggFreeRequirement]
}];