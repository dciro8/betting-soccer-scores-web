import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GetSoccerTeamListComponent } from './components/SoccerTeam-list/SoccerTeam-list.component';
import { TutorialDetailsComponent } from './components/tutorial-details/tutorial-details.component';
import { GetSaleYearComponent } from './components/Billing/GetSaleYear.component';
import { CreateProductComponent } from './components/create-product/create-product.component';

const routes: Routes = [
  { path: '', redirectTo: 'ProductAll', pathMatch: 'full' },
  { path: 'ProductAll', component: GetSoccerTeamListComponent },
  { path: 'ProductAll/:id', component: TutorialDetailsComponent },
  { path: 'add', component: GetSaleYearComponent },
  { path: 'SetProduct', component: CreateProductComponent }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
