import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EmployeeDataService } from '../dataservice/employee.data.service';

@Component({
  selector: 'app-emp',
  templateUrl: './emp.component.html',
  styleUrls: ['./emp.component.css']
})
export class EmpComponent implements OnInit {

  constructor(private router:Router,private empdataService:EmployeeDataService) { }

  ngOnInit(): void {
    this.empdataService.getEmployee().subscribe(res=>{
      console.log(res);
    });
  }

}
