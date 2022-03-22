import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../Services/category_service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  constructor(private categoryService: CategoryService) { }

  category: {category_name : string, category_image : string, manufacture_name : string, product_name : string, place : string, contact_number : number}[] = [];

  ngOnInit(): void {
    this.category = this.categoryService.categoryList;
  }

  ShowCategoryDetails(category: {category_name : string, category_image : string, manufacture_name : string, product_name : string, place : string, contact_number : number}){
    this.categoryService.ShowCategoryDetails(category);
  }

}
