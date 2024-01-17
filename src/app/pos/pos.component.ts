import { Component } from '@angular/core';

interface IProduct {
  Id: number;
  Name: string;
  Price: number;
  Category: string;
}

@Component({
  selector: 'app-pos',
  templateUrl: './pos.component.html',
  styleUrls: ['./pos.component.css'],
})
export class PosComponent {
  Category: string = "" 
  CartList?:  IProduct[]
  Cart: IProduct[] = [] 

  selectedCategory(data: string): void {
    alert("parent" + data)
  }
  addtoCart(product:IProduct): void {
    this.Cart = [...this.Cart, product]; // Use the spread operator for immutability
    this.CartList = [...this.Cart];
  }
}
