import { Component } from '@angular/core';
import { MatInputModule } from "@angular/material/input";
import { MatCardModule } from "@angular/material/card";
import { MatButtonModule } from "@angular/material/button";
import { Router, RouterModule } from "@angular/router";
import { CommonModule } from "@angular/common";
import { AuthRequest } from "../../models/auth-request";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { UserService } from "../../services/user.service";
import { MatProgressBar, MatProgressBarModule } from "@angular/material/progress-bar";

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [MatInputModule, MatCardModule, MatButtonModule, RouterModule, CommonModule,
    FormsModule, ReactiveFormsModule, MatProgressBarModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  authRequest: AuthRequest = new AuthRequest();
  error: string = '';
  isLoading: boolean = false;


  constructor(private userService: UserService, private router: Router) {
  }

  loginForm() {
    this.isLoading = true;
    this.userService.login(this.authRequest).subscribe(data => {
      window.localStorage.setItem("token", data.token);
      this.router.navigate(["/"]);
    }, error => {
      this.error = error.type;
      this.isLoading = false;
    })
    console.log(this.authRequest);
  }
}
