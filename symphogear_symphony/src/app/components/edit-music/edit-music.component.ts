import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatProgressBar } from '@angular/material/progress-bar';
import { MatSelectModule } from '@angular/material/select';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { Music } from '../../models/music';
import { MusicService } from '../../services/music.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-edit-music',
  standalone: true,
  imports: [RouterModule, MatButtonModule, MatFormFieldModule, FormsModule, ReactiveFormsModule,
    CommonModule, MatSelectModule, MatProgressBar, MatInputModule],
  templateUrl: './edit-music.component.html',
  styleUrl: './edit-music.component.css'
})
export class EditMusicComponent implements OnInit {
  music: Music = new Music();
  isLoading: boolean = true;
  styles: string[] = ["Rap", "RNB", "Indéfini", "Pop", "Hip Hop"];

  constructor(private activatedRoute: ActivatedRoute, private musicService: MusicService, private router: Router, private matSnackbar: MatSnackBar) {
  }

  ngOnInit(): void {
    let id = this.activatedRoute.snapshot.paramMap.get('id');
    if (id) {
      this.musicService.getOne(+id).subscribe(data => {
        this.music = data;
        this.isLoading = false;
      })
    }
  }

  submitForm() {
    this.isLoading = true;
    this.musicService.putMusic(this.music).subscribe(data => {
      this.matSnackbar.open(this.music.titre + ' mise à jour !', 'Fermer', {
        horizontalPosition: 'end',
        verticalPosition: 'top',
      });
      this.router.navigate(["/"]);
    })
  }
}
