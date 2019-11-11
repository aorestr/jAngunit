import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { TestsuitePreviewComponent } from './testsuite-preview/testsuite-preview.component';
import { TestsuitesListComponent } from './testsuites-list/testsuites-list.component';
import { TestsuiteComponent } from './testsuite/testsuite.component';

@NgModule({  
  declarations: [
      AppComponent,
      TestsuitePreviewComponent,
      TestsuitesListComponent,
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
