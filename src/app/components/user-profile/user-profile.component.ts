import { Component, OnInit } from '@angular/core';
import { UserProfileService  } from '../../services/user-profile.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})

export class UserProfileComponent implements OnInit {
  userProfile: any = {
    name: '',
    login: '',
    company: '',
    bio: '',
    location: '',
    blog: '',
    avatar_url: '',
    hireable: '',
    email: '',
    followers: '',
    following: '',
    public_gists: '',
    public_repos: ''
  };
  userProfileRepositories: any
  userName!: string;

  constructor(private userProfileService: UserProfileService) { 
    this.userProfileService.getUserProfileInformation().subscribe(userProfile => {
      this.userProfile = userProfile
    })
    this.userProfileService.getUserProfileRepositories().subscribe(userProfileRepositories => {
      this.userProfileRepositories = userProfileRepositories
  })
}

  findUserProfile(){
    this.userProfileService.updateUserProfile(this.userName);
    this.userProfileService.getUserProfileInformation().subscribe((userProfile => {
      console.log(userProfile);
      this.userProfile = userProfile;
    }));

    this.userProfileService.getUserProfileRepositories().subscribe((userProfileRepositories => {
      console.log(userProfileRepositories);
      this.userProfileRepositories = userProfileRepositories;
    }))  	
  }

  ngOnInit(): void {

  }

}
