import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TestsuitesListComponent } from "./testsuites-list/testsuites-list.component";
import { TestsuiteComponent } from "./testsuite/testsuite.component";

const routes: Routes = [
  { path: 'testsuites', component: TestsuitesListComponent },
  { path: ':package', component: TestsuiteComponent },
  { path: '', redirectTo: 'testsuites', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
