import { TestBed } from '@angular/core/testing';

import { PlantasService } from './plantas.service';
import { PlantasModule } from './plantas.module';
import { AppModule } from '../app.module';

describe('PlantasService', () => {
  let service: PlantasService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [AppModule],
      providers: [PlantasService]
    });
    service = TestBed.inject(PlantasService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
