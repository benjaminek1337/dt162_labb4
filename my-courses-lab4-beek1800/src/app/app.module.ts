import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from "@angular/forms";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoursesComponent } from './components/courses/courses.component';
import { CourseDetailComponent } from './components/course-detail/course-detail.component';
import { MyCoursesComponent } from './components/my-courses/my-courses.component';
import { MyCourseDetailComponent } from './components/my-course-detail/my-course-detail.component';
import { SubjectDetailComponent } from './components/subject-detail/subject-detail.component';
import { AdminComponent } from './components/admin/admin.component';
import { CourseListComponent } from './components/course-list/course-list.component';
import { CourseFilterComponent } from './components/course-filter/course-filter.component';
import { MyCoursesListComponent } from './components/my-courses-list/my-courses-list.component';
import { MyCourseAddFormComponent } from './components/my-course-add-form/my-course-add-form.component';

@NgModule({
  declarations: [
    AppComponent,
    CoursesComponent,
    CourseDetailComponent,
    MyCoursesComponent,
    MyCourseDetailComponent,
    SubjectDetailComponent,
    AdminComponent,
    CourseListComponent,
    CourseFilterComponent,
    MyCoursesListComponent,
    MyCourseAddFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
