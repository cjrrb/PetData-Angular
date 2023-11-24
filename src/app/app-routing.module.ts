import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {PetDetailsComponent} from "./pet-details/pet-details.component";
import {PetIndexComponent} from "./pet-index/pet-index.component";
import {RouterModule, Routes} from "@angular/router";

const routes: Routes = [
  {path: '', component: PetIndexComponent},
  {path: 'api/pets/:id', component: PetDetailsComponent},
  {path: '**', redirectTo: ''}
];
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
