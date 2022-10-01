import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GetAllProductListComponent } from './components/ProdcutAll-list/ProdcutAll-list.component';
import { TutorialDetailsComponent } from './components/tutorial-details/tutorial-details.component';
import { GetSaleYearComponent } from './components/Billing/GetSaleYear.component';
import { CreateProductComponent } from './components/create-product/create-product.component';

const routes: Routes = [
  { path: '', redirectTo: 'SoccerTeam', pathMatch: 'full' },
  { path: 'SoccerTeam', component: GetAllProductListComponent },
  { path: 'SoccerTeam/:id', component: TutorialDetailsComponent },
  { path: 'add', component: GetSaleYearComponent },
  { path: 'SetProduct', component: CreateProductComponent }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
