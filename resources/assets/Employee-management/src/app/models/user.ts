/**
 * class User model
 * email required, password required , age optional
 */
export class User {
  constructor(public email: string, public password: string, public age?: number ) {}
}
