import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Footer, Header } from '../components/index';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app.routing.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule,
    ReactiveFormsModule,
    Footer,
    Header,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
