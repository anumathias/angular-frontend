import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  isLoggedIn=false;
  
  constructor(private route: ActivatedRoute,
    private router: Router,
    private loginService: LoginService) { }

  ngOnInit() {this.isLoggedIn = this.loginService.isUserLoggedIn();
    console.log('menu ->' + this.isLoggedIn);
  }

  
  
}
