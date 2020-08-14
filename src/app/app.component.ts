import { Component, VERSION } from "@angular/core";
import { CalendarOptions } from "@fullcalendar/angular";
import { EventInput } from "@fullcalendar/angular";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  data: any[] = [];
  days: EventInput[] = [];

  ngOnInit() {
    this.data = this._demoData();
  }

  calendarOptions: CalendarOptions = {
    headerToolbar: {
      left: "prev,next today",
      center: "title",
      right: "dayGridMonth,timeGridWeek,timeGridDay,listWeek"
    },
    initialView: "dayGridMonth",
    //initialEvents: this.days,
    events: this.days,
    weekends: true,
    editable: true,
    selectable: true,
    selectMirror: true,
    dayMaxEvents: true
  };

  select(item: any) {
    console.log("click!");
    console.log(item.id);
    this.days = this._getDays(item.id);
    this.calendarOptions.events = this.days;
  }

  private _getDays(id: number) {
    if (id === 1) {
      return [
        { id: 1, title: "Wikizz", start: "2020-08-18" },
        { id: 6, title: "Quimba", start: "2020-08-01T02:32:49" },
        { id: 10, title: "Bubblebox", start: "2020-08-16T15:54:55" }
      ];
    }
    if (id === 2) {
      return [
        { id: 2, title: "Zoozzy", start: "2020-08-31T13:20:51" },
        { id: 3, title: "Brightbean", start: "2020-08-09T11:46:02" },
        { id: 4, title: "Babbleset", start: "2020-08-18" },
        { id: 5, title: "Vipe", start: "2020-08-10T19:13:50" }
      ];
    }
    if (id === 3) {
      return [
        { id: 7, title: "Twimbo", start: "2020-08-29T18:02:44" },
        { id: 8, title: "Snaptags", start: "2020-08-04T20:00:19" },
        { id: 9, title: "Topicware", start: "2020-08-06" }
      ];
    }
  }

  private _demoData() {
    return [
      {
        id: 1,
        name: "Item 1"
      },
      {
        id: 2,
        name: "Item 2"
      },
      {
        id: 3,
        name: "Item 3"
      }
    ];
  }
}
