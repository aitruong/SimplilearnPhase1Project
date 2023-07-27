import { MeetingService } from './../meeting.service';
import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Meetings } from '../models/meetings.model';

@Component({
  selector: 'app-create-meeting',
  templateUrl: './create-meeting.component.html',
  styleUrls: ['./create-meeting.component.scss']
})
export class CreateMeetingComponent {
  constructor(private meetingService:MeetingService){

  }
  meetings= new FormGroup({
    topic:new FormControl(),
    number:new FormControl(),
    startDate:new FormControl()
  })

  onSubmit(){
    console.log(this.meetings.value);
    this.meetingService.addMeeting(new Meetings(this.meetings.value.topic,this.meetings.value.number,this.meetings.value.startDate));
  }

}
