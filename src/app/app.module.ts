import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SigninComponent } from './signin/signin.component';
import { WritingComponent } from './writing/writing.component';
import { HomeMessagesComponent } from './home-messages/home-messages.component';
import { ConectedusersComponent } from './conectedusers/conectedusers.component';
import { FormsModule } from '@angular/forms';
import { SocketService } from '../services/socket.service';

@NgModule({
  declarations: [
    AppComponent,
    SigninComponent,
    WritingComponent,
    HomeMessagesComponent,
    ConectedusersComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    provideClientHydration(),
    SocketService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
