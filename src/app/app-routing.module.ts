import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { LoginComponent } from './login/login.component';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ProductDetailsComponent } from './product-details/product-details.component';

const routes: Routes = [
  {
    component: AdminComponent,
    path:'dashboard'
  },
  {
    component: LoginComponent,
    path: 'auth'
  },
  {
    component: ProductDetailsComponent,
    path:'product/:id'
  },
  {
    component: HomeComponent,
    path:'',
  }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
