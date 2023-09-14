import { Component, Inject } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ProductData } from '../../types/ecommtypes';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss'],
})
export class AddProductComponent {
  response = '';
  constructor(
    private productService: ProductService,
    private formBuilder: FormBuilder,
    @Inject(MAT_DIALOG_DATA) public data: ProductData
  ) {}

  productform = this.formBuilder.group({
    id: -1,
    name: '',
    price: 0,
    description: '',
    image_url: '',
  });

  ngOnInit(): void {
    this.productform.patchValue(this.data);
  }

  addProduct() {
    if (this.productform.status !== 'INVALID') {
      let product: ProductData = {
        id: this.productform.get('id')?.value,
        name: this.productform.get('name')?.value,
        price: this.productform.get('price')?.value,
        description: this.productform.get('description')?.value,
        image_url: this.productform.get('image_url')?.value,
      };
      if (product.id !== null && product.id !== undefined && product.id > 0) {
        this.productService.updateProduct(product).subscribe((response) => {
          this.response = response;
        });
      } else {
        this.productService.addProduct(product).subscribe((response) => {
          this.response = response;
        });
      }
    }
  }
}
