import * as TypeMoq from 'typemoq';
import { Request, Response } from 'express';
import {
  VegeterianRequirement,
  DairyFreeRequirement,
  GlutenFreeRequirement,
  EggFreeRequirement,
  VeganRequirement,
  NutFreeRequirement } from '../../../types/meals';
import apiDietaryRequirements from '../dietaryRequirements';

describe('apiDietaryRequirements route action', () => {
  it('should send a list of dietary requirements in the response', () => {
    const mockRequest: TypeMoq.IMock<Response> = TypeMoq.Mock.ofType(Response);
    mockRequest.send = jest.fn();
    return apiDietaryRequirements.action(null, mockRequest).then(() => {
      expect(mockRequest.send).toHaveBeenCalledWith({ dietaryRequirements: [
        VeganRequirement,
        VegeterianRequirement,
        DairyFreeRequirement,
        GlutenFreeRequirement,
        EggFreeRequirement,
        NutFreeRequirement
      ] });
    });
  });
});