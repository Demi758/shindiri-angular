import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { CharactersService } from '../../services/characters.service';
import { Character, CharacterRes } from '../common/models/character.model';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrl: './characters.component.css',
})
export class CharactersComponent implements OnInit {
  constructor(
    private characterService: CharactersService,
    private router: Router
  ) {}

  @ViewChild('lastCharacter') lastCharacter!: ElementRef;
  shouldFetchCharacters$ = new Subject<boolean>();
  characters: Character[] = [];
  page: number = 1;
  intersectionObserver!: IntersectionObserver;
  reachedLast: boolean = false;

  ngOnInit() {
    this.shouldFetchCharacters$.subscribe(() => {
      this.characterService.getCharacters(this.page).subscribe({
        next: (res: CharacterRes) => {
          const resCharacters = res.results;
          const resInfo = res.info;
          for (let character of resCharacters!) {
            this.characters.push(new Character(character));
          }
          this.reachedLast = resInfo?.count! <= this.characters.length;
        },
      });
    });
    this.shouldFetchCharacters$.next(true);
  }

  ngAfterViewInit() {
    this.intersectionObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (
            entry.isIntersecting &&
            !this.reachedLast
          ) {
            this.page++;
            this.shouldFetchCharacters$.next(true);
          }
        });
      }
    );

    this.intersectionObserver.observe(this.lastCharacter.nativeElement);
  }

  openCharacter(id: number) {
    this.router.navigateByUrl('characters/' + id);
  }
}
