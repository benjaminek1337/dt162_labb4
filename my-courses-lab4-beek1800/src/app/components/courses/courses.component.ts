import { Component, Input, OnInit } from '@angular/core';
import { Course } from 'src/app/models/Course';
import { CourseService } from 'src/app/services/course.service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {

  constructor(private courseService:CourseService) { 

  }

  courses:Course[] = [];
  filteredCourses:Course[] = [];

  ngOnInit(): void {
    this.courseService.getCourses().subscribe(c => {
      for (let i = 0; i < c.length; i++) {
        const course = c[i];
        let co:Course = {
          courseCode: course.courseCode,
          name: course.name,
          subjectCode: course.subjectCode,
          level: course.level,
          points: course.points,
          institutionCode: course.institutionCode,
          subject: course.subject.subject
        };
        
        this.courses.push(co);
      }
      this.courses.sort((a, b) => 
        a.courseCode.localeCompare(b.courseCode)
      );
    });
    this.filteredCourses = this.courses;
  }

  getFilteredCourses(event:string){
    this.filteredCourses = this.courses.filter(c => c.courseCode.includes(event.toLocaleUpperCase()));
  }

}
