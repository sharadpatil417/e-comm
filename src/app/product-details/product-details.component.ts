import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss'],
})
export class ProductDetailsComponent {
  product: any;
  constructor(private route: ActivatedRoute, private productService: ProductService) {}
  ngOnInit(): void {
    this.productService.getProduct(this.route.snapshot.paramMap.get('id')).subscribe((data) => {
      this.product = data[0];
    })
  }
}
