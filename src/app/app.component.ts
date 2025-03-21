import { Component, inject, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit{

  authService = inject(AuthService)

  ngOnInit(): void {
    this.authService.get().subscribe({
        next: (response) =>
          {
            this.authService.currentUserSignal.set(response);
          },
          error: () => 
            {
              this.authService.currentUserSignal.set(null)
            }
    })
  }


  title = 'PersonalFinanceFrontend';
}
