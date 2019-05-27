import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NestedFormsComponent } from './nested-forms/nested-forms.component';

const routes: Routes = [
  { path: '', component: NestedFormsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
