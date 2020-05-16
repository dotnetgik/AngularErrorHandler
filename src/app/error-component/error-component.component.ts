import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { error } from 'protractor';

@Component({
  selector: 'app-error-component',
  templateUrl: './error-component.component.html',
  styleUrls: ['./error-component.component.css']
})
export class ErrorComponent implements OnInit {
 showError:boolean
  error:any;

  constructor(private router:Router) { 
    
  }

  ngOnInit(): void {
    debugger;
    this.error=window.history.state.data.error;
    this.showError=!this.error;
    console.log(window.history.state);
  }

}
