import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CourseService } from 'src/app/services/course.service';
import { Subject } from "../../models/Subject"

@Component({
  selector: 'app-subject-detail',
  templateUrl: './subject-detail.component.html',
  styleUrls: ['./subject-detail.component.css']
})
export class SubjectDetailComponent implements OnInit {

  constructor(private activatedRoute:ActivatedRoute, private courseService:CourseService) { }
  subject:Subject | undefined;
  foundSubject:boolean | undefined;

  ngOnInit(): void {
    let id = this.activatedRoute.snapshot.paramMap.get("id");
    if(id){
      this.courseService.getSubjectBySubjectCode(id).subscribe(r => {
        this.foundSubject = true;
        this.subject = r;
      }, err => {
        console.log(err);
        this.foundSubject= false;
      })
    }
  }

}
