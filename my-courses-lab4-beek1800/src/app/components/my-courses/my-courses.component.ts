import { Component, OnInit } from '@angular/core';
import { MyCourse } from 'src/app/models/MyCourse';
import { CourseService } from 'src/app/services/course.service';

@Component({
  selector: 'app-my-courses',
  templateUrl: './my-courses.component.html',
  styleUrls: ['./my-courses.component.css']
})
export class MyCoursesComponent implements OnInit {

  constructor(private courseService:CourseService) { 

  }

  courses:MyCourse[] = [];
  filteredCourses:MyCourse[] = [];

  ngOnInit(): void {
    this.courseService.getMyCourses().subscribe(c => {
      for (let i = 0; i < c.length; i++) {
        const course = c[i];
        let myCourse:MyCourse = {
          courseCode: course.courseCode,
          completed: course.completed,
          name: course.courses.name,
          subjectCode: course.courses.subjectCode,
          level: course.courses.level,
          points: course.courses.points,
          institutionCode: course.courses.institutionCode,
          subject: course.subject.subject
        };
        
        this.courses.push(myCourse);
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
