import {Injectable} from '@angular/core';

@Injectable()
export class ProductService {
  private products: Product[] = [
    new Product(1, '第一个商品', 899, 3.5, '这是一个垃圾电脑', ['电子产品', '家电']),
    new Product(2, '第二个商品', 899, 1.5, '这是一个垃圾电脑', ['电子产品', '家电']),
    new Product(3, '第三个商品', 899, 3.5, '这是一个垃圾电脑', ['电子产品', '家电']),
    new Product(4, '第四个商品', 899, 2.5, '这是一个垃圾电脑', ['电子产品', '家电']),
    new Product(5, '第五个商品', 899, 3.5, '这是一个垃圾电脑', ['电子产品', '家电']),
    new Product(6, '第六个商品', 899, 4.5, '这是一个垃圾电脑', ['电子产品', '家电'])
  ]
  private comments: Comment[] = [
    new Comment(1, 1, '2017-11-05', '张三', 3, '东西很给力'),
    new Comment(2, 2, '2017-11-05', '李四', 2, '东西很给力'),
    new Comment(3, 3, '2017-11-05', '王五', 2, '东西很给力'),
    new Comment(4, 4, '2017-11-05', '李四', 2, '东西很给力'),
    new Comment(5, 5, '2017-11-05', '张三', 2, '东西很给力'),
    new Comment(6, 6, '2017-11-05', '李四', 2, '东西很给力')
  ]

  constructor() {
  }

  gerProducts(): Product[] {
    return this.products;
  }

  getProduct(id: number): Product {
    return this.products.find((product) => product.id == id);
  }

  getCommentForProsuct(id: number): Comment {
    return this.comments.find((comment: Comment) => comment.id == id);
  }

}
export class Product {
  constructor(public id: number,
              public title: string,
              public price: number,
              public rating: number,
              public desc: string,
              public categories: Array<string>) {
  }
}
export class Comment {
  constructor(public id: number,
              public productId: number,
              public timestamp: string,
              public user: string,
              public rating: number,
              public content: string) {
  }
}

