import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable({
  providedIn: 'root'
})
export class CharacterService {

  constructor(private http: Http) { }

  BASE_URL = 'https://rickandmortyapi.com/api/';

  allCharacters(): Observable<any> {
    const character = 'character';
    return this.http
      .get(`${this.BASE_URL}${character}`)
        .map(response => {
        return response.json().results;
      });
  }

  detailCharacter(id: string): Observable<any> {
    const detail = `character/${id}`;
    return this.http
    .get(`${this.BASE_URL}${detail}`)
      .map(response => {
      return response.json();
    });
  }

  charactersForPage(id: number): Observable<any> {
    const page = `character/?page=${id}`;
    return this.http
    .get(`${this.BASE_URL}${page}`)
      .map(response => {
      return response.json().results;
    });
  }

}
