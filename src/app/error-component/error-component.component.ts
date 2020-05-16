import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-error-component',
  templateUrl: './error-component.component.html',
  styleUrls: ['./error-component.component.css']
})
export class ErrorComponent implements OnInit {
  @ViewChild('modalpopup') buttonclick: ElementRef;
@Input() errorMessage:string;
  constructor(private router:Router) { 
    
  }

  ngOnInit(): void {
   // your other code
   setTimeout(() => {
    this.buttonclick.nativeElement.click();
    }, 200);
  }

}
