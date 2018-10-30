import { Component, OnInit } from '@angular/core';
import { CharacterService } from '../services/character.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {


  characters = [];
  loading: boolean = true;

  constructor(
    private characterService: CharacterService,
    private router: Router
  ) {}

  ngOnInit() {
    this.getAllCharacters();
  }


  getAllCharacters() {
    this.characterService.allCharacters().subscribe(response => {
      this.characters = response.sort(function() {return Math.random() - 0.5});
      console.log(this.characters);
      this.loading = false;
    });
  }

  redirectCharacter(id: string) {
    this.router.navigate(['/character', id]);
  }


}
