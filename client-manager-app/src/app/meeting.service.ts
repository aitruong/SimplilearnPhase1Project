import { Injectable } from '@angular/core';
import { Meetings } from './models/meetings.model';

@Injectable({
  providedIn: 'root'
})
export class MeetingService {
  meetings:Meetings[]=[]
  constructor() { 
    this.meetings=[
      {
        topic:"Garthering Client Requirements",
        numberOfPeople: 4,
        startDateAndTime: "03/12/2023"
      },

      {
        topic:"Preparing for Design and Developing",
        numberOfPeople: 4,
        startDateAndTime: "05/01/2023"
      },

      {
        topic:"Starting Spring 1",
        numberOfPeople: 4,
        startDateAndTime: "06/12/2023"
      },

      {
        topic:"Preparing for testing",
        numberOfPeople: 4,
        startDateAndTime: "08/12/2023"
      },

    ]
  }

  getMeetings(){
    return this.meetings;
  }

  addMeeting(meeting:Meetings){
    this.meetings.push(meeting);
  }
}
