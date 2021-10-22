import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddUserComponent } from '../add-user/add-user.component';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
  actions: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H', actions: ''},
 
];

@Component({
  selector: 'app-employee-dashboard',
  templateUrl: './employee-dashboard.component.html',
  styleUrls: ['./employee-dashboard.component.scss']
})

export class EmployeeDashboardComponent implements OnInit {
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol', 'actions'];
  dataSource = ELEMENT_DATA;

  constructor(
    public dialog: MatDialog, 
  ) {}

  ngOnInit(): void {
  }

  openDialog() {
    const dialogRef = this.dialog.open(AddUserComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  

}
