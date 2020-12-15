import { Component, Input, OnInit } from '@angular/core';
import { MyCourse } from 'src/app/models/MyCourse';

@Component({
  selector: 'app-my-courses-list',
  templateUrl: './my-courses-list.component.html',
  styleUrls: ['./my-courses-list.component.css']
})
export class MyCoursesListComponent implements OnInit {

  constructor() { }
  @Input() courses:MyCourse[] = [];
  ngOnInit(): void {
    
  }

  getCompletedStatus(course:MyCourse):string{
    if (course.completed){
      return "Ja";
    }
    return "Nej";
  }
}
