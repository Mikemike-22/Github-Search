
import { Component, OnInit } from '@angular/core';
import { ProfileRequestService } from '../github/profile-request.service';
import { User } from '../user';
import { Repository } from '../repository';



@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  providers:[ProfileRequestService],
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  user:User;
  repo:Repository[];
  public username:string;

  constructor(private profService:ProfileRequestService) { }

  findUser(){
    this.profService.updateProfile(this.username);
    this.profService.getInfo();
    this.profService.getRepoInfo();
  }

  ngOnInit() {
    this.profService.getInfo();
    this.profService.getRepoInfo();
    this.user=this.profService.user
    this.repo=this.profService.repos
  }

}
