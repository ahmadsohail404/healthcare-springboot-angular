import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Doctor } from '../models/doctor.model';
import { DoctorService } from '../services/doctor.service';

@Component({
  selector: 'app-doctor-form',
  templateUrl: './doctor-form.component.html',
  styleUrls: ['./doctor-form.component.css']
})
export class DoctorFormComponent implements OnInit {
  doctorForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private doctorService: DoctorService) { }

  ngOnInit() {
    this.doctorForm = this.formBuilder.group({
      name: ['', Validators.required],
      specialization: ['', Validators.required],
      // Add more form fields as needed
    });
  }

  onSubmit() {
    if (this.doctorForm.invalid) {
      return;
    }

    const doctor: Doctor = this.doctorForm.value;
    this.doctorService.createDoctor(doctor).subscribe(
      response => {
        console.log('Doctor created successfully');
        // Reset form or perform any additional actions
      },
      error => console.log(error)
    );
  }
}
