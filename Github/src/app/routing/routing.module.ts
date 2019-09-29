// import { NgModule } from '@angular/core';
// import { CommonModule } from '@angular/common';

// import { RoutingRoutingModule } from './routing-routing.module';


// @NgModule({
//   declarations: [],
//   imports: [
//     CommonModule,
//     RoutingRoutingModule
//   ]
// })
// export class RoutingModule { }
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { ShowComponent } from '../show/show.component'
import { RepositoryComponent } from '../repository/repository.component'

const routes: Routes = [
  {path:"show",component:ShowComponent},
  {path:"repo",component:RepositoryComponent}
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports:[RouterModule],
})
export class RoutingModule { }