import { Component } from '@angular/core';
import {Router, RouterModule} from "@angular/router";
import {MatButtonModule} from "@angular/material/button";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInput, MatInputModule} from "@angular/material/input";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {Music} from "../../models/music";
import {CommonModule} from "@angular/common";
import {MatSelectModule} from "@angular/material/select";
import {MusicService} from "../../services/music.service";
import {MatProgressBar} from "@angular/material/progress-bar";
import {MatSnackBar} from "@angular/material/snack-bar";

@Component({
  selector: 'app-add-music',
  standalone: true,
  imports: [RouterModule, MatButtonModule, MatFormFieldModule, MatInputModule, FormsModule, ReactiveFormsModule,
    CommonModule, MatSelectModule, MatProgressBar],
  templateUrl: './add-music.component.html',
  styleUrl: './add-music.component.css'
})
export class AddMusicComponent {

  isLoading: boolean = false;
  styles: string[] = ["Rap", "RNB", "Indéfini", "Pop", "Hip Hop"];
  music: Music = new Music();

  constructor(private musicService: MusicService, private router: Router, private matSnackbar: MatSnackBar) {
  }
  submitForm() {
    this.isLoading = true;
    this.musicService.postMusic(this.music).subscribe(data => {
      this.matSnackbar.open('Musique ajoutée !', 'Fermer', {
        horizontalPosition: 'end',
        verticalPosition: 'top',
      });

      this.router.navigate(["/"]);
    })
  }
}
