import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Character, CharacterRes } from '../components/common/models/character.model';

@Injectable({
  providedIn: 'root'
})
export class CharactersService {
  constructor(private http: HttpClient) { }

  getCharacters(page?: number): Observable<CharacterRes>{
    return this.http.get<CharacterRes>("https://rickandmortyapi.com/api/character/?page=" + page);
  }

  getCharacter(id: number): Observable<Character>{
    return this.http.get<Character>("https://rickandmortyapi.com/api/character/" + id);
  }

  getMultipleCharacters(ids: number[]): Observable<Character[]> {
    return this.http.get<Character[]>("https://rickandmortyapi.com/api/character/" + ids);
  }
}
