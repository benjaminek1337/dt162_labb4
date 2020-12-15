import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Course } from 'src/app/models/Course';

@Component({
  selector: 'app-course-filter',
  templateUrl: './course-filter.component.html',
  styleUrls: ['./course-filter.component.css']
})
export class CourseFilterComponent implements OnInit {

  constructor() { }
  @Output() filterCourses: EventEmitter<string> = new EventEmitter();

  ngOnInit(): void {
  }

  filter(input:any){
    let searchString:string = input.target.value;
    this.filterCourses.emit(searchString);
  }

}
