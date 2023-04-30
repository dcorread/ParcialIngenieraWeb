import { NgModule } from '@angular/core';
import { PlantaListComponent } from './planta-list/planta-list.component';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    PlantaListComponent,
  ],
  imports: [
    CommonModule
  ],
  exports: [PlantaListComponent]
})
export class PlantasModule { }
