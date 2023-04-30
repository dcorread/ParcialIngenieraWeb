import { ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';
import { PlantaListComponent } from './planta-list.component';
import { AppModule } from 'src/app/app.module';
import { lastValueFrom } from 'rxjs';

describe('PlantaListComponent', () => {
  let component: PlantaListComponent;
  let fixture: ComponentFixture<PlantaListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppModule],
      declarations: [ PlantaListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlantaListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Add 3 elements', () => {
    const fixture = TestBed.createComponent(PlantaListComponent); // Declaramos instancia componente
    const component = fixture.componentInstance;
    

    // Elementos nuevos
    const new_elements = [{id: 123, nombre_comun: "Nombre 1", nombre_cientifico: "Nombre cientifico 1", tipo: "Tipo", altura_maxima: 122, clima: "Interior", sustrato_siembra: "Tierra Organica"},
    {id: 456, nombre_comun: "Nombre 2", nombre_cientifico: "Nombre cientifico 2", tipo: "Tipo", altura_maxima: 123, clima: "Exterior", sustrato_siembra: "Tierra Fértil"},
    {id: 789, nombre_comun: "Nombre 3", nombre_cientifico: "Nombre cientifico 3", tipo: "Tipo", altura_maxima: 124, clima: "Interior", sustrato_siembra: "Tierra Fértil"}
  ];
    component.plantas = new_elements;
    fixture.detectChanges();
    const tableRows = fixture.nativeElement.querySelectorAll('table tbody tr');
    expect(tableRows.length).toEqual(component.plantas.length);
  });

});
