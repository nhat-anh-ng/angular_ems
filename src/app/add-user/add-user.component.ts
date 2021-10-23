import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { EmployeeModel } from './employee-dashboard.model';
import { ApiService } from '../shared/api.service';


@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss']
})
export class AddUserComponent implements OnInit {

  formValue !: FormGroup;
  employeeModelObject: EmployeeModel = new EmployeeModel();

  constructor(
    private formBuilder:FormBuilder,
    private api: ApiService,
  ) { }

  ngOnInit(): void {
    this.formValue = this.formBuilder.group({
      fullName: [''],
      email: [''],
      mobile: [''],
      job: [''],
      department: ['']
    })
  }

  postEmployeeDetails(){
    this.employeeModelObject.fullName = this.formValue.value.fullName;
    this.employeeModelObject.email = this.formValue.value.email;
    this.employeeModelObject.mobile = this.formValue.value.mobile;
    this.employeeModelObject.job = this.formValue.value.job;
    this.employeeModelObject.department= this.formValue.value.department;

    this.api.postEmployee(this.employeeModelObject)
    .subscribe(res => {
      console.log(res);
      alert("Employee Added Succesfully")
      this.formValue.reset();
    }, err => {
      alert("Unable to Add New User")
    })
  }

}