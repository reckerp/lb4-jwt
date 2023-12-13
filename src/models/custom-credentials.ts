import {Credentials} from '@loopback/authentication-jwt';

export interface CustomCredentials extends Partial<Credentials> {
  email: string;
  password: string;
}
