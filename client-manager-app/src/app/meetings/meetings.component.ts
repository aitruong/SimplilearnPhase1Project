import { Component } from '@angular/core';
import { Meetings } from '../models/meetings.model';
import { MeetingService } from '../meeting.service';

@Component({
  selector: 'app-meetings',
  templateUrl: './meetings.component.html',
  styleUrls: ['./meetings.component.scss']
})
export class MeetingsComponent {
  meetings:Meetings[]=[];

  constructor(private meetingService:MeetingService){
    this.meetings=meetingService.getMeetings();
  }
}
