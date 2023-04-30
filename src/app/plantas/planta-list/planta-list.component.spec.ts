import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlantaListComponent } from './planta-list.component';
import { AppModule } from 'src/app/app.module';

describe('PlantaListComponent', () => {
  let component: PlantaListComponent;
  let fixture: ComponentFixture<PlantaListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppModule],
      declarations: [ PlantaListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlantaListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
