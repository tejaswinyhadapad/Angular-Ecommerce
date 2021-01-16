export class Cartitem{
  public id: number;
  public name: string;
  public quantity: number;
  public price: number;
  public cartTotal: number;
//   public ingredients: Ingredient[];

  constructor(id: number, name: string, quantity: number, price: number) {
  // constructor(public name: string, public quantity: number, public price: number) {
    this.id = id;
    this.name = name;
    this.quantity = quantity;
    this.price = price;
    this.cartTotal += this.quantity * this.price;
  }
}