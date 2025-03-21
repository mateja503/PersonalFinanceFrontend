import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { LoginService } from '../../../services/login.service';
import { Router } from '@angular/router';
import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'app-login',
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  username!:string
  password!:string


  constructor(private loginService: LoginService,
    private authService : AuthService,
    private router: Router){}


  onSubmit() 
  {

    
    if(!this.username || !this.password )
      {
        alert('Please enter all of the fields needed for login')
        return;
      }
   
    const user = 
    {
      username: this.username,
      password: this.password
    }
    

    this.loginService.login(user).subscribe({
      next: (u) => 
        {
            alert('Login successfull!!')
            localStorage.setItem('token',u.userAuthentication.token)
            console.log(u.userAuthentication.token)
            this.authService.currentUserSignal.set(u)
            this.router.navigate(['/'])
        },
        error : () => 
          {
            alert('Login failed')
          }
    })

   
  }
}
