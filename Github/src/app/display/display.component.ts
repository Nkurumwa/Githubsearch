// import { Component, OnInit } from '@angular/core';

// @Component({
//   selector: 'app-display',
//   templateUrl: './display.component.html',
//   styleUrls: ['./display.component.css']
// })
// export class DisplayComponent implements OnInit {

//   constructor() { }

//   ngOnInit() {
//   }

// }
import { Component, OnInit } from '@angular/core';
import { ReposService } from '../repos-http/repos.service';
import { User } from '../user-class/user';
import { UserService } from '../user-http/user.service';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  providers: [ReposService, UserService],
  styleUrls: ['./display.component.css']
})
export class DisplayComponent implements OnInit {

  user: User;
  userName: string;

  constructor( private userRequestService: UserService){
    this.userRequestService.userName = "Nkurumwa";
    this.userRequestService.userRequest();
    this.user = this.userRequestService.user;
  }
  

  userLookup(){
    this.userRequestService.userLookup(this.userName);
    this.userRequestService.userRequest();
    this.user = this.userRequestService.user; 
  }

  ngOnInit() { 
    
   }
}
