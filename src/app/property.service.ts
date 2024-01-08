import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Property } from './models/property.model';

@Injectable({
  providedIn: 'root'
})
export class PropertyService {

  private apiUrl = 'http://127.0.0.1:8000/'
  constructor(private http: HttpClient) { }

  addProperty(property: Property): Observable<any>{
    return this.http.post<any>('${this.apiUrl}/add_property', property);
  }
}
