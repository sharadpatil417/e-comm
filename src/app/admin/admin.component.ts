import { Component } from '@angular/core';
import { ProductService } from '../services/product.service';
import { MatDialog } from '@angular/material/dialog';
import { AddProductComponent } from './add-product/add-product.component';
import * as _ from 'lodash';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss'],
})
export class AdminComponent {
  products: any[] = [];

  constructor(
    private productService: ProductService,
    public dialog: MatDialog
  ) {}

  ngOnInit() {
    this.loadProducts();
  }
  deleteProduct(id: number) {
    this.productService.deleteProduct(id).subscribe((data: any[]) => {
      console.log('response', data);
      this.loadProducts();
    });
  }
  openProductDialog() {
    this.dialog
      .open(AddProductComponent, {
        data: {
          id: -1,
          name: '',
          price: '',
          description: '',
          image_url: '',
        },
      })
      .afterClosed()
      .subscribe((res) => {
        console.log(res);
        this.loadProducts();
      });
  }

  loadProducts() {
    this.productService.getAllProducts().subscribe((data: any[]) => {
      this.products = _.orderBy(data, ['id'], ['desc']);
    });
  }

  editProduct(product: any) {
    this.dialog
      .open(AddProductComponent, {
        data: product,
      })
      .afterClosed()
      .subscribe((res) => {
        console.log(res);
        this.loadProducts();
      });
  }
}
