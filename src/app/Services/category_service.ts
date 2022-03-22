import { EventEmitter } from "@angular/core"

export class CategoryService{
  categoryList = [
    {category_name : 'Honey', category_image : 'https://c.ndtvimg.com/2021-07/7s38qeug_honey_625x300_05_July_21.jpg', manufacture_name : 'Hinesh Shankar', product_name : 'Machad Honey', place : 'Manalithara', contact_number : 9940532719},
    {category_name : 'Electronics', category_image : 'https://upload.wikimedia.org/wikipedia/commons/e/ec/Silego_clock_generator.JPG', manufacture_name : 'Surya', product_name : 'My-G', place : 'Thrissur', contact_number : 9940532723},
    {category_name : 'Fruits', category_image : 'https://thumbs.dreamstime.com/z/set-colorful-clipart-fruits-fruit-icons-collection-clip-art-113108227.jpg', manufacture_name : 'Deva', product_name : 'City Fruits', place : 'Wadakkanchery', contact_number : 9940532733}
  ]

  OnShowCategoryDetailsClicked = new EventEmitter<{category_name : string, category_image : string, manufacture_name : string, product_name : string, place : string, contact_number : number}>();

  ShowCategoryDetails(category: {category_name : string, category_image : string, manufacture_name : string, product_name : string, place : string, contact_number : number}){
    this.OnShowCategoryDetailsClicked.emit(category);
  }
}
