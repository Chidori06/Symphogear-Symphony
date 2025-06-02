import { Component, OnInit } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { MatToolbar, MatToolbarModule } from "@angular/material/toolbar";
import { MatButtonModule } from "@angular/material/button";
import { MatIconModule } from "@angular/material/icon";
import { CommonModule } from "@angular/common";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MatToolbarModule, MatButtonModule, MatIconModule, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'Symphogear Symphony';
  token: string | null = window.localStorage.getItem("token");

  constructor(private router: Router) {
  }


  logout() {
    window.localStorage.removeItem("token");
    this.router.navigate(["/login"]);
  }

  ngOnInit(): void {
    this.token = window.localStorage.getItem("token");
  }
}
