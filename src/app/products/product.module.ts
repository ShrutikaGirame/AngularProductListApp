import { NgModule } from '@angular/core';
import { ProductDetailsComponent } from './product-details.component';
import { ConvertToSpacesPipe } from '../shared/convert-to-spaces.pipe';
import { ProductListComponenet } from './product-list.component';
import { RouterModule } from '@angular/router';
import { ProductDetailGuard } from './product-detail.guard';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [ 
    ProductListComponenet,
    ConvertToSpacesPipe,
    ProductDetailsComponent
  ],
  imports: [
    RouterModule.forChild([
      {path: 'products', component: ProductListComponenet},
      {path: 'products/:id',
      canActivate: [ProductDetailGuard],
       component: ProductDetailsComponent}
    ]),
    SharedModule
  ]
})
export class ProductModule { }
