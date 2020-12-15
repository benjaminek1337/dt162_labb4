import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './components/admin/admin.component';
import { CourseDetailComponent } from './components/course-detail/course-detail.component';
import { CoursesComponent } from "./components/courses/courses.component"
import { MyCourseDetailComponent } from './components/my-course-detail/my-course-detail.component';
import { MyCoursesComponent } from './components/my-courses/my-courses.component';
import { SubjectDetailComponent } from './components/subject-detail/subject-detail.component';

const routes: Routes = [
  {path:"", component: CoursesComponent},
  {path:"courses", component: CoursesComponent},
  {path:"courses/:id", component: CourseDetailComponent},
  {path:"my-courses", component: MyCoursesComponent},
  {path:"my-courses/:id", component: MyCourseDetailComponent},
  {path:"subjects/:id", component: SubjectDetailComponent},
  {path:"admin", component: AdminComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
