import { NgIf } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-header',
  imports: [RouterLink,NgIf],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})

export class HeaderComponent implements OnInit {
  authService = inject(AuthService)

  constructor(){}


  ngOnInit(): void {
  }

  logout()
  {
    console.log('Logout....')
    localStorage.setItem('token','')
    this.authService.currentUserSignal.set(null)
    console.log(this.authService.currentUserSignal())
  }
}


