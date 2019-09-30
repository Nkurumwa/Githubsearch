import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
// import { NgProgressModule } from '@ngx-progressbar/core';
import { RouterModule, Routes } from '@angular/router'
// import { NgProgressHttpModule } from '@ngx-progressbar/http';
import { UserService } from './user-http/user.service';
import { ReposService } from './repos-http/repos.service';

import { RoutingModule} from './routing/routing.module'
import { AppComponent } from './app.component';
import { DisplayComponent } from './display/display.component';
import { RepositoryComponent } from './repository/repository.component';
import { DateCountPipe } from './date-count.pipe';
import { HighlightDirective } from './highlight.directive';
// import { ForksPipe } from './forks.pipe';

@NgModule({
  declarations: [
    AppComponent,
    DisplayComponent,
    RepositoryComponent,
    DateCountPipe,
    HighlightDirective,
    // ForksPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RoutingModule,
    HttpClientModule,
    // NgProgressModule,
    // NgProgressHttpModule,
    ReactiveFormsModule
  ],
  providers: [UserService, ReposService],
  bootstrap: [AppComponent]
})
export class AppModule { }