import { IDietaryRequirement } from '../../store/types';
export class Api {
  private static readonly serverUrl: string = 'http://localhost:4000';
  private static readonly headers: Headers = new Headers({
    'Accept': 'application/json',
    'Content-Type': 'application/json'
  });

  private static async Get(path: string): Promise<any> {
    const response: Response = await fetch(`${this.serverUrl}${path}`, {
      method: 'GET',
      headers: this.headers
    });
    return await response.json();
  }

  public static async FetchDietaryRequirements(): Promise<Array<IDietaryRequirement>> {
    const dietaryRequirementsContainer = await this.Get('/api/dietaryrequirements');
    return dietaryRequirementsContainer["dietaryRequirements"];
  }
}