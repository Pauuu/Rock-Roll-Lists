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
   * 
   * @param id id of the band
   * @returns Observable of the band to be deleted 
   */
  deleteBand(id: number): Observable<Band> {
    const url = `${this.url}/${id}`;

    return this.http.delete<Band>(url, this.httpOptions)
      .pipe(
        catchError(this.handleError<Band>('deleteBand'))
      );
  }

  /**
   * Returns all the information about the bands
   * ? devolver solo la informacion que se mostará en pantalla???
   * @returns Observable array of the bands
   */
  getBands(): Observable<Band[]> {
    return this.http.get<Band[]>(this.url)
      .pipe(
        catchError(this.handleError<any>('getBands'))
      );
  }

  /**
   * Returns all the information about the band
   * @param id Id of the specified band
   * @returns Observable of the band
   */
  getBand(id: number): Observable<Band> {
    return this.http.get<Band>(`${this.url}/${id}`)
      .pipe(
        catchError(this.handleError<any>('getBand'))
      );
  }

  /**
 * Handle Http operation that failed.
 * 
 * @param operation - name of the operation that failed
 * @param result - optional value to return as the observable result
 */
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      console.error(
        `Error in the method ${operation}: ${error}`
      ); // log to console instead

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

}
