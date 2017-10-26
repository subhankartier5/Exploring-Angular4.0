export class Constants {
  static api_endpoint = 'http://127.0.0.1:8000/api/v1';

  /**
   *  return api endpoint for login
   * @return {string}
   */
  public static get loginUrl(): string {
    return this.api_endpoint + '/authenticate-user';
  }
}
