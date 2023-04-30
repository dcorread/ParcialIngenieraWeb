import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PlantaListComponent } from './plantas/planta-list/planta-list.component';

const routes: Routes = [
  {
    path: "",
    component: PlantaListComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
