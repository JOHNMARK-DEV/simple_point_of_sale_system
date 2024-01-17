import { Component, EventEmitter, Output } from '@angular/core';

interface IProduct {
  Id: number;
  Name: string;
  Price: number;
  Category: string;
}

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
  @Output() addtoCartProduct = new EventEmitter()
  Products: IProduct[] = [
    {
      Id: 1,
      Name: "Basic Burger",
      Price: 100,
      Category: ""
    },
    {
      Id: 2,
      Name: "Super Burger",
      Price: 200,
      Category: ""
    },
    {
      Id: 3,
      Name: "Angels Burger",
      Price: 300,
      Category: ""
    },
    {
      Id: 3,
      Name: "Angels Burger",
      Price: 300,
      Category: ""
    },
    {
      Id: 3,
      Name: "Angels Burger",
      Price: 300,
      Category: ""
    },
    {
      Id: 3,
      Name: "Angels Burger",
      Price: 300,
      Category: ""
    }
  ]
  handleAddtoCart(object:IProduct):void {
    this.addtoCartProduct.emit(object)
  }
}
