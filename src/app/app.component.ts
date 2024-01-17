import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'simple_point_of_sale_system';
  showFiller = false;
  
  toggleFiller() {
    this.showFiller = !this.showFiller;
  }
}
