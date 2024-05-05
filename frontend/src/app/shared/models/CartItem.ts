import { Car } from "./Car";

export class CartItem{
  constructor(public car:Car){ }
  quantity:number = 1 ;
  price: number = this.car.price;
}
