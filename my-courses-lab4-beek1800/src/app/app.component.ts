import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Kurser';
  description = 'Följande kurser finns i vårt kursutbud:'
  dataSourceLink = 'change me';
  dataSourceName = 'change me';

  ngOnInit():void{
    this.dataSourceName = "courses";
    this.dataSourceLink = "https://my-courses-beek1800.herokuapp.com/api/courses"
  }

}
