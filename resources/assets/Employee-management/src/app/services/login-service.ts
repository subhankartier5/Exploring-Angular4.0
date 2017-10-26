import {Injectable} from '@angular/core';

@Injectable()

export class LoginService {
  getUserName(): Promise<string> {
    return Promise.resolve('Tier5');
  }
}
