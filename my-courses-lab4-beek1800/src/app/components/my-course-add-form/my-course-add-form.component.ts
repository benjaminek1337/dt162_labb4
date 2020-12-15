import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { CourseService } from 'src/app/services/course.service';

@Component({
  selector: 'app-my-course-add-form',
  templateUrl: './my-course-add-form.component.html',
  styleUrls: ['./my-course-add-form.component.css']
})
export class MyCourseAddFormComponent implements OnInit {

  constructor(private courseService:CourseService) { }

  @Output() success: EventEmitter<void> = new EventEmitter();

  ngOnInit(): void {
  }

  addCourse(form:NgForm){

    if(!form.value.courseCode)
      return alert("Du kan väl iallafall skriva tecken i rutan. Så lat är du inte.")
    if(!form.value.done)
      form.value.done = false;
    this.courseService.postMyCourse(form.value).subscribe(r => {
      console.log("Success");
      this.success.emit();
    }, err => {
      console.log(err);
      if(err.status == 403 && err.status == 404)
        return alert("Nu matade du in nån kurskod som inte finns,eller en kurs jag redan läst")
    })
  }

}
