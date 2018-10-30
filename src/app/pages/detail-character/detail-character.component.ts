import { Component, OnInit } from '@angular/core';
import { CharacterService } from '../../services/character.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Character } from '../../classes/character';

@Component({
  selector: 'app-detail-character',
  templateUrl: './detail-character.component.html',
  styleUrls: ['./detail-character.component.css']
})
export class DetailCharacterComponent implements OnInit {

  character: Character[] = [];
  loading = true;

  constructor(
    private characterService: CharacterService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {

    this.route.params.subscribe((param: any ) => {
      const id = param['id'];
      this.characterService.detailCharacter(id).subscribe(
        response => {
          this.character = response;
          this.loading = false;
        }
      );
    });
  }

}
