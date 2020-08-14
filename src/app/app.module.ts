import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";

import { FullCalendarModule } from "@fullcalendar/angular";

import dayGridPlugin from "@fullcalendar/daygrid";


FullCalendarModule.registerPlugins([
  dayGridPlugin,
]);

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, FullCalendarModule],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule {}