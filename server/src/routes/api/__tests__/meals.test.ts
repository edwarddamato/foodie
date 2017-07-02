import * as TypeMoq from 'typemoq';
import { Request, Response } from 'express';
import { meals } from '../../../../data/meals'
import apiMeals from '../meals';

describe('apiMeals route action', () => {
  it('should send a list of meals in the response', () => {
    const mockRequest: TypeMoq.IMock<Response> = TypeMoq.Mock.ofType<Response>();
    mockRequest.send = jest.fn();
    return apiMeals.action(null, mockRequest).then(() => {
      expect(mockRequest.send).toHaveBeenCalledWith({ meals });
    });
  });
});