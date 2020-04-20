import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Smartphone } from './smartphone';

@Injectable({
  providedIn: 'root'
})
export class SmartphoneService {

  endpoint = 'assets/data/smartphone.json';

  constructor(private http: HttpClient) { }

  getSmartphone(): Observable<Smartphone[]> {
    return this.http.get<Smartphone[]>(this.endpoint)
    .pipe(
      catchError(this.handleError<Smartphone[]>('Smartphones', []))
    );
  }
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.log(`failed: ${error.message}`);
      return of(result as T);
    };
  }
}
