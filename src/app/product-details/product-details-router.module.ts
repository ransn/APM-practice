import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ProductDetailsGuard } from './product-details.guard';
import { ProductDetailsComponent } from './product-details.component';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: 'products/:id', 
        canActivate: [ProductDetailsGuard],
        component: ProductDetailsComponent
      }
    ])
  ],
  exports:[
    RouterModule
  ]
})
export class ProductDetailsRouterModule { }
