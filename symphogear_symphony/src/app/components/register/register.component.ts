import { Component } from '@angular/core';
import {Router, RouterModule} from "@angular/router";
import {MatFormField, MatLabel} from "@angular/material/form-field";
import {MatCardModule} from "@angular/material/card";
import {MatButtonModule} from "@angular/material/button";
import {MatInputModule} from "@angular/material/input";
import {User} from "../../models/user";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {CommonModule} from "@angular/common";
import {MatProgressBar} from "@angular/material/progress-bar";
import {UserService} from "../../services/user.service";

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [RouterModule, MatLabel, MatFormField, MatCardModule, MatButtonModule, MatInputModule,
  FormsModule, ReactiveFormsModule, CommonModule, MatProgressBar],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  user: User = new User();
  error: string = '';
  isLoading: boolean = false;

  constructor(private userService: UserService, private router: Router) {
  }

  addUser() {
    this.isLoading = true;
    this.userService.registerUser(this.user).subscribe(data => {
      this.router.navigate(['/login']);
    }, error => {
      this.error = error.type.replace('\n', '<br>');
      this.isLoading = false;
    })
  }
}
