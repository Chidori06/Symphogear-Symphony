import {Component, OnInit} from '@angular/core';
import {MusicService} from "../../services/music.service";
import {MatProgressBar} from "@angular/material/progress-bar";
import {CommonModule} from "@angular/common";
import {MatCardModule} from "@angular/material/card";
import {MatButtonModule} from "@angular/material/button";
import {Music} from "../../models/music";
import {RouterModule} from "@angular/router";
import {HTTP_INTERCEPTORS} from "@angular/common/http";

@Component({
  selector: 'app-music-list',
  standalone: true,
  imports: [MatProgressBar, CommonModule, MatCardModule, MatButtonModule, RouterModule],
  templateUrl: './music-list.component.html',
  styleUrl: './music-list.component.css'
})
export class MusicListComponent implements OnInit{

  musics?: Music[];
  isLoading: boolean = true;

  constructor(private musicService: MusicService) {
  }

  ngOnInit(): void {
    this.musicService.getAll().subscribe(data => {
      this.musics = data;
      this.isLoading = false;
    })
  }

}
