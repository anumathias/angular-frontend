import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Login } from '../login';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  // username: string;
  // password : string;
  errorMessage1 = 'Invalid User Name';
  errorMessage2 = 'Invalid Password';
  successMessage: string;
  invalidLogin = false;
  loginSuccess = false;
  user: Login = new Login();

  constructor(private route: ActivatedRoute,
    private loginService: LoginService,
    private router: Router) { }

  // eslint-disable-next-line @typescript-eslint/no-empty-function
  ngOnInit() {
  }

  // onSubmit(){
  //   this.router.navigate(['home']);
  // }


  // handleLogin() {
  //   this.loginService.loginService(this.username, this.password).subscribe((result)=> {
  //     this.invalidLogin = false;
  //     this.loginSuccess = true;
  //     this.successMessage = 'Login Successful.';
  //     this.router.navigate(['/home']);
  //   }, () => {
  //     this.invalidLogin = true;
  //     this.loginSuccess = false;
  //   });      
  // }

  handleLogin() {
    console.log(this.user);
    this.loginService.auth(this.user).subscribe(

      data=>{

        console.log(data);

        if(data!=null){

          this.router.navigate(['home']);

           this.invalidLogin = false;

        }

        else{

          this.invalidLogin = true;

        }

      }

    )

  }
}
