import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn:'root'
})
export class UserProfileService {

  private userName:string;
  // private userRepositories!:string
  private clientid = 'ac67720cb495ef00d4aa';
  private clientsecret = '6ae1c957c2364962dc5e7986cca4ca652d81921d';

  constructor(private http:HttpClient) { 
  	console.log("this service is ready!");
  	this.userName = 'jerushaotieno';
  }



  getUserProfileInformation(){
    interface apiFeedback{
      login:string
    }
    return this.http.get("https://api.github.com/users/" + this.userName  + "?client_id=" + this.clientid + "&client_secret=" + this.clientsecret);
  }

  getUserProfileRepositories(){
    return this.http.get("https://api.github.com/users/" + this.userName  + "/repos?client_id=" + this.clientid + "&client_secret=" + this.clientsecret);
  }

  updateUserProfile(userName:string){
    this.userName = userName;
  }
}