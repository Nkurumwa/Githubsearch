import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  userName: string;
  userRequest() {
    throw new Error("Method not implemented.");
  }
  user: import("/home/moringa/Desktop/moringa-school-projects/Githubsearch/Github/src/app/user-class/user").User;
  userLookup(userName: string) {
    throw new Error("Method not implemented.");
  }

  constructor() { }
}
