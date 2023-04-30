import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { Planta } from './planta';

@Injectable({
  providedIn: 'root'
})
export class PlantasService {

  private url = environment.baseUrl;

  constructor(private http: HttpClient) {}

  getPlats(): Observable<Planta[]> {
    return this.http.get<Planta[]>(this.url);
  }
}
