import { Injectable, computed, inject, signal } from '@angular/core';
import { environments } from '../../environments/environments';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, map, tap, throwError } from 'rxjs';
import { CurrencyResponse } from '../interfaces/currrecy.reponse.interface';

@Injectable({
  providedIn: 'root',
})


export class CurrencyService {

  private baseUrl: string = environments.baseUrl;

  private _changeCurrency = signal<CurrencyResponse | null>(null);

  public changeCurrency = computed(() => this._changeCurrency());

  constructor( private http: HttpClient ) {}


  changeCurrecny(monto: string, monedaOrigen: string,monedaDestino: string ): Observable<boolean> {
    const url = `${this.baseUrl}/api/v1/divisa`;
    const body = { monto, monedaOrigen, monedaDestino };

    return this.http.post<CurrencyResponse>(url, body).pipe(
      tap(( { ...rest } ) => {
        this._changeCurrency.set(rest);
      }),
      map(
       () => true
      ),
      catchError( err => throwError( () => err.error.message) )
    );
  }
}
