import { OrderEntry } from './order-entry.model';

export class Order {
  constructor(
    public orderEntries: OrderEntry[],
    public orderId?: number,
    public userId?: number
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
