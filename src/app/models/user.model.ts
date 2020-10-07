import { Addresses } from './address.model';
import { Company } from './company.model';
export interface User{
  id: number,
  name: string,
  username: string,
  email: string,
  phone: string
  website: string
  company: Company
  address: Addresses
}