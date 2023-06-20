import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Doctor } from '../models/doctor.model';
import { DoctorService } from '../services/doctor.service';

@Component({
  selector: 'app-doctor-details',
  templateUrl: './doctor-details.component.html',
  styleUrls: ['./doctor-details.component.css']
})
export class DoctorDetailsComponent implements OnInit {
  doctor: Doctor;

  constructor(private route: ActivatedRoute, private doctorService: DoctorService) { }

  ngOnInit() {
    const doctorId = this.route.snapshot.params['id'];
    this.getDoctorDetails(doctorId);
  }

  getDoctorDetails(id: number) {
    this.doctorService.getDoctorById(id).subscribe(
      doctor => this.doctor = doctor,
      error => console.log(error)
    );
  }
}
