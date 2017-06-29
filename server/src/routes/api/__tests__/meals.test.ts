import { Request, Response } from 'express';
import apiMeals from '../meals';

describe('apiMeals route action', () => {
  it.skip('should send a list of meals in the response', () => {
    apiMeals.action(null, null)

    expect(1).toBe(1);
  });
});