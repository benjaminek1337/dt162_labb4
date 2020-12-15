import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MyCourse } from 'src/app/models/MyCourse';
import { CourseService } from 'src/app/services/course.service';

@Component({
  selector: 'app-my-course-detail',
  templateUrl: './my-course-detail.component.html',
  styleUrls: ['./my-course-detail.component.css']
})
export class MyCourseDetailComponent implements OnInit {

  constructor(private activatedRoute:ActivatedRoute, private courseService:CourseService) { }
  myCourse:MyCourse | undefined;
  foundCourse:boolean | undefined;

  ngOnInit(): void {
    let id = this.activatedRoute.snapshot.paramMap.get("id");
    if(id){
      this.courseService.getMyCourseByCourseCode(id).subscribe(c => {
        const course = c;
        this.foundCourse = true;
        this.myCourse = {
          courseCode: course[0].courseCode,
          completed: course[0].completed,
          subject: course[0].subject.subject,
          name: course[0].courses.name,
          subjectCode: course[0].courses.subjectCode,
          level: course[0].courses.level,
          points: course[0].courses.points,
          institutionCode: course[0].courses.institutionCode
        }
      
      }, error => {
        console.log(error);
        this.foundCourse = false;
      });
    }
  }

  getCompletedStatus():string{
    if(this.myCourse?.completed)
      return "Ja";
    return "Nej";
  }

}
