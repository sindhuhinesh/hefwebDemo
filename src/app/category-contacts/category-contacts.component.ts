import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../Services/category_service';

@Component({
  selector: 'app-category-contacts',
  templateUrl: './category-contacts.component.html',
  styleUrls: ['./category-contacts.component.css']
})
export class CategoryContactsComponent implements OnInit {

  constructor(private categoryService: CategoryService) { }

  category!: { category_name: string; category_image: string; manufacture_name: string; product_name: string; place: string; contact_number: number; };

  ngOnInit(): void {
    this.categoryService.OnShowCategoryDetailsClicked.subscribe((data: {category_name : string, category_image : string, manufacture_name : string, product_name : string, place : string, contact_number : number}) => {
      this.category = data;
    })
  }

}
