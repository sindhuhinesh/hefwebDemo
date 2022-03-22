import { Component } from '@angular/core';
import { CategoryService } from './Services/category_service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [CategoryService]
})
export class AppComponent {
  title = 'hefWeb';

  constructor(private categoryService: CategoryService){

  }
}
