import { OrderEntry } from './order-entry.model';

export class Order {
  constructor(
    public orderEntries: OrderEntry[],
    public firstName: string,
    public lastName: string,
    public email: string,
    public address1: string,
    public city: string,
    public state: string,
    public zipCode: string,
    public country: string,
    public address2: string,
    public orderId?: number,
    public userId?: number, 
  ) {}

  get total(): number {
    return this.orderEntries.reduce(
      (accumulator, currentOrderEntry) => accumulator + currentOrderEntry.total,
      0
    );
  }

  get totalItems(): number {
    return this.orderEntries.reduce(
      (accumulator, currentOrderEntry) =>
        accumulator + currentOrderEntry.quantity,
      0
    );
  }
}
