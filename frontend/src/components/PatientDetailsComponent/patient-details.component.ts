import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Patient } from '../models/patient.model';
import { PatientService } from '../services/patient.service';

@Component({
  selector: 'app-patient-details',
  templateUrl: './patient-details.component.html',
  styleUrls: ['./patient-details.component.css']
})
export class PatientDetailsComponent implements OnInit {
  patient: Patient;

  constructor(private route: ActivatedRoute, private patientService: PatientService) { }

  ngOnInit() {
    const patientId = this.route.snapshot.params['id'];
    this.getPatientDetails(patientId);
  }

  getPatientDetails(id: number) {
    this.patientService.getPatientById(id).subscribe(
      patient => this.patient = patient,
      error => console.log(error)
    );
  }
}
