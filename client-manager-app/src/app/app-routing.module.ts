import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsersComponent } from './users/users.component';
import { MeetingsComponent } from './meetings/meetings.component';
import { CreateUserComponent } from './create-user/create-user.component';
import { CreateMeetingComponent } from './create-meeting/create-meeting.component';

const routes: Routes = [
  { path: '', component: UsersComponent },
  { path: 'meetings', component: MeetingsComponent },
  { path: 'create-user', component: CreateUserComponent },
  { path: 'create-meeting', component: CreateMeetingComponent }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
