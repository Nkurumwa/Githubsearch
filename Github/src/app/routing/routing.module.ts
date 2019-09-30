import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { DisplayComponent } from '../display/display.component'
import { RepositoryComponent } from '../repository/repository.component'

const routes: Routes = [
  {path:"display",component:DisplayComponent},
  {path:"repo",component:RepositoryComponent}
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports:[RouterModule],
  // declarations: []
})
export class RoutingModule { }