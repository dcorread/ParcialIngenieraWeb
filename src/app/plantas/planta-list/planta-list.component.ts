import { Component, OnInit } from '@angular/core';
import { PlantasService } from "../../plantas/plantas.service";
import { Planta } from '../planta';

@Component({
  selector: 'app-planta-list',
  templateUrl: './planta-list.component.html',
  styleUrls: ['./planta-list.component.sass']
})
export class PlantaListComponent implements OnInit {
  
  plantas: Planta[];
  totalInterior: number = 0;
  totalExterior: number = 0;

  constructor(
    private plantSrvc: PlantasService
  ) {}

  ngOnInit() {
    this.getPlats();
  }

  getPlats() {
    this.plantSrvc.getPlats().subscribe(
      {
        next: success => {
          this.plantas = success;
          for (const plant of this.plantas) {
            if (plant.tipo == "Interior") {
              this.totalInterior+=1;
            } else if(plant.tipo == "Exterior") {
              this.totalExterior+=1;
            }
          }
        },
        error: error => {
          console.error(error);
        }
      }
    )
  }

}
