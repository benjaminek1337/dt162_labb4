import { Component, OnInit } from '@angular/core';
import { MyCourse } from 'src/app/models/MyCourse';
import { CourseService } from 'src/app/services/course.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  constructor(private courseService:CourseService) { }

  courses:MyCourse[] = [];
  ngOnInit(): void {
    this.getMyCourses();
  }

  getMyCourses(){
    this.courses = [];
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
  }

  setCompletedStatus(course:MyCourse){
    course.completed = !course.completed;
    this.courseService.updateMyCourse(course.courseCode, course.completed).subscribe(r => {
      console.log(r);
    }, err => {
      console.log(err);
    });
  }

  deleteCourse(courseCode:string){
    this.courseService.deleteMyCourse(courseCode).subscribe(r => {
      this.getMyCourses();
      console.log(r);
    }, err => {
      console.log(err);
    })
  }

}
