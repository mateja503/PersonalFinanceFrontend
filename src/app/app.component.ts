import { Component, Inject, inject, OnInit,PLATFORM_ID  } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
 import { AuthService } from './services/auth.service';
import { UserServiceService } from './services/user-service.service';
import { HttpClient } from '@angular/common/http';
import { UserInteface } from './models/UserInterface';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit{

  constructor(
    private authService: AuthService,
    private userService: UserServiceService,
    @Inject(PLATFORM_ID) private platformId: object
  ) {}


  checkIfTokenExists() : string | null
  {

    const token = localStorage.getItem('token')
    console.log('Check if token exists')
    console.log(token)
    return token
  }


  checkUser(){
    
    console.log('This is the authService,currengsignalt() in app.component')
    console.log(this.authService.currentUserSignal())
  

    this.userService.get().subscribe({
        next: (user) =>
          {
           
            console.log('User found')
            console.log(user)
            console.log(user.roles)
            this.authService.currentUserSignal.set(user);
          },
          error: (err) => 
            {
              
              console.log('Error', err)
              this.authService.currentUserSignal.set(null)
            }
    })
  }

  ngOnInit(){
    if (isPlatformBrowser(this.platformId)) {
    //   console.log(this.authService.currentUserSignal())
    //  if(this.authService.currentUserSignal())
    console.log(this.checkIfTokenExists())
    if(this.checkIfTokenExists() !== null)
          this.checkUser()
        
      
    }
    // this.checkUser()
    // this.http.get<UserInteface>('http://localhost:5082/api/AccountUser/validate-user')
    // .subscribe({
    //   next: (user) => 
    //     {
    //       this.authService.currentUserSignal.set(user)
    //     },
    //     error: (user) => {
    //       this.authService.currentUserSignal.set(undefined)
    //     }
    // })
    
}
  title = 'PersonalFinanceFrontend';
}
