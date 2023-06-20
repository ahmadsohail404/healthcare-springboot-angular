import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Hospital } from '../models/hospital.model';
import { HospitalService } from '../services/hospital.service';

@Component({
  selector: 'app-hospital-details',
  templateUrl: './hospital-details.component.html',
  styleUrls: ['./hospital-details.component.css']
})
export class HospitalDetailsComponent implements OnInit {
  hospital: Hospital;

  constructor(private route: ActivatedRoute, private hospitalService: HospitalService) { }

  ngOnInit() {
    const hospitalId = this.route.snapshot.params['id'];
    this.getHospitalDetails(hospitalId);
  }

  getHospitalDetails(id: number) {
    this.hospitalService.getHospitalById(id).subscribe(
      hospital => this.hospital = hospital,
      error => console.log(error)
    );
  }
}
