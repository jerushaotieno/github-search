import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class UserProfileService {

  private userName:string;
  private accessToken = '';

  constructor(private http:HttpClient) { 
  	console.log("this service is ready!");
  	this.userName = 'jerushaotieno';
  }

  getUserProfileInformation(){
  	return this.http.get("https://api.github.com/users/" + this.userName + "?access_token=" + this.accessToken);
  }


}