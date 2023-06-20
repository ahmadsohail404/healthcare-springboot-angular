import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Patient } from '../models/patient.model';
import { PatientService } from '../services/patient.service';

@Component({
  selector: 'app-patient-form',
  templateUrl: './patient-form.component.html',
  styleUrls: ['./patient-form.component.css']
})
export class PatientFormComponent implements OnInit {
  patientForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private patientService: PatientService) { }

  ngOnInit() {
    this.patientForm = this.formBuilder.group({
      name: ['', Validators.required],
      age: ['', Validators.required],
      // Add more form fields as needed
    });
  }

  onSubmit() {
    if (this.patientForm.invalid) {
      return;
    }

    const patient: Patient = this.patientForm.value;
    this.patientService.createPatient(patient).subscribe(
      response => {
        console.log('Patient created successfully');
        // Reset form or perform any additional actions
      },
      error => console.log(error)
    );
  }
}
