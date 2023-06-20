import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Hospital } from '../models/hospital.model';
import { HospitalService } from '../services/hospital.service';

@Component({
  selector: 'app-hospital-form',
  templateUrl: './hospital-form.component.html',
  styleUrls: ['./hospital-form.component.css']
})
export class HospitalFormComponent implements OnInit {
  hospitalForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private hospitalService: HospitalService) { }

  ngOnInit() {
    this.hospitalForm = this.formBuilder.group({
      name: ['', Validators.required],
      address: ['', Validators.required],
      // Add more form fields as needed
    });
  }

  onSubmit() {
    if (this.hospitalForm.invalid) {
      return;
    }

    const hospital: Hospital = this.hospitalForm.value;
    this.hospitalService.createHospital(hospital).subscribe(
      response => {
        console.log('Hospital created successfully');
        // Reset form or perform any additional actions
      },
      error => console.log(error)
    );
  }
}
