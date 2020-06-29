import { Component, OnInit } from '@angular/core';
import { UserService } from '../shared/user.service';
import { HttpClient } from '@angular/common/http';
import * as $ from 'jquery';
import { Router } from "@angular/router";

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {
  userDetails;
  constructor(private userService: UserService, private router: Router,private http: HttpClient) { }

  // ngOnInit() {
  //   this.userService.getUserProfile().subscribe(
  //     res => {
  //       this.userDetails = res['user'];
  //     },
  //     err => { 
  //       console.log(err);
        
  //     }
  //   );
  // }

  ngOnInit(): void {
    $(document).ready(function () {
      $('#sidebarCollapse').on('click', function () {
          $('#sidebar').toggleClass('active');
      });
  });
  {
    this.userService.getUserProfile().subscribe(
      res => {
        this.userDetails = res['user'];
      },
      err => { 
        console.log(err);
        
      }
    );
  }
  }
  
  
  onLogout(){
    this.userService.deleteToken();
    this.router.navigate(['/login']);
  }

}






