import { Request, Response } from 'express';

export interface RouteAction {
  (req: Request, res: Response): Promise<void>;
}

export interface Route {
  readonly method: string;
  readonly name: string;
  readonly action: RouteAction;
}