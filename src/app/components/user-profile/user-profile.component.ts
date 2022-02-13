import { Component, OnInit } from '@angular/core';
import { UserProfileService  } from '../../services/user-profile.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {
  userProfile!: any[];

  constructor(private UserProfileService: UserProfileService) { 
    this.UserProfileService.getUserProfileInformation().subscribe((userProfile: any) => {
      console.log(userProfile);
      this.userProfile = userProfile;
    });
  }

  ngOnInit(): void {
  }

}
