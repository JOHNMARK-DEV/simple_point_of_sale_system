 
import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent{

  @Output() selectedCategory = new EventEmitter<string>();
  
  setCategory(data:string): void {
    this.selectedCategory.emit(data)
  }
}
