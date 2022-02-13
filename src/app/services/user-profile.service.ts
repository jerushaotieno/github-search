import { Injectable } from '@angular/core';
import { Http,Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable({
  providedIn: 'root'
})
export class UserProfileService {

  private userName:string;
  private accessToken = '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';

  constructor(private http:Http) { 
    console.log("service is now ready");
    this.userName = 'jerushaotieno';
  }
}
