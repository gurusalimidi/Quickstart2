import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-productscomponent',
  templateUrl: './productscomponent.component.html',
  styleUrls: ['./productscomponent.component.css']
})
export class ProductscomponentComponent {
  product: string;
  value: string;
  products = [ ];

  onClick() {
    this.products.push({name: this.product, value: this.value});
    this.product = '';
    this.value = '';
}

}
