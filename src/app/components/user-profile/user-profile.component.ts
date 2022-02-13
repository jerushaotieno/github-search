import { Component, OnInit } from '@angular/core';
import { UserProfileService  } from '../../services/user-profile.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  constructor(private UserProfileService: UserProfileService) { 
    this.UserProfileService.getUserProfileInformation().subscribe(userProfile => {
      console.log(userProfile);
    });
  }

  ngOnInit(): void {
  }

}
