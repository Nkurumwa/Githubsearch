import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Repository } from '../repository-class/repository';
import { Repos } from '../repos'
import { ReposService } from '../repos-http/repos.service';
// import { ForksPipe } from '../forks.pipe'

@Component({
  selector: 'app-repository',
  templateUrl: './repository.component.html',
  providers: [ReposService],
  styleUrls: ['./repository.component.css']
})
export class RepositoryComponent implements OnInit {

  repo: Repository;
  userName: string;
  repoName: string;
  repos: Repos;

  constructor(private http:HttpClient, private repoRequestService: ReposService){
    this.repo = new Repository("","","","","");
  }
  
    repoRequest(){

      interface ApiResponse{
        html_url: any;
        name: string;
        description: any;
        forks: number;
        license: any;
      }
      let promise = new Promise((resolve,reject)=>{
        this.http.get<ApiResponse>("https://api.github.com/repos/" + this.userName + "/" + this.repoName + "?access_token=" + environment.access_token).toPromise().then(response=>{

          this.repo.link = response.html_url
          this.repo.name = response.name
          this.repo.description
           = response.description
          this.repo.forks = response.forks
          this.repo.license = response.license
          
        resolve();

      },
      error=>{

        this.repo.link = ""
        this.repo.name = ""
        this.repo.description
         = ""
        this.repo.forks = ""
        this.repo.license = ""
        
        reject(error);


        })
      })

      return promise

    }

    repoLookup(){
      this.repoRequestService.repoLookup(this.userName);
      this.repoRequestService.getRepoData();
      this.repos = this.repoRequestService.repos;
    }

  ngOnInit() {
  }

}