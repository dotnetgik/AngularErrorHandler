import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AngularErrorHandling';

  ngOnInit()
  {
    throw new RangeError("Error Occured in App Component");
  }

}
