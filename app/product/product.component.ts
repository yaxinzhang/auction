import {Component, OnInit} from '@angular/core';
import {Product, ProductService} from '../shared/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  products: Product[];
  imgUrl = 'http://placehold.it/320x152';

  constructor(private productService: ProductService) {
  }

  ngOnInit() {
    this.products = this.productService.gerProducts();

  }
}

