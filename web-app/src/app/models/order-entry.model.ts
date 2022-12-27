export class OrderEntry {
  //public orderId: number = 0;
  constructor(
    public prodId: number,
    public name: string,
    image: string,
    public quantity: number,
    public price: number
  ) {}

  get total(): number {
    return this.quantity * this.price;
  }
}
