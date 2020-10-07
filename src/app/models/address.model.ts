import { Geo } from './geo.model';

export interface Addresses {
  street: string,
  city: string,
  suite: string,
  zipcode: string,
  geo: Geo
}