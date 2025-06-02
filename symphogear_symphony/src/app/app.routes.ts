import { Routes } from '@angular/router';
import { MusicListComponent } from "./components/music-list/music-list.component";
import { MusicDetailComponent } from "./components/music-detail/music-detail.component";
import { AddMusicComponent } from "./components/add-music/add-music.component";
import { EditMusicComponent } from "./components/edit-music/edit-music.component";
import { LoginComponent } from "./components/login/login.component";
import { RegisterComponent } from "./components/register/register.component";
import { loginGuard } from "./guards/login.guard";

export const routes: Routes = [
  { path: '', component: MusicListComponent }, // Rajouter canActivate: [loginGuard] quand ça sera réparé ou pas.
  { path: 'ajout', component: AddMusicComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: ':id', component: MusicDetailComponent },
  { path: 'mise-a-jour/:id', component: EditMusicComponent }
];
