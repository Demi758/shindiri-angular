import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CharacterEpisode } from '../components/common/models/character-episode.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EpisodeService {

  constructor(private http: HttpClient) { }
  
    getEpisode(id: number): Observable<CharacterEpisode>{
        return this.http.get<CharacterEpisode>("https://rickandmortyapi.com/api/episode/" + id);
      }
}
