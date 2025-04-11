import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CharacterRes } from '../components/common/models/character.model';

@Injectable({
  providedIn: 'root'
})
export class CharactersService {
  constructor(private http: HttpClient) { }

  getCharacters(page?: number): Observable<CharacterRes>{
    return this.http.get<CharacterRes>("https://rickandmortyapi.com/api/character");
  }
}
