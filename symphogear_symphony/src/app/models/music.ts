import {SafeUrl} from "@angular/platform-browser";

export class Music {
  id?: number;
  titre?: string;
  auteur?: string;
  urlYoutube?: SafeUrl|string;
  cover?: string;
  style?: string;

  constructor(id?: number, titre?: string, auteur?: string, urlYoutube?: string, cover?: string, style?: string) {
    this.id = id;
    this.titre = titre;
    this.auteur = auteur;
    this.urlYoutube = urlYoutube;
    this.cover = cover;
    this.style = style;
  }
}
