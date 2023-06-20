import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Hospital } from '../models/hospital.model';

@Injectable({
  providedIn: 'root'
})
export class HospitalService {
  private apiUrl = 'http://localhost:8080/api/hospitals';

  constructor(private http: HttpClient) { }

  getHospitals(): Observable<Hospital[]> {
    return this.http.get<Hospital[]>(this.apiUrl);
  }

  getHospitalById(id: number): Observable<Hospital> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.get<Hospital>(url);
  }

  createHospital(hospital: Hospital): Observable<Hospital> {
    return this.http.post<Hospital>(this.apiUrl, hospital);
  }

  updateHospital(id: number, hospital: Hospital): Observable<Hospital> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.put<Hospital>(url, hospital);
  }

  deleteHospital(id: number): Observable<any> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.delete(url);
  }

  searchHospitalsByName(name: string): Observable<Hospital[]> {
    const url = `${this.apiUrl}/search?name=${name}`;
    return this.http.get<Hospital[]>(url);
  }
}
