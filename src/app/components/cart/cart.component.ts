import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';


interface IProduct {
  Id: number;
  Name: string;
  Price: number;
  Category: string;
}

interface IComputationData {
  Price: number;
  Qty: number;
  Subtotal: number;
  Vat: number;
  Gtotal: number;
  Payment: number;
  Change: number;
}

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})

export class CartComponent implements OnChanges {
  @Input() Cartlist?: IProduct[]

  ngOnChanges(changes: SimpleChanges): void {
    // This method is called whenever there is a change in the @Input properties
    console.log('Changes in child component:', changes);
    console.log('Changes in child component:', this.Cartlist);
    this.handleComputation()
  }

  ComputationData: IComputationData = {
    Price: 0,
    Qty: 0,
    Subtotal: 0,
    Vat: 0,
    Gtotal: 0,
    Payment: 0,
    Change: 0,
  }

  Price: number = 0
  Qty: number = 0
  handleComputation(): void {

    this.ComputationData = {
      Price: 0,
      Qty: 0,
      Subtotal: 0,
      Vat: 0,
      Gtotal: 0,
      Payment: 0,
      Change: 0,
    }

    this.Cartlist?.forEach(data => {
      this.Price += data.Price
      this.Qty += 1
    });

    this.ComputationData.Price = this.Price
    this.ComputationData.Qty = this.Qty 
    this.ComputationData.Subtotal = this.ComputationData.Price * this.ComputationData.Qty
    this.ComputationData.Vat = (this.ComputationData.Subtotal / 12) * 1.12
    this.ComputationData.Gtotal = this.ComputationData.Subtotal + this.ComputationData.Vat 
    this.ComputationData.Payment = 32423
    this.ComputationData.Change = (this.ComputationData.Gtotal - this.ComputationData.Payment) > 0 ? this.ComputationData.Gtotal - this.ComputationData.Payment : 0
   
  }

  handleRemove(index: number): void {
    this.Cartlist = this.Cartlist?.filter((_, currentIndex) => currentIndex !== index);
    this.handleComputation()
  }
}
