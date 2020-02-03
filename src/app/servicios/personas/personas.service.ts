import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Persona } from 'src/app/personas';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PersonasService {

  private personasURL = "api/personas";

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient) { }

  getPersonas(): Observable<Persona[]> {
    return this.http.get<Persona[]>(this.personasURL)
/*       .pipe(
        catchError(this.handleError<Persona[]>('getPersonas', []))
      ); */
  }





/*   private handleError<T>(result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      return of(result as T);
    };
  } */

  /*   private log(message: string) { //para alertas
      this.messageService.add(`HeroService: ${message}`);
    } */

}
