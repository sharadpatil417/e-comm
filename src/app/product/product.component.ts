import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent {
  @Input() product: any;
  
  constructor(private route: Router){
  }

  ngOnInit(): void {
  }

  showDetails(){
    this.route.navigate(['product/'+this.product.id],{});
  }
}
