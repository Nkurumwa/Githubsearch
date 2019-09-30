import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { User } from '../user-class/user';
import { Repository } from '../repository-class/repository';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  user: User;
  userName: string;
  repos: Repository;
  userLookup: any;

  constructor(private http:HttpClient){
    // this.user = new User("","","","","", "", new Date());
  }
  

    userRequest(){

      interface ApiResponse{
        login: string;
        name: string;
        // bio: any;
        public_repo: number;
        followers: number;
        following: number;
        avatar_url: string;
        html_url: string;
      }
      let promise = new Promise((resolve,reject)=>{
        this.http.get<ApiResponse>(environment.apiUrl + this.userName + "?access_token=" + environment.access_token).toPromise().then(response=>{

          this.user.avatar = response.avatar_url
          this.user.username = response.login
          this.user.name = response.name
          // this.user.bio = response.bio
          this.user.repositories = response.public_repo
          this.user.followers = response.followers
          this.user.following = response.following
          this.user.link = response.html_url
          

        resolve();

      },
      error=>{

          this.user.avatar = "https://avatars1.githubusercontent.com/u/47349274?v=4"
          this.user.username = "Nkurumwa"
          this.user.name = "Hussein Fuaad"
          // this.user.bio = "Full-Stack Developer \r\nAndroid Developer\r\nCertified Chef\r\nRelationship Officer"
          this.user.repositories = 22
          this.user.link = "https://github.com/fuaad001"

        reject(error);


        })
      })

      return promise

    }

    // userLookup(userName: string){
    //   this.userName = userName;
    // }
    

}