import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError } from 'rxjs/operators';

import { Band } from '../models/band';

@Injectable({
  providedIn: 'root'
})
export class BandService {

  private url = "api/bands";

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient) { }

  /**
   * Returns all the information about the bands
   * ? cambiar a solo la informacion que se mostará en pantalla???
   * @returns Observable array of the bands
   */
  getBands(): Observable<Band[]> {
    return this.http.get<Band[]>(this.url)
      .pipe(
        catchError(this.handleError<any>('getBands'))
      );
  }

  getBand(id: number): Observable<Band> {
    return this.http.get<Band>(`${this.url}/${id}`)
      .pipe(
        catchError(this.handleError<any>('getBand'))
      );
  }

  /**
 * Handle Http operation that failed.
 * Let the app continue.
 * @param operation - name of the operation that failed
 * @param result - optional value to return as the observable result
 */
   private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

}
