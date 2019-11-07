import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { TestsuiteComponent } from './testsuite/testsuite.component';

@NgModule({  
  declarations: [
      AppComponent,
      TestsuiteComponent
  ],  
  imports: [
      BrowserModule, AppRoutingModule, HttpClientModule
  ],  
  providers: [],  
  bootstrap: [
      AppComponent
  ]  
})  
export class AppModule {}  
