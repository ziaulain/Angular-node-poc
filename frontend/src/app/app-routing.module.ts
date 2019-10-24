import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserListComponent } from './components/user/user-list/user-list.component';
import { JobListComponent } from './components/job/job-list/job-list.component';


const routes: Routes = [
  { path: 'users', component: UserListComponent },
  { path: 'jobs', component: JobListComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
