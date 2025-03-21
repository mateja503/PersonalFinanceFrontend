import { NgIf } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { HttpClient } from '@angular/common/http';
import { UserServiceService } from '../../services/user-service.service';

@Component({
  selector: 'app-header',
  imports: [RouterLink,NgIf],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})

export class HeaderComponent implements OnInit {

  authService = inject(AuthService)
  
  ngOnInit(): void {}
  



  logout()
  {
    console.log('Logout....')
    localStorage.removeItem('token')
    localStorage.clear()
    this.authService.currentUserSignal.set(undefined)
    // console.log(this.authService.currentUserSignal())
  }
}


