import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MentorComponent } from './mentor/mentor.component';
import { HttpClientModule } from "@angular/common/http"; 
import { MockMentorService } from './service/mentor.svc.mock';
import { MentorPipe } from './pipe/mentor.pipe';
import { FormsModule } from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    MentorComponent,
    MentorPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [MockMentorService],
  bootstrap: [AppComponent]
})
export class AppModule { }
