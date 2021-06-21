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

  addBand(band: Band) :Observable<Band>{
    return this.http.post<Band>(this.url, band, this.httpOptions)
    .pipe(
      catchError(this.handleError<Band>('addBand'))
    );
  }

  /**
   * 
   * @param id id of the band
   * @returns Observable of the band to be deleted 
   */
  deleteBand(id: number): Observable<Band> {
    const bandUrl = `${this.url}/${id}`;

    return this.http.delete<Band>(bandUrl, this.httpOptions)
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

  modifyBand(band: Band): Observable<any> {
    const bandsUrl = "api/bands";
    return this.http.put(bandsUrl, band, this.httpOptions)
    .pipe(
      catchError(this.handleError<any>("modifyBand"))
    );
  }

  /**
   * Returns an array with the bands that matched the name
   * @param text Name of the band(s)
   * @returns Observable of the array of the bands
   */
  searchBands(text: string): Observable<Band[]> {
    if (!text.trim()) return of([]);  //======== no text ==========>

    return this.http.get<Band[]>(`${this.url}/?name=${text}`)
      .pipe(
        catchError(this.handleError<Band[]>('searchBands', []))
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
