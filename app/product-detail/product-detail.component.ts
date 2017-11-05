import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Product, ProductService} from '../shared/product.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  product: Product;

  constructor(private routeInfo: ActivatedRoute,
              private productService: ProductService) { // ActivedRoute是保存当前信息的路由对象 要接受外面传进来的参数，在构造函数里面注入，
  }

  ngOnInit() {
    let productId: number = this.routeInfo.snapshot.params["productId"]; // 因为从列表页和详情页不会互相导入，是单向的
    this.product = this.productService.getProduct(productId);
  }

}
