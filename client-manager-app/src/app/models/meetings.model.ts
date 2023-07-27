export class Meetings{
    topic:string;
    numberOfPeople: number;
    startDateAndTime: string;

    constructor(topic:string,numberOfPeople:number,startDateAndTime:string){
        this.topic=topic;
        this.numberOfPeople=numberOfPeople;
        this.startDateAndTime=startDateAndTime;
    }

}