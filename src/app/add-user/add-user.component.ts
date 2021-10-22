import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss']
})
export class AddUserComponent implements OnInit {

  formValue !: FormGroup;
  constructor(
    private formBuilder:FormBuilder
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
}