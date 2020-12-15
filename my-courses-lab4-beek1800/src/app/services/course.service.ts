import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http"
import { MyCourse } from "../models/MyCourse"
import { NgForm } from "@angular/forms"
import { Observable } from 'rxjs';
import { Subject } from '../models/Subject';

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  constructor(private http:HttpClient) { }

  url: string = "https://my-courses-beek1800.herokuapp.com/api";

  getCourses():Observable<any[]>{
    return this.http.get<any[]>(this.url + "/courses")
  }

  getCourseByCourseCode(courseCode:string):Observable<any>{
    return this.http.get<any>(this.url + "/courses/" + courseCode);
  }

  getMyCourses():Observable<any[]>{
    return this.http.get<any[]>(this.url + "/my/courses");
  }

  getMyCourseByCourseCode(courseCode:string):Observable<any>{
    return this.http.get<any>(this.url + "/my/courses/" + courseCode);
  }

  getSubjectBySubjectCode(subjectCode:string):Observable<Subject>{
    return this.http.get<Subject>(this.url + "/subjects/" + subjectCode);
  }

  postMyCourse(form:NgForm){
    // const data = {
    //   courseCode: course.courseCode,
    //   done: course.completed
    // }
    return this.http.post(this.url + "/my/courses/add", form, {responseType: "text"});
  }

  updateMyCourse(courseCode:string, completed:boolean){
    return this.http.put(this.url + "/my/courses/" + courseCode, { done: completed }, {responseType: "text"});
  }

  deleteMyCourse(courseCode:string){
    return this.http.delete(this.url + "/my/courses/" + courseCode, {responseType: "text"});
  }


}
