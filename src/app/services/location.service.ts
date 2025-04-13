import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CharacterLocation } from '../components/common/models/character-location.model';

@Injectable({
  providedIn: 'root',
})
export class LocationService {
  constructor(private http: HttpClient) {}

  getLocation(id: number): Observable<CharacterLocation> {
    return this.http.get<CharacterLocation>(
      'https://rickandmortyapi.com/api/location/' + id
    );
  }
}
