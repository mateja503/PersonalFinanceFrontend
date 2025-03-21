import { Component } from '@angular/core';
import { RegisterService } from '../../../services/register.service';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'app-register',
  imports: [FormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {
  username!:string
  email!: string
  password!: string
  name!: string
  surname!:string

  constructor(private registerService: RegisterService,private authService: AuthService,private router: Router){}

  onSubmit()
  {

    if(!this.username ||
      !this.email ||
      !this.password ||
      !this.name ||
      !this.surname)
      {
        alert('Please enter all of the fields')
      }

    const newUser = 
    {
      username:this.username,
      email:this.email,
      password:this.password,
      name:this.name,
      surname:this.surname
    
    }

    this.registerService.register(newUser).subscribe({
      next: (user) => 
        {
          alert('User registered successfully')
          localStorage.setItem('token',user.userAuthentication.token)
          console.log(user.userAuthentication.token)
          this.authService.currentUserSignal.set(user)
          console.log('This is the authService.currentUserSignal()')
          console.log(this.authService.currentUserSignal())
          this.router.navigate(['/'])
        },
        error:() => 
          {
            alert('User failed to register')
          }
    })
  }
}
