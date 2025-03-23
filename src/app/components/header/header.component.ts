import { NgIf } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { HttpClient } from '@angular/common/http';
import { UserServiceService } from '../../services/user-service.service';
import { UserInteface } from '../../models/UserInterface';
import { RoleEnum } from '../../models/enumiration/RoleEnum';

@Component({
  selector: 'app-header',
  imports: [RouterLink,NgIf],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})

export class HeaderComponent implements OnInit {

  authService = inject(AuthService)
  ngOnInit(): void {}
  

  IsUserAdmin()
  {
    // console.log('This is the user for checking admin')
    // console.log(this.authService.currentUserSignal()?.name)

    var roles = this.authService.currentUserSignal()?.roles
    // console.log('This is the roles')
    // console.log(roles)
    
    var result = roles?.find((u) => u.role.userRole === RoleEnum.Admin) ?? null
    // console.log('This is result')
    // console.log(result)

    return result ? true : false 
  }



  logout()
  {
    console.log('Logout....')
    localStorage.removeItem('token')
    localStorage.clear()
    this.authService.currentUserSignal.set(undefined)
    // console.log(this.authService.currentUserSignal())
  }
}


