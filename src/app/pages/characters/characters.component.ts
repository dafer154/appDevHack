import { Component, OnInit } from '@angular/core';
import { CharacterService } from '../../services/character.service';
import { Router } from '@angular/router';



@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.css']
})
export class CharactersComponent implements OnInit {

  characters = [];
  pages = [];
  page: number = 0;
  loading: boolean = true;


  constructor(
    private characterService: CharacterService,
    private router: Router
  ) {}

  ngOnInit() {
    this.getAllCharacters();
    this.obtainPages();
  }


  getAllCharacters() {
    this.characterService.allCharacters().subscribe(response => {
      this.characters = response;
      this.loading = false;
    });
  }

  getCharacterForPage(id: number) {
    this.characterService.charactersForPage(id).subscribe(response => {
      this.characters = response;
      this.loading = false;
    });
  }

  redirectCharacter(id: string) {
    this.router.navigate(['/character', id]);
  }

  obtainPages() {
    const arrayPages = [];
    for ( let i = 1; i <= 25; i++) {
      arrayPages.push(i);
    }
    this.pages = arrayPages;
  }
}
