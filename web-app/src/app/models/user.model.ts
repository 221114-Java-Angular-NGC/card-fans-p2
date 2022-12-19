export interface User {
  userId: number;

  firstName: string;

  lastName: string;

  username: string;

  email: string;

  password: string;

  addressLine1?: string;

  city?: string;

  state?: string;

  zipCode?: string;
}
