import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {User} from '../user';
import {environment} from 'src/environment/environment';
import {Repository} from '../repository';


@Injectable({
  providedIn: 'root'
})
export class ProfileRequestService {

  user:User;
repos:Repository[];
public username:string;
public newUsername:string;

constructor(private http:HttpClient) {

  this.user = new User("","","",0,0,"","","");
  this.repos= [];
  this.username = "Mikemike-22";
  this.newUsername='';

 }

 getInfo(){

  interface UserInfo{
    login:string;
    avatar_url:string;
    public_repos:string;
    followers:number;
    following:number;
    html_url:string;
    created_at:string;
    bio:string;

}
