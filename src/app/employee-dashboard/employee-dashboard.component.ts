import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddUserComponent } from '../add-user/add-user.component';
import { ApiService } from '../shared/api.service';
import { EmployeeModel } from '../add-user/employee-dashboard.model';
import { FormGroup } from '@angular/forms';

export interface User {
  fullname: string;
  id: number;
  email: string;
  mobile: string;
  job: string;
  department: string;
  actions: string;
}

const ELEMENT_DATA: User[] = [];

@Component({
  selector: 'app-employee-dashboard',
  templateUrl: './employee-dashboard.component.html',
  styleUrls: ['./employee-dashboard.component.scss']
})

export class EmployeeDashboardComponent implements OnInit {
  formValue !: FormGroup;
  displayedColumns: string[] = ['id', 'fullname', 'email', 'mobile', 'job', 'department', 'actions'];
  dataSource = ELEMENT_DATA;

  employeeModelObject: EmployeeModel = new EmployeeModel();
  employeeData !: any;

  constructor(
    public dialog: MatDialog, 
    private api: ApiService,
  ) {}

  ngOnInit(): void {
    this.getAllEmployee();
  }

  openDialog() {
    const dialogRef = this.dialog.open(AddUserComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  getAllEmployee(){
    this.api.getEmployee(this.api).subscribe( res => {
      this.employeeData = res;
      this.getAllEmployee();
    })
  }

  deleteEmployee(element: any){
    this.api.deleteEmployee(element.id).subscribe( res => {
      alert("Employee Deleted");
      this.getAllEmployee();
    })
  }

  onEdit(element: any){
    this.formValue.controls['fullname'].setValue(element.fullname);
    this.formValue.controls['email'].setValue(element.email);
    this.formValue.controls['mobile'].setValue(element.mobile);
    this.formValue.controls['job'].setValue(element.job);
    this.formValue.controls['department'].setValue(element.department);
  }

}
