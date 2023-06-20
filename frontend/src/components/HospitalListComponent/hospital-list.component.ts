import { Component, OnInit } from '@angular/core';
import { Hospital } from '../models/hospital.model';
import { HospitalService } from '../services/hospital.service';

@Component({
  selector: 'app-hospital-list',
  templateUrl: './hospital-list.component.html',
  styleUrls: ['./hospital-list.component.css']
})
export class HospitalListComponent implements OnInit {
  hospitals: Hospital[];

  constructor(private hospitalService: HospitalService) { }

  ngOnInit() {
    this.getHospitals();
  }

  getHospitals() {
    this.hospitalService.getHospitals().subscribe(
      hospitals => this.hospitals = hospitals,
      error => console.log(error)
    );
  }
}
