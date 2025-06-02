import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse} from "@angular/common/http";
import {catchError, Observable, retry, throwError} from "rxjs";
import {Music} from "../models/music";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class MusicService {

  apiUrl = environment.apiUrl+"musics";

  constructor(private httpClient: HttpClient) { }

  getAll(): Observable<Music[]>{
    return this.httpClient.get<Music[]>(this.apiUrl+".json").pipe(
      retry(1),
      catchError(this.handleError)
    )
  }

  getOne(id: number): Observable<Music>{
    return this.httpClient.get<Music>(this.apiUrl+"/"+id+'.json').pipe(
      retry(1),
      catchError(this.handleError)
    );
  }

  removeMusic(music: Music): Observable<Music> {
    return this.httpClient.delete(this.apiUrl+"/"+music.id+'.json').pipe(
      retry(1),
      catchError(this.handleError)
    )
  }

  postMusic(music: Music): Observable<Music> {
    return this.httpClient.post<Music>(this.apiUrl+".json", music).pipe(
      retry(1),
      catchError(this.handleError)
    )
  }

  putMusic(music: Music): Observable<Music>{
    return this.httpClient.put<Music>(this.apiUrl+"/"+music.id+'.json', music).pipe(
      retry(1),
      catchError(this.handleError)
    )
  }

  private handleError(error: HttpErrorResponse) {
    if (error.status === 0) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong.
      console.error(
        `Backend returned code ${error.status}, body was: `, error.error);
    }

    // Return an observable with a user-facing error message.
    return throwError(() => new ErrorEvent('Something bad happened; please try again later.'));
  }


}
