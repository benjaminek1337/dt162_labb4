import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Course } from 'src/app/models/Course';
import { CourseService } from 'src/app/services/course.service';

@Component({
  selector: 'app-course-detail',
  templateUrl: './course-detail.component.html',
  styleUrls: ['./course-detail.component.css']
})
export class CourseDetailComponent implements OnInit {

  constructor(private activatedRoute:ActivatedRoute, private courseService:CourseService) { }
  course:Course | undefined;
  foundCourse:boolean | undefined;

  ngOnInit(): void {
    let id = this.activatedRoute.snapshot.paramMap.get("id");
    if(id){
      this.courseService.getCourseByCourseCode(id).subscribe(c => {
        const course = c;
        this.foundCourse = true;
        this.course = {
          courseCode: course[0].courseCode,
          subject: course[0].subject.subject,
          name: course[0].name,
          subjectCode: course[0].subjectCode,
          level: course[0].level,
          points: course[0].points,
          institutionCode: course[0].institutionCode
        }
      }, error => {
        console.log(error);
        this.foundCourse = false;
      });
    }
  }

}
