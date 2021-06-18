import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

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
        catchError(
          this.handleError([], 'getBands returnded an error')
        )
      )
  }

  private handleError(result: any, message?: string): any {
    console.log();
    return result;
  }

}
